export interface User {
  id: string;
  full_name: string;
  email: string;
  password?: string;
  created_at: string;
}

export interface Candidate {
  id: string;
  full_name: string;
  email?: string | null;
  phone?: string | null;
  gender?: string | null;
  location?: string | null;

  resume_url?: string | null;
  source_portal?: string | null;
  portal_unique_id?: string | null;
  portal_date?: string | null;

  total_experience?: number | null;
  relevant_experience?: number | null;
  experience_years?: number | null;

  current_ctc?: number | null;
  expected_ctc?: number | null;
  notice_period?: string | null;

  current_company?: string | null;
  current_designation?: string | null;

  preferred_roles: string[];
  preferred_locations: string[];
  employment_type?: string | null;

  year_of_birth?: number | null;
  skills_raw?: string | null;
  companies_raw?: string | null;
  ctc_feedback?: string | null;
  remark?: string | null;
  jd_brief?: string | null;

  created_at: string;
  updated_at: string;
}
