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
      {/* Sticky Header */}
      <div className="h-16 px-6 md:px-20 backdrop-blur-md bg-white/80 border-b border-gray-200 flex items-center justify-between sticky top-0 z-20">
        <Link href="/candidates" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors font-medium">
          <ChevronLeftIcon className="w-4 h-4" />
          Back to List
        </Link>
        <div className="text-sm text-gray-400">
          Added {candidate.portal_date ? new Date(candidate.portal_date).toLocaleDateString() : 'N/A'}
        </div>
      </div>

      <div className="min-h-screen p-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* 1. Header Card (Avatar + Designation + Action) */}
          <Card className="w-full shadow-sm border border-gray-100">
            <CardBody className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                
                <div className="flex items-center gap-5">
                  {/* Large Avatar */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center text-white text-3xl font-bold shadow-lg shrink-0">
                    {candidate.full_name?.charAt(0).toUpperCase()}
                  </div>
                  
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{candidate.full_name}</h1>
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-gray-600 font-medium text-lg">
                      <BriefcaseIcon className="w-5 h-5 text-gray-400" />
                      <span>{candidate.current_designation || "No Designation"}</span>
                      <span className="text-gray-300 mx-1">|</span>
                      <span>{candidate.current_company || "Unknown Company"}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                         <MapPinIcon className="w-4 h-4" />
                         {candidate.location || "N/A"}
                      </div>
                      <div className="flex items-center gap-1.5">
                         <Chip size="sm" variant="flat" className="bg-blue-50 text-blue-700 h-5 text-xs px-1">
                            {candidate.source_portal || "Manual"}
                         </Chip>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  {candidate.resume_url ? (
                    <Button
                      onClick={async (e: any) => {
                        e.preventDefault();
                        try {
                          await fetch('/api/analytics/view-resume', {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            credentials: 'include',
                            body: JSON.stringify({ candidateId: candidate.id }),
                          });
                        } catch (err) {
                          console.error('Failed to log resume view', err);
                        } finally {
                          // Open resume in a new tab regardless of logging result
                          window.open(candidate.resume_url, '_blank');
                        }
                      }}
                      color="primary"
                      className="px-8 font-semibold shadow-md"
                    >
                      View Resume
                    </Button>
                  ) : (
                    <Button disabled variant="flat" className="px-8 opacity-50">No Resume</Button>
                  )}
                </div>

              </div>
            </CardBody>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 2. Left Column: Stats & Contact */}
            <div className="space-y-6">
              
              {/* Professional Stats */}
              <Card className="shadow-sm border border-gray-100">
                <CardHeader className="pb-0 pt-5 px-5 flex justify-between items-center">
                  <h3 className="font-bold text-gray-700">Snapshot</h3>
                </CardHeader>
                <CardBody className="p-5">
                  <div className="grid grid-cols-2 gap-y-6 gap-x-2">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Experience</p>
                      <p className="text-lg font-bold text-gray-900">{candidate.total_experience ?? 0} Yrs</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Notice Period</p>
                      <p className="text-lg font-bold text-gray-900">{candidate.notice_period || "—"}</p>
                    </div>
                    {/* <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Current CTC</p>
                      <p className="text-lg font-bold text-gray-900">{candidate.current_ctc || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Expected CTC</p>
                      <p className="text-lg font-bold text-gray-900">{candidate.expected_ctc || "—"}</p>
                    </div> */}
                    <div className="col-span-2">
                      <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Worked At</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Contact Info */}
              <Card className="shadow-sm border border-gray-100">
                <CardHeader className="pb-0 pt-5 px-5">
                   <h3 className="font-bold text-gray-700">Contact Details</h3>
                </CardHeader>
                <CardBody className="p-5 space-y-4">
                   <div className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                       <MailIcon className="w-4 h-4 text-gray-500" />
                     </div>
                     <div className="overflow-hidden">
                       <p className="text-xs text-gray-400">Email</p>
                       <p className="font-medium text-gray-900 truncate" title={candidate.email}>{candidate.email || "—"}</p>
                     </div>
                   </div>
                   <Divider className="my-1"/>
                   <div className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                       <PhoneIcon className="w-4 h-4 text-gray-500" />
                     </div>
                     <div>
                       <p className="text-xs text-gray-400">Phone</p>
                       <p className="font-medium text-gray-900">{candidate.phone || "—"}</p>
                     </div>
                   </div>
                   <Divider className="my-1"/>
                   <div className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                       <AcademicCapIcon className="w-4 h-4 text-gray-500" />
                     </div>
                     <div>
                       <p className="text-xs text-gray-400">Education</p>
                       <p className="font-medium text-gray-900 leading-tight">{candidate.qualification || "—"}</p>
                       <p className="text-xs text-gray-500 mt-0.5">{candidate.college_name.split(",")[0]}</p>
                     </div>
                   </div>
                </CardBody>
              </Card>

            </div>

            {/* 3. Right Column: Detailed Info */}
            <div className="md:col-span-2 space-y-6">
              
              {/* Internal Feedback Section (Only if data exists) */}
              {/* {(candidate.feedback || candidate.remark || candidate.jd_brief) && (
                <Card className="shadow-sm border border-yellow-200 bg-yellow-50/30">
                  <CardHeader className="pb-0 pt-5 px-5">
                    <h3 className="font-bold text-yellow-800 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Internal Remarks
                    </h3>
                  </CardHeader>
                  <CardBody className="p-5 grid grid-cols-1 gap-6">
                     {candidate.feedback && (
                       <div>
                         <p className="text-xs font-semibold text-yellow-700 uppercase mb-1">Feedback</p>
                         <p className="text-gray-800 text-sm leading-relaxed bg-white/50 p-3 rounded-lg border border-yellow-100">{candidate.feedback}</p>
                       </div>
                     )}
                     {candidate.remark && (
                       <div>
                         <p className="text-xs font-semibold text-yellow-700 uppercase mb-1">Remark</p>
                         <p className="text-gray-800 text-sm leading-relaxed">{candidate.remark}</p>
                       </div>
                     )}
                     {candidate.jd_brief && (
                       <div>
                         <p className="text-xs font-semibold text-yellow-700 uppercase mb-1">JD Brief</p>
                         <p className="text-gray-600 text-sm italic">"{candidate.jd_brief}"</p>
                       </div>
                     )}
                  </CardBody>
                </Card>
              )} */}

              {/* Skills Section */}
              <Card className="shadow-sm border border-gray-100">
                <CardHeader className="pb-0 pt-5 px-5 flex justify-between">
                  <h3 className="font-bold text-gray-700">Skills & Expertise</h3>
                </CardHeader>
                <CardBody className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {allSkills.length > 0 ? allSkills.map((skill, i) => (
                      <Chip 
                        key={i} 
                        variant={topSkills.includes(skill) ? "solid" : "flat"} 
                        className={`
                          ${topSkills.includes(skill) ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-600"}
                          border border-transparent
                        `}
                      >
                         {topSkills.includes(skill) && <StarFilledIcon className="inline w-3 h-3 mr-1 text-yellow-400" />}
                         {skill}
                      </Chip>
                    )) : (
                      <p className="text-gray-400 text-sm">No skills listed.</p>
                    )}
                  </div>
                </CardBody>
              </Card>

              {/* Preferences Section */}
              <Card className="shadow-sm border border-gray-100">
                <CardHeader className="pb-0 pt-5 px-5">
                  <h3 className="font-bold text-gray-700">Preferences</h3>
                </CardHeader>
                <CardBody className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <p className="text-xs text-gray-400 uppercase font-semibold mb-2">Preferred Locations</p>
                       <div className="flex flex-wrap gap-2">
                         {candidate.preferred_locations && candidate.preferred_locations.length > 0 
                           ? candidate.preferred_locations.map((l: string, i: number) => (
                              <span key={i} className="text-sm font-medium text-gray-700 bg-gray-50 px-2 py-1 rounded">{l}</span>
                           ))
                           : <span className="text-sm text-gray-400">—</span>
                         }
                       </div>
                    </div>
                    <div>
                       <p className="text-xs text-gray-400 uppercase font-semibold mb-2">Preferred Roles</p>
                       <div className="flex flex-wrap gap-2">
                         {candidate.preferred_roles && candidate.preferred_roles.length > 0 
                           ? candidate.preferred_roles.map((r: string, i: number) => (
                              <span key={i} className="text-sm font-medium text-gray-700 bg-gray-50 px-2 py-1 rounded">{r}</span>
                           ))
                           : <span className="text-sm text-gray-400">—</span>
                         }
                       </div>
                    </div>
                </CardBody>
              </Card>

              {/* Webpage load using url */}
              {candidate.resume_url && (
                <Card className="shadow-sm border border-gray-100">
                  <CardHeader className="pb-0 pt-5 px-5">
                    <h3 className="font-bold text-gray-700">Resume Website Preview</h3>
                  </CardHeader>

                  <CardBody className="p-5">
                    <iframe
                      src={toDrivePreview(candidate.resume_url)}
                      title="Resume Website"
                      className="w-full h-[500px] rounded border"
                      sandbox="allow-scripts allow-same-origin allow-popups"
                    />
                  </CardBody>
                </Card>
              )}

            </div>
          </div>

        </div>
      </div>
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