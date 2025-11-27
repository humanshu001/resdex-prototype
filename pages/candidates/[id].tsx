import { GetServerSideProps } from "next";
import Link from "next/link";
import prisma from "@/lib/prisma"; // Direct DB access for SSR
import axios from "axios";

// UI Components
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";

// Icons
import { 
  MapPinIcon, 
  BriefcaseIcon, 
  AcademicCapIcon, 
  StarFilledIcon,
} from "@/components/icons";

// Simple Icons
const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

interface Props {
  candidate: any; // Ideally, define a proper TypeScript interface matching your Prisma schema
}

export default function CandidateProfilePage({ candidate }: Props) {
  
  // --- Skill Merging Logic ---
  const topSkills = (candidate.top_skills || "").split(",").map((s: string) => s.trim()).filter(Boolean);
  const rawSkills = (candidate.skills_raw || "").split(",").map((s: string) => s.trim()).filter(Boolean);
  const allSkills = Array.from(new Set([...topSkills, ...rawSkills]));

  const toDrivePreview = (url: string) => {
  if (!url) return url;
  const match = url.match(/\/d\/(.*?)\//);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
};


  return (
    <>
      {/* PAGE WRAPPER */}
<div className="min-h-screen bg-gray-50">

  {/* ==== STICKY HEADER ==== */}
  <div className="h-16 px-6 md:px-20 backdrop-blur-md bg-white/80 border-b border-gray-200 flex items-center justify-between sticky top-0 z-20">
    <Link href="/candidates" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors font-medium">
      <ChevronLeftIcon className="w-4 h-4" />
      Back to List
    </Link>
    <div className="text-sm text-gray-400">
      Added {candidate.portal_date ? new Date(candidate.portal_date).toLocaleDateString() : 'N/A'}
    </div>
  </div>

  {/* ==== MAIN GRID ==== */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">

    {/* ====================================== */}
    {/* LEFT SIDEBAR (PROFILE / SKILLS / CONTACT) */}
    {/* ====================================== */}
    <div className="col-span-1 space-y-6">

      {/* Profile card */}
      <Card className="shadow-sm border border-gray-100">
        <CardBody className="py-6 flex flex-col items-start text-center -mb-4">
          <div className="w-full pl-3 z-10">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-700 to-black text-white flex items-center justify-start text-3xl font-bold mt-5 z-10 border-4 border-white">
            <img src="/person.png" alt="" className="w-full h-full rounded-xl" />
          </div>
          </div>
          
          <div className="w-[92%] bg-gradient-to-b from-blue-400 rounded-lg h-20 absolute top-4">
            <img src="/blue-bg.jpg" className="w-full h-full rounded-lg" alt="" />
          </div>

          <h1 className="text-xl font-bold mt-4 ml-3 flex items-center">{candidate.full_name}
            <span className="bg-purple-200 text-purple-600 rounded-full font-medium text-xs px-1 py-0.5 ml-2">{candidate.current_designation || "No Designation"}</span>
          </h1>

          <p className="text-sm text-gray-500 mt-1 ml-3">
              
            
          </p>

          <Chip size="sm" variant="flat" className="mt-3 bg-blue-50 text-blue-700 ml-3">
            {candidate.source_portal || "Manual"}
          </Chip>

          <div className="shadow-lg border border-gray-200 rounded-xl p-2 flex w-full mt-4">
            <MapPinIcon className="text-white bg-black border-1.5 h-10 w-10 p-2 rounded-lg" />
            <div className="ml-3">
              <p className="text-xs text-gray-400">Location</p>
              <p className="font-medium">{candidate.location || "N/A"}</p>
            </div>
          </div>
          <div className="shadow-lg border border-gray-200 rounded-xl p-2 flex w-full mt-4">
            <img src="/logo.png" alt="" className="rounded-lg bg-black h-10 w-10" />
            <div className="ml-3">
              <p className="text-xs text-gray-400">Current Company</p>
              <p className="font-medium">{candidate.current_company || "N/A"}</p>
            </div>
          </div>
        </CardBody>
    <CardHeader className="pb-0 pt-5 px-5">
      <h3 className="font-bold text-gray-700">Top Skills</h3>
    </CardHeader>
    <CardBody className="p-5 flex flex-wrap flex-row gap-2 -mb-4">
      {topSkills.length ? topSkills.map((s:string, i:number) => (
        <Chip key={i} color="primary" variant="solid" size="sm">
          {s}
        </Chip>
      )) : <p className="text-sm text-gray-400">No top skills.</p>}
    </CardBody>
    <CardHeader className="pb-0 pt-5 px-5">
      <h3 className="font-bold text-gray-700">Raw Skills</h3>
    </CardHeader>
    <CardBody className="p-5 flex flex-wrap flex-row gap-2 -mb-4">
      {rawSkills.length ? rawSkills.map((s:string, i:number) => (
        <Chip key={i} variant="flat" size="sm" className="bg-gray-100 text-gray-700">
          {s}
        </Chip>
      )) : <p className="text-sm text-gray-400">No raw skills.</p>}
    </CardBody>
        <CardHeader className="pb-0 pt-5 px-5">
          <h3 className="font-bold text-gray-700">Contact</h3>
        </CardHeader>
        <CardBody className="p-5 space-y-4">

          <div className="flex items-start gap-3">
            <MailIcon className="w-5 h-5 mt-1 text-gray-500" />
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="font-medium">{candidate.email || "—"}</p>
            </div>
          </div>

          <Divider />

          <div className="flex items-start gap-3">
            <PhoneIcon className="w-5 h-5 mt-1 text-gray-500" />
            <div>
              <p className="text-xs text-gray-400">Phone</p>
              <p className="font-medium">{candidate.phone || "—"}</p>
            </div>
          </div>

        </CardBody>
  </Card>

    </div> {/* END LEFT SIDEBAR */}

{/* ====================================== */}
{/* CENTER COLUMN – METRICS + SKILLS */}
{/* ====================================== */}
<div className="col-span-1 lg:col-span-2 space-y-6">

  {/* ===== TOP SIX METRICS ===== */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      <Card className="shadow-sm border border-gray-100">
        <CardBody className="p-4 text-center">
          <p className="text-[11px] text-gray-400 uppercase">Experience</p>
          <p className="text-2xl font-bold mt-1">{candidate.total_experience} Yrs</p>
        </CardBody>
      </Card>
      <Card className="shadow-sm border border-gray-100">
        <CardBody className="p-4 text-center">
          <p className="text-[11px] text-gray-400 uppercase">Notice Period</p>
          <p className="text-2xl font-bold mt-1">{candidate.notice_period ?? "—"}</p>
        </CardBody>
      </Card>
      <Card className="shadow-sm border border-gray-100">
        <CardBody className="p-4 text-center">
          <p className="text-[11px] text-gray-400 uppercase">Preferred Role</p>
          <p className="text-2xl font-bold mt-1">{candidate.preferred_roles ?? "—"}</p>
        </CardBody>
      </Card>
      <Card className="shadow-sm border border-gray-100">
        <CardBody className="p-4 text-center">
          <p className="text-[11px] text-gray-400 uppercase">Preferred Location</p>
          <p className="text-2xl font-bold mt-1">{candidate.preferred_locations ?? "—"}</p>
        </CardBody>
      </Card>
  </div>

  {/* ===== Skills Section ===== */}


  {/* ===== Preferences ===== */}
  

  {/* ===== Resume Preview ===== */}
  {candidate.resume_url && (
    <Card className="shadow-sm border border-gray-100">
      <CardHeader className="pb-0 pt-5 px-5">
        <h3 className="font-bold text-gray-700">Resume Preview</h3>
      </CardHeader>

      <CardBody className="p-5">
        <iframe
          src={toDrivePreview(candidate.resume_url)}
          className="w-full h-[500px] rounded border border-gray-200"
        />
      </CardBody>
    </Card>
  )}

</div> {/* END CENTER-COLUMN */}

</div> {/* END GRID */}
</div> {/* END PAGE WRAPPER */}

    </>
  );
}

// --- Server Side Rendering Logic ---
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Redirect to login if no auth cookie present
  const cookies = (context.req as any).cookies || {};
  if (!cookies.user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  const id = context.params?.id;

  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  try {
    const candidate = await prisma.candidates.findUnique({
      where: { id },
    });

    if (!candidate) {
      return { notFound: true };
    }

    // Convert Date objects to Strings for Next.js serialization
    // Prisma returns Date objects, but getServerSideProps needs JSON-serializable types.
    const serializedCandidate = JSON.parse(JSON.stringify(candidate));

    return {
      props: {
        candidate: serializedCandidate,
      },
    };
  } catch (error) {
    console.error("SSR Error fetching candidate:", error);
    return { notFound: true };
  }
};