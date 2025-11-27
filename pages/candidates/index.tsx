import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// UI Components
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Divider } from "@heroui/divider";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Select, SelectItem } from "@heroui/select";

// Icons
import { SearchIcon, MapPinIcon, BriefcaseIcon, AcademicCapIcon, CalendarIcon, StarFilledIcon, Logo } from "@/components/icons"; // Ensure you have these or similar icons
import Link from "next/link";

export default function CandidatesPage() {
  const router = useRouter();

  // -- Data State --
  const [filterData, setFilterData] = useState<any>({
    portals: [],
    noticePeriods: [],
    employmentTypes: [],
    genders: [],
    locations: [],
    companies: [],
    preferredRoles: [],
    qualifications: [],
    experienceOptions: [],
  });

  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);

  // -- Filter State (Arrays for Multi-select) --
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedPortals, setSelectedPortals] = useState<string[]>([]);
  const [selectedNotices, setSelectedNotices] = useState<string[]>([]);
  const [selectedExp, setSelectedExp] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [allSkills, setAllSkills] = useState<string[]>([]);
  const [searchSkillInput, setSearchSkillInput] = useState("");
  
  // Single value states
  const [keywords, setKeywords] = useState("");
  const [sort, setSort] = useState("recent");

  useEffect(() => {
    if (searchSkillInput.trim() === "") {
      setFilterData((prev: any) => ({ ...prev, skills: allSkills }));
    } else {
      const filtered = allSkills.filter((skill) =>
        skill.toLowerCase().includes(searchSkillInput.toLowerCase())
      );
      setFilterData((prev: any) => ({ ...prev, skills: filtered }));
    }
  }, [searchSkillInput, allSkills]);

  // Load Filter Options
  useEffect(() => {
    axios.get("/api/candidates/filters").then((res) => {
      setFilterData(res.data);
      setAllSkills(res.data.skills || []);
    }).catch(console.error);
  }, []);

  // Sync from URL on Load
  useEffect(() => {
    if (!router.isReady) return;
    const q = router.query;

    if (q.keywords) setKeywords(String(q.keywords));
    if (q.sort) setSort(String(q.sort));
    
    // Helper to parse comma-separated params back to arrays
    const parseArr = (val: any) => (typeof val === 'string' ? val.split(',') : []);
    
    if (q.location) setSelectedLocations(parseArr(q.location));
    if (q.company) setSelectedCompanies(parseArr(q.company));
    if (q.portal) setSelectedPortals(parseArr(q.portal));
    if (q.notice) setSelectedNotices(parseArr(q.notice));
    if (q.experience) setSelectedExp(parseArr(q.experience));
    if (q.skills) setSelectedSkills(parseArr(q.skills));
    // Trigger initial fetch
    fetchResults(q);
  }, [router.isReady]);

  // -- API Call --
  const fetchResults = async (queryParams: any) => {
    setLoading(true);
    try {
      const res = await axios.get("/api/candidates/search", { params: queryParams });
      setCandidates(res.data);
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setLoading(false);
    }
  };

  // -- Apply Search --
  const applySearch = () => {
    const params: any = {};
    if (keywords) params.keywords = keywords;
    if (sort) params.sort = sort;

    // Join arrays with commas for URL
    if (selectedLocations.length) params.location = selectedLocations.join(',');
    if (selectedCompanies.length) params.company = selectedCompanies.join(',');
    if (selectedPortals.length) params.portal = selectedPortals.join(',');
    if (selectedNotices.length) params.notice = selectedNotices.join(',');
    if (selectedExp.length) params.experience = selectedExp.join(',');
    if (selectedSkills.length) params.skills = selectedSkills.join(',');

    router.push({ pathname: "/candidates", query: params });
    fetchResults(params);
  };

  const clearFilters = () => {
    setKeywords("");
    setSelectedLocations([]);
    setSelectedCompanies([]);
    setSelectedPortals([]);
    setSelectedNotices([]);
    setSelectedExp([]);
    router.push({ pathname: "/candidates", query: {} });
    fetchResults({});
  };


  const handleViewProfile = (candidateId: string) => {
    // Navigate immediately, then fire-and-forget the logging call so navigation isn't blocked
    try {
        fetch('/api/analytics/view-profile', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ candidateId }),
        }).catch((err) => console.error('Failed to log profile view', err));
        router.push(`/candidates/${candidateId}`);
    } catch (error) {
      console.error('Failed to start profile view logging', error);
    }
  };

  return (
    <>
    <div className="h-12 px-20 backdrop-blur-sm border-b border-gray-200 flex items-center gap-4 fixed top-0 left-0 right-0 z-10">
      <Link href="/" className="flex items-center gap-2">
        <Logo className="text-black" />
        <span className="font-bold text-black uppercase">ResDex</span>
      </Link>
    </div>
    <div className="min-h-screen p-6 flex gap-6 relative max-w-5xl mx-auto pt-18">
      
      {/* --- Sticky Sidebar Card --- */}
      <aside className="w-60 flex-shrink-0 hidden lg:block h-[calc(100vh-10rem)] sticky top-18">
  <Card className="h-full shadow-lg border border-gray-200 bg-white">
    
    {/* Minimal Header with just the Reset action */}
    <div className="flex justify-end px-4 pt-3">
      <Button 
        size="sm" 
        variant="light" 
        className="text-xs text-gray-400 hover:text-red-500 h-6 px-2 min-w-0" 
        onPress={clearFilters}
      >
        Clear filters
      </Button>
    </div>

    <ScrollShadow className="h-full mt-1">
      <CardBody className="p-0 px-2">
        <Accordion 
          selectionMode="multiple" 
          defaultExpandedKeys={["exp", "loc", "skills"]}
          itemClasses={{
            base: "py-0 w-full",
            title: "font-medium text-sm text-gray-600",
            trigger: "py-3",
            content: "pb-3",
            indicator: "text-gray-400"
          }}
        >
          
          {/* Experience */}
          <AccordionItem key="exp" aria-label="Experience" title="Experience">
            <CheckboxGroup 
              value={selectedExp} 
              onValueChange={setSelectedExp} 
              classNames={{ wrapper: "gap-1" }}
            >
              {filterData.experienceOptions?.map((opt: any) => (
                <Checkbox 
                  key={opt.key} 
                  value={opt.key} 
                  size="sm" 
                  color="primary" // Changed to primary for a sleeker look, change back to danger if needed
                  classNames={{ label: "text-small text-gray-500" }}
                >
                  {opt.label}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </AccordionItem>

          {/* Skills */}
          <AccordionItem key="skills" aria-label="Skills" title="Skills">
            <div className="pb-2">
              <Input
                size="sm"
                variant="flat"
                radius="md"
                placeholder="Find skill..."
                value={searchSkillInput}
                onChange={(e) => setSearchSkillInput(e.target.value)}
                startContent={<SearchIcon className="w-3.5 h-3.5 text-gray-400" />}
                classNames={{
                  inputWrapper: "bg-gray-100 hover:bg-gray-200/50 h-8 min-h-0",
                  input: "text-xs"
                }}
              />
            </div>
            <CheckboxGroup 
              value={selectedSkills} 
              onValueChange={setSelectedSkills} 
              className="max-h-48 overflow-y-auto pr-1 custom-scrollbar"
              classNames={{ wrapper: "gap-1" }}
            >
              {(Array.from(new Set(filterData.skills)) as string[])?.map((skill: string) => (
                <Checkbox 
                  key={skill} 
                  value={skill} 
                  size="sm" 
                  color="primary"
                  classNames={{ label: "text-small text-gray-500" }}
                >
                  {skill}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </AccordionItem>

          {/* Locations */}
          <AccordionItem key="loc" aria-label="Location" title="Location">
            <CheckboxGroup 
              value={selectedLocations} 
              onValueChange={setSelectedLocations}
              className="max-h-48 overflow-y-auto pr-1 custom-scrollbar"
              classNames={{ wrapper: "gap-1" }}
            >
              {filterData.locations?.map((loc: string) => (
                <Checkbox 
                  key={loc} 
                  value={loc} 
                  size="sm"
                  color="primary"
                  classNames={{ label: "text-small text-gray-500 truncate" }}
                >
                  {loc}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </AccordionItem>

          {/* Companies */}
          <AccordionItem key="comp" aria-label="Company" title="Company">
            <CheckboxGroup 
              value={selectedCompanies} 
              onValueChange={setSelectedCompanies}
              className="max-h-48 overflow-y-auto pr-1 custom-scrollbar"
              classNames={{ wrapper: "gap-1" }}
            >
              {filterData.companies?.map((comp: string) => (
                <Checkbox 
                  key={comp} 
                  value={comp} 
                  size="sm"
                  color="primary"
                  classNames={{ label: "text-small text-gray-500 truncate" }}
                >
                  {comp}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </AccordionItem>

          {/* Portals */}
          <AccordionItem key="portal" aria-label="Source" title="Source">
            <CheckboxGroup 
              value={selectedPortals} 
              onValueChange={setSelectedPortals} 
              classNames={{ wrapper: "gap-1" }}
            >
              {filterData.portals?.map((p: string) => (
                <Checkbox 
                  key={p} 
                  value={p} 
                  size="sm"
                  color="primary"
                  classNames={{ label: "text-small text-gray-500" }}
                >
                  {p}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </AccordionItem>

           {/* Notice Period */}
           <AccordionItem key="notice" aria-label="Notice" title="Notice Period">
            <CheckboxGroup 
              value={selectedNotices} 
              onValueChange={setSelectedNotices} 
              classNames={{ wrapper: "gap-1" }}
            >
              {filterData.noticePeriods?.map((n: string) => (
                <Checkbox 
                  key={n} 
                  value={n} 
                  size="sm"
                  color="primary"
                  classNames={{ label: "text-small text-gray-500" }}
                >
                  {n}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </AccordionItem>

        </Accordion>
      </CardBody>
    </ScrollShadow>
    
    <CardFooter className="px-4 py-4 bg-white/50 border-t border-gray-100">
      <Button 
        color="primary" 
        fullWidth 
        onPress={applySearch} 
        size="md"
        radius="lg"
        className="font-medium shadow-sm"
      >
        Apply Filters
      </Button>
    </CardFooter>
  </Card>
</aside>

      {/* --- Main Content --- */}
      <main className="flex-1 flex flex-col gap-6 min-w-0">
        {/* Results Info */}
        <div className="flex justify-between items-end px-2">
          <h1 className="font-semibold text-gray-800">
            Showing {candidates.length} out of 168 candidates
          </h1>
          <Select 
            selectedKeys={[sort]} 
            onChange={(e) => setSort(e.target.value)} 
            className="w-40"
            classNames={{
              trigger: "bg-white"
            }} 
            size="sm"
            disallowEmptySelection
            >
            <SelectItem key="recent">Newest First</SelectItem>
            <SelectItem key="oldest">Oldest First</SelectItem>
          </Select>
        </div>

        {/* Full Width List */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400">
            <Spinner size="lg" />
            <p className="mt-4">Loading candidates...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {candidates.map((c: any) => (
              <Card key={c.id} className="w-full hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                <CardBody className="p-5">
                  <div className="flex flex-col gap-6">
                    
                    {/* Left: Avatar & Basic Info */}
                    <div className="flex justify-between items-center md:items-start gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 text-nowrap">{c.full_name}</h3>
                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">{c.current_designation} @ {c.current_company}</p>
                      </div>
                      <Button onPress={() => handleViewProfile(c.id)} className="mt-2 text-xs border rounded-lg px-2 py-1 bg-gray-50 hover:bg-gray-100 border-gray-200">
                          View Profile
                      </Button>
                    </div>

                    {/* Middle: Professional Details */}
                    <div className="flex-1 border-gray-100 space-y-2">
                      
                      {/* Row 1 */}
                        <div className="flex items-center gap-2 text-gray-500 font-medium">
                          <BriefcaseIcon className="w-4 h-4 text-gray-400" />
                          {c.total_experience || "Not Specified"} Yrs <span className="border-r border-r-gray-400 p-1 h-5"></span> <MapPinIcon className="w-4 h-4 text-gray-400" /> {c.location || "N/A"}
                        </div>


                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <AcademicCapIcon className="w-4 h-4 text-gray-400" />
                          <span title={c.qualification}>
                            <span className="text-black font-semibold">{c.qualification || "N/A"}</span> from <span className="font-semibold text-black">{c.college_name?.split(",")[0] || "N/A"}</span>
                          </span>
                        </div>

                      {/* Row 3: Skills (Full Width) */}
                      <div className="text-sm text-gray-500 mt-1">
                        <div className="flex flex-wrap gap-1">
                          {(() => {
                            const top = (c.top_skills || "")
                              .split(",")
                              .map((s : any) => s.trim())
                              .filter(Boolean);

                            const all = (c.skills_raw || "")
                              .split(",")
                              .map((s : any) => s.trim())
                              .filter(Boolean);

                            const unique = Array.from(new Set([...top, ...all]));

                            return unique.length
                              ? unique.map((skill, i) => (
                                  <span key={i} className="flex items-center">
                                    {
                                      top.includes(skill) &&
                                      <StarFilledIcon className="inline w-4 h-4 text-gray-400 mr-0.5" />
                                    }
                                    {skill}
                                    {i !== unique.length - 1 ? " • " : ""}
                                  </span>
                                ))
                              : "N/A";
                          })()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm flex items-center">
                        <CalendarIcon className="inline w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-gray-600">
                          {(() => {
                            const created = new Date(c.portal_date);
                            const now = new Date();
                            const diffMs = now.getTime() - created.getTime();
                            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                            if (diffDays < 7) {
                              return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
                            }
                            const diffWeeks = Math.floor(diffDays / 7);
                            if (diffWeeks <= 2) {
                              return `${diffWeeks} week${diffWeeks === 1 ? "" : "s"} ago`;
                            }
                            return "2+ weeks ago";
                          })()}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
    </>
  );
}