import prisma from "@/lib/prisma";
import formidable from "formidable";
import * as XLSX from "xlsx";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: { bodyParser: false },
};

// --- Helper Functions ---

/**
 * Parses diverse experience strings into decimal years.
 * Examples: "Fresher" -> 0, "1 yr" -> 1.0, "18M" -> 1.5, "2.5" -> 2.5
 */
function parseExperience(value: any): number | null {
  if (!value) return null;
  const str = String(value).toLowerCase().trim();

  if (str.includes("fresher") || str === "na") return 0;

  // Handle "18M", "6m" (Months)
  if (str.includes("m") && !str.includes("co")) { // Avoid matching 'com' in email/degree
    const months = parseFloat(str.replace(/[^0-9.]/g, ""));
    return isNaN(months) ? null : Number((months / 12).toFixed(2));
  }

  // Handle "1 yr", "5 yrs"
  if (str.includes("yr") || str.includes("year")) {
    const years = parseFloat(str.replace(/[^0-9.]/g, ""));
    return isNaN(years) ? null : years;
  }

  // Fallback for raw numbers "2.5"
  const num = parseFloat(str);
  return isNaN(num) ? null : num;
}

/**
 * Parses Excel dates.
 * Excel can return dates as strings "2025-10-06" or serial numbers.
 * The XLSX.read options `cellDates: true` handles most of this, but we double check.
 */
function parseDate(value: any): Date | null {
  if (!value || value === "NA") return null;
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

/**
 * Converts comma-separated strings to string arrays (for preferred_roles, etc.)
 */
function toArray(value: any): string[] {
  if (!value) return [];
  return String(value)
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

// --- Main Handler ---

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Upload Error:", err);
      return res.status(500).json({ message: "File parsing error" });
    }

    const uploaded = files.file;
    let file: formidable.File | null = null;
    if (uploaded) {
      file = Array.isArray(uploaded) ? uploaded[0] : (uploaded as formidable.File);
    }
    if (!file) return res.status(400).json({ message: "No file uploaded" });

    try {
      const workbook = XLSX.readFile(file.filepath, {
        cellDates: true, // Automatically convert Excel serial dates to JS Dates
        cellText: false,
      });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      
      // Convert sheet to JSON with raw values
      const rows: any[] = XLSX.utils.sheet_to_json(sheet, { defval: null });

      let successCount = 0;
      let failedCount = 0;
      let errors: any[] = [];

      // Loop through rows
      for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        try {
          // SKIP EMPTY ROWS based on critical fields
          if (!row["Name"] && !row["Email ID"] && !row["Mobile No"]) {
            continue; 
          }

          await prisma.candidates.create({
            data: {
              // --- Personal Info ---
              full_name: row["Name"] || "Unknown",
              email: row["Email ID"] ? String(row["Email ID"]).trim() : null,
              phone: row["Mobile No"] ? String(row["Mobile No"]).trim() : null,
              gender: row["Gender"] || null,
              location: row["Location"] || null,

              // --- Portal Info ---
              resume_url: row["Resume URLs (Drive)"] || null,
              source_portal: row["Portal"] || null,
              portal_unique_id: row["Unique ID"] ? String(row["Unique ID"]) : null,
              portal_date: parseDate(row["Portal Date"]),

              // --- Education & Skills ---
              qualification: row["Qualification"] || null,
              college_name: row["College name"] || null,
              top_skills: row["Top Skills"] || null,
              skills_raw: row["Skills (All)"] || null,

              // --- Experience ---
              // Maps "Experience" column to total_experience
              total_experience: parseExperience(row["Experience"]),
              // Maps "Relevant Exp" column to relevant_experience
              relevant_experience: parseExperience(row["Relevant Exp"]), 
              
              current_designation: row["Designation"] || null,
              current_company: row["Recent Company"] || null,
              companies_raw: row["Company Names (All)"] || null,

              // --- Dates ---
              apply_date: parseDate(row["Apply Date"]),
              calling_date: parseDate(row["Calling Date"]),

              // --- CTC (Stored as String to preserve "14k", "30% hike") ---
              current_ctc: row["Curr CTC"] ? String(row["Curr CTC"]) : null,
              expected_ctc: row["Exp CTC"] ? String(row["Exp CTC"]) : null,

              // --- Feedback / Status ---
              feedback: row["Feedback"] || null,
              remark: row["Remark"] || null,
              jd_brief: row["JD Brief"] || null,

              // --- Defaults / Placeholders ---
              preferred_roles: [], // Not present in CSV, default empty
              preferred_locations: [], // Not present in CSV, default empty
            },
          });

          successCount++;
        } catch (error: any) {
          console.error(`Row ${index + 2} Error:`, error.message);
          failedCount++;
          errors.push({
            row: index + 2, // Excel row number (approx)
            name: row["Name"],
            error: error.message,
          });
        }
      }

      return res.json({
        message: "Import processing complete",
        successCount,
        failedCount,
        errors,
        totalRowsProcessed: rows.length,
      });

    } catch (e: any) {
      return res.status(500).json({ message: "Excel processing failed", error: e.message });
    }
  });
}