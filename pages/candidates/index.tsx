import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// UI Components
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Select, SelectItem } from "@heroui/select";
import { Chip } from "@heroui/chip"; 
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";

import { SearchIcon, MapPinIcon, BriefcaseIcon, AcademicCapIcon, CalendarIcon, StarFilledIcon, Logo } from "@/components/icons"; 
import Link from "next/link";
import Logout from "@/components/logout";

// Simple X Icon
const XMarkIcon = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
  <svg 
    className={className} 
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const STORAGE_KEY = "resdex_filter_state"; // CONSTANT FOR LOCALSTORAGE KEY

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
    skills: []
  });

  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  // --- Saved Filters State ---
  const SAVED_FILTERS_KEY = "resdex_saved_filters";

  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [savedListModalOpen, setSavedListModalOpen] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [savedFilters, setSavedFilters] = useState<any[]>([]);


  // -- Filter Selection State --
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedPortals, setSelectedPortals] = useState<string[]>([]);
  const [selectedNotices, setSelectedNotices] = useState<string[]>([]);
  const [selectedExp, setSelectedExp] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  // -- Search Inputs for Sidebar --
  const [searchSkillInput, setSearchSkillInput] = useState("");
  const [searchLocationInput, setSearchLocationInput] = useState("");
  
  // -- Global Search State --
  const [keywords, setKeywords] = useState("");
  const [sort, setSort] = useState("recent");

  // 1. Load Filter Options
  useEffect(() => {
    axios.get("/api/candidates/filters").then((res) => {
      setFilterData(res.data);
    }).catch(console.error);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(SAVED_FILTERS_KEY);
    if (stored) {
      try {
        setSavedFilters(JSON.parse(stored));
      } catch {}
    }
  }, []);


  // 2. Optimization: Memoized Filter Lists
  const filteredSkills = useMemo(() => {
    const all = filterData.skills || [];
    if (!searchSkillInput.trim()) return all;
    return all.filter((s: string) => s.toLowerCase().includes(searchSkillInput.toLowerCase()));
  }, [filterData.skills, searchSkillInput]);

  const filteredLocations = useMemo(() => {
    const all = filterData.locations || [];
    if (!searchLocationInput.trim()) return all;
    return all.filter((l: string) => l.toLowerCase().includes(searchLocationInput.toLowerCase()));
  }, [filterData.locations, searchLocationInput]);

  // 3. Centralized API Fetcher
  const fetchResults = useCallback(async (queryParams: any) => {
    setLoading(true);
    try {
      const res = await axios.get("/api/candidates/search", { params: queryParams });
      setCandidates(res.data);
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSaveFilter = () => {
    if (!filterName.trim()) return;

    const newFilter = {
      id: Date.now(),
      name: filterName.trim(),
      query: router.query
    };

    const updated = [...savedFilters, newFilter];
    setSavedFilters(updated);
    localStorage.setItem(SAVED_FILTERS_KEY, JSON.stringify(updated));

    setFilterName("");
    setSaveModalOpen(false);
  };

const applySavedFilter = (queryObj: any) => {
  // Close modal
  setSavedListModalOpen(false);

  // Push filter params to URL
  router.push(
    {
      pathname: "/candidates",
      query: queryObj
    },
    undefined,
    { shallow: false }
  );
};




  // --- Helper: Robust URL Array Parser ---
  const parseArr = (val: any): string[] => {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') {
      return decodeURIComponent(val).split(',').filter(Boolean);
    }
    return [];
  };

  // ------------------------------------------------------------------
  // NEW: RESTORE FILTERS FROM LOCAL STORAGE ON MOUNT
  // ------------------------------------------------------------------
  useEffect(() => {
    if (!router.isReady) return;

    // Check if URL has params (Current URL is Source of Truth)
    const hasQueryParams = Object.keys(router.query).length > 0;

    if (!hasQueryParams) {
      // URL is empty, check localStorage
      const savedFilters = localStorage.getItem(STORAGE_KEY);
      if (savedFilters) {
        try {
          const parsedParams = JSON.parse(savedFilters);
          // If we found saved filters, apply them immediately via router replace
          if (Object.keys(parsedParams).length > 0) {
             router.replace({ pathname: "/candidates", query: parsedParams });
          }
        } catch (e) {
          console.error("Error parsing saved filters", e);
        }
      }
    }
  }, [router.isReady]); // Run once when router becomes ready

  // ------------------------------------------------------------------
  // 4. MODIFIED: URL SYNC ENGINE & SAVE TO LOCAL STORAGE
  // ------------------------------------------------------------------
  useEffect(() => {
    if (!router.isReady) return;

    const q = router.query;

    // Update State from URL
    if (q.keywords) setKeywords(String(q.keywords)); else setKeywords("");
    if (q.sort) setSort(String(q.sort));
    
    setSelectedLocations(parseArr(q.location));
    setSelectedCompanies(parseArr(q.company));
    setSelectedPortals(parseArr(q.portal));
    setSelectedNotices(parseArr(q.notice));
    setSelectedExp(parseArr(q.experience));
    setSelectedSkills(parseArr(q.skills));

    // Execute Search
    fetchResults(q);

    // NEW: Save current valid URL params to localStorage
    // We filter out internal Next.js properties if necessary, usually query is clean
    if (Object.keys(q).length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(q));
    }

  }, [router.isReady, router.query, fetchResults]); 

  // 5. Apply Search
  const applySearch = () => {
    const params: any = {};
    if (keywords.trim()) params.keywords = keywords;
    if (sort) params.sort = sort;

    if (selectedLocations.length > 0) params.location = selectedLocations.join(',');
    if (selectedCompanies.length > 0) params.company = selectedCompanies.join(',');
    if (selectedPortals.length > 0) params.portal = selectedPortals.join(',');
    if (selectedNotices.length > 0) params.notice = selectedNotices.join(',');
    if (selectedExp.length > 0) params.experience = selectedExp.join(',');
    if (selectedSkills.length > 0) params.skills = selectedSkills.join(',');

    router.push({ pathname: "/candidates", query: params }, undefined, { shallow: false });
  };

  const removeFilter = (type: string, valueToRemove: string) => {
    const currentQuery = { ...router.query };
    
    const removeFromString = (str: string | string[] | undefined, val: string) => {
        const arr = parseArr(str);
        const newArr = arr.filter(item => item !== val);
        return newArr.length > 0 ? newArr.join(',') : undefined;
    };

    if (type === 'keywords') {
        delete currentQuery.keywords;
    } else {
        const newValue = removeFromString(currentQuery[type], valueToRemove);
        if (newValue) {
            currentQuery[type] = newValue;
        } else {
            delete currentQuery[type];
        }
    }

    // If query becomes empty after removal, we should also clear storage logic handled in useEffect, 
    // but explicit clear prevents edge case of empty object saving
    if (Object.keys(currentQuery).length === 0) {
       localStorage.removeItem(STORAGE_KEY);
    }

    router.push({ pathname: "/candidates", query: currentQuery }, undefined, { shallow: false });
  };

  // ------------------------------------------------------------------
  // MODIFIED: CLEAR ALL (Also clear storage)
  // ------------------------------------------------------------------
  const clearFilters = () => {
    localStorage.removeItem(STORAGE_KEY); // Clean storage
    setSearchSkillInput("");
    setSearchLocationInput("");
    router.push({ pathname: "/candidates", query: {} });
  };

  const handleViewProfile = (candidateId: string) => {
    try {
        fetch('/api/analytics/view-profile', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ candidateId }),
        }).catch((err) => console.error('Logging error', err));
        router.push(`/candidates/${candidateId}`);
    } catch (error) {
      console.error('Nav error', error);
    }
  };

  // --- Calculate Active Filters for Display ---
  const activeFilters = [
    ...(keywords ? [{ type: 'keywords', value: keywords, label: `Search: ${keywords}` }] : []),
    ...selectedExp.map(e => ({ type: 'experience', value: e, label: filterData.experienceOptions?.find((opt:any) => opt.key === e)?.label || e })),
    ...selectedSkills.map(s => ({ type: 'skills', value: s, label: s })),
    ...selectedLocations.map(l => ({ type: 'location', value: l, label: l })),
    ...selectedCompanies.map(c => ({ type: 'company', value: c, label: c })),
    ...selectedPortals.map(p => ({ type: 'portal', value: p, label: p })),
    ...selectedNotices.map(n => ({ type: 'notice', value: n, label: n })),
  ];

  return (
    <>
    <div className="h-12 px-20 backdrop-blur-sm border-b border-gray-200 flex justify-between items-center gap-4 fixed top-0 left-0 right-0 z-10 bg-white/80">
      <Link href="/" className="flex items-center gap-2">
        <Logo className="text-black" />
        <span className="font-bold text-black uppercase">ResDex</span>
      </Link>
      <div className="flex justify-end gap-2">
        <div className="flex gap-2">
        </div>
        <Logout />
      </div>
    </div>
    
    <div className="min-h-screen p-6 flex gap-6 relative max-w-6xl mx-auto pt-16">
      
      {/* --- Sidebar --- */}
      <aside className="w-64 flex-shrink-0 hidden lg:block h-[calc(100vh-6rem)] sticky top-20">
        <Card className="h-full shadow-lg border border-gray-200 bg-white">
          <div className="flex justify-between items-center px-4 pt-4 pb-2">
            <Button size="sm" variant="flat" onPress={() => setSavedListModalOpen(true)}>
              Saved Filters
            </Button>
            <Button 
              size="sm" 
              variant="flat" 
              color="danger"
              onPress={clearFilters}
            >
              Clear all
            </Button>
          </div>

          <ScrollShadow className="h-full">
            <CardBody className="p-0 px-2">
              <Accordion 
                selectionMode="multiple" 
                defaultExpandedKeys={["exp", "loc", "skills"]}
                itemClasses={{
                  base: "py-0 w-full",
                  title: "font-medium text-sm text-gray-700",
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
                      <Checkbox key={opt.key} value={opt.key} size="sm" classNames={{ label: "text-small text-gray-500" }}>
                        {opt.label}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                </AccordionItem>

                {/* Skills */}
                <AccordionItem key="skills" aria-label="Skills" title="Skills">
                  <div className="pb-2 px-1">
                    <Input
                      size="sm"
                      variant="faded"
                      radius="md"
                      placeholder="Search skills..."
                      value={searchSkillInput}
                      onValueChange={setSearchSkillInput}
                      startContent={<SearchIcon className="w-3.5 h-3.5 text-gray-400" />}
                      classNames={{ inputWrapper: "h-8 min-h-0 bg-gray-50", input: "text-xs" }}
                    />
                  </div>
                  <CheckboxGroup 
                    value={selectedSkills} 
                    onValueChange={setSelectedSkills} 
                    className="max-h-48 overflow-y-auto pr-1 custom-scrollbar"
                    classNames={{ wrapper: "gap-1" }}
                  >
                    {filteredSkills.slice(0, 100).map((skill: string) => ( 
                      <Checkbox key={skill} value={skill} size="sm" classNames={{ label: "text-small text-gray-500" }}>
                        {skill}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                </AccordionItem>

                {/* Locations */}
                <AccordionItem key="loc" aria-label="Location" title="Location">
                   <div className="pb-2 px-1">
                    <Input
                      size="sm"
                      variant="faded"
                      radius="md"
                      placeholder="Search location..."
                      value={searchLocationInput}
                      onValueChange={setSearchLocationInput}
                      startContent={<SearchIcon className="w-3.5 h-3.5 text-gray-400" />}
                      classNames={{ inputWrapper: "h-8 min-h-0 bg-gray-50", input: "text-xs" }}
                    />
                  </div>
                  <CheckboxGroup 
                    value={selectedLocations} 
                    onValueChange={setSelectedLocations}
                    className="max-h-48 overflow-y-auto pr-1 custom-scrollbar"
                    classNames={{ wrapper: "gap-1" }}
                  >
                    {filteredLocations.slice(0, 100).map((loc: string) => (
                      <Checkbox key={loc} value={loc} size="sm" classNames={{ label: "text-small text-gray-500 truncate" }}>
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
                      <Checkbox key={comp} value={comp} size="sm" classNames={{ label: "text-small text-gray-500 truncate" }}>
                        {comp}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                </AccordionItem>

                {/* Portals & Notices */}
                <AccordionItem key="portal" aria-label="Source" title="Source">
                  <CheckboxGroup value={selectedPortals} onValueChange={setSelectedPortals} classNames={{ wrapper: "gap-1" }}>
                    {filterData.portals?.map((p: string) => (
                      <Checkbox key={p} value={p} size="sm" classNames={{ label: "text-small text-gray-500" }}>{p}</Checkbox>
                    ))}
                  </CheckboxGroup>
                </AccordionItem>
                 <AccordionItem key="notice" aria-label="Notice" title="Notice Period">
                  <CheckboxGroup value={selectedNotices} onValueChange={setSelectedNotices} classNames={{ wrapper: "gap-1" }}>
                    {filterData.noticePeriods?.map((n: string) => (
                      <Checkbox key={n} value={n} size="sm" classNames={{ label: "text-small text-gray-500" }}>{n}</Checkbox>
                    ))}
                  </CheckboxGroup>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </ScrollShadow>
          
          <CardFooter className="px-4 py-4 bg-white/50 border-t border-gray-100">
            <Button color="primary" fullWidth onPress={applySearch} size="md" radius="lg" className="font-medium shadow-sm">
              Apply Filters
            </Button>
          </CardFooter>
        </Card>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 flex flex-col gap-6 min-w-0">
        
        {/* --- Header: Active Filters & Sorting --- */}
        <div className="flex flex-col gap-4">
            <div className="flex flex-col-reverse md:flex-row justify-between items-end md:items-center gap-4 px-2">
                
                <div className="flex flex-col gap-1 w-full">
                    {loading ? (
                         <Skeleton className="rounded-lg w-48 h-6" />
                    ) : (
                         <h1 className="font-semibold text-gray-800">
                           Found {candidates.length} candidates
                         </h1>
                    )}
                    
                    {/* --- Active Filters Chips --- */}
                    {activeFilters.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {activeFilters.map((filter, idx) => (
                                <div 
                                    key={`${filter.type}-${filter.value}-${idx}`} 
                                    className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-100 transition-colors hover:bg-blue-100"
                                >
                                    <span>{filter.label}</span>
                                    <XMarkIcon 
                                        className="w-3.5 h-3.5 cursor-pointer text-blue-400 hover:text-blue-800 transition-colors"
                                        onClick={() => removeFilter(filter.type, filter.value)}
                                    />
                                </div>
                            ))}
                            {activeFilters.length > 2 && (
                                <span 
                                    className="text-xs text-gray-400 underline cursor-pointer hover:text-red-500 mt-1.5 ml-1"
                                    onClick={clearFilters}
                                >
                                    Clear All
                                </span>
                            )}
                        </div>
                    )}
                </div>

               <div className="flex justify-end gap-2">
                 <Select 
                    selectedKeys={[sort]} 
                    onChange={(e) => {
                      setSort(e.target.value);
                      const params = { ...router.query, sort: e.target.value };
                      router.push({ pathname: "/candidates", query: params });
                    }} 
                    className="w-40 flex-shrink-0"
                    classNames={{ trigger: "bg-white" }} 
                    size="sm"
                    disallowEmptySelection
                    >
                    <SelectItem key="recent">Newest First</SelectItem>
                    <SelectItem key="oldest">Oldest First</SelectItem>
                </Select>
                <Button size="sm" color="primary" onPress={() => setSaveModalOpen(true)}>
                  Save Filter
                </Button>
               </div>
            </div>
        </div>

        {/* --- Content Area --- */}
        <div className="flex flex-col gap-4">
          {loading ? (
            // --- Skeleton Loader ---
            Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="w-full border border-transparent">
                <CardBody className="p-5">
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-2">
                        <Skeleton className="w-40 h-6 rounded-lg" />
                        <Skeleton className="w-32 h-4 rounded-lg" />
                      </div>
                      <Skeleton className="w-20 h-8 rounded-lg" />
                    </div>
                    <div className="space-y-3">
                       <Skeleton className="w-3/4 h-4 rounded-lg" />
                       <Skeleton className="w-1/2 h-4 rounded-lg" />
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))
          ) : (
            // --- Actual Cards ---
            candidates.map((c: any) => (
              <Card key={c.id} className="w-full hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                <CardBody className="p-5">
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center md:items-start gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 text-nowrap">{c.full_name}</h3>
                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">{c.current_designation} @ {c.current_company}</p>
                      </div>
                      <div className="flex items-center flex-col space-y-3">
                        <img src="/person.png" alt="" className="rounded-xl w-15 h-15" />
                        <Button size="sm" onPress={() => handleViewProfile(c.id)} className="mt-2 text-xs border rounded-lg px-2 bg-gray-50 hover:bg-gray-100 border-gray-200">
                            View Profile
                        </Button>
                      </div>
                    </div>

                    <div className="flex-1 border-gray-100 space-y-2 -mt-17">
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

                      <div className="text-sm text-gray-500 mt-1">
                        <div className="flex flex-wrap gap-1">
                          {(() => {
                            const top = (c.top_skills || "").split(",").map((s:any) => s.trim()).filter(Boolean);
                            const all = (c.skills_raw || "").split(",").map((s:any) => s.trim()).filter(Boolean);
                            const unique = Array.from(new Set([...top, ...all]));

                            return unique.length
                              ? unique.slice(0, 8).map((skill, i) => (
                                  <span key={i} className="flex items-center">
                                    {top.includes(skill) && <StarFilledIcon className="inline w-4 h-4 text-gray-400 mr-0.5" />}
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
                            if(!c.portal_date) return "N/A";
                            const diffDays = Math.floor((new Date().getTime() - new Date(c.portal_date).getTime()) / (1000 * 3600 * 24));
                            if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
                            return diffDays < 30 ? `${Math.floor(diffDays / 7)} weeks ago` : "2+ weeks ago";
                          })()}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))
          )}
        </div>

        <Modal isOpen={saveModalOpen} onClose={() => setSaveModalOpen(false)}>
          <ModalContent>
            <ModalHeader className="font-semibold">Save This Filter</ModalHeader>
            <ModalBody>
              <Input 
                label="Filter Name"
                placeholder="e.g. Senior Developers"
                value={filterName}
                onValueChange={setFilterName}
              />
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={() => setSaveModalOpen(false)}>Cancel</Button>
              <Button color="primary" onPress={handleSaveFilter}>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={savedListModalOpen} onClose={() => setSavedListModalOpen(false)}>
          <ModalContent>
            <ModalHeader className="font-semibold">Saved Filters</ModalHeader>
            <ModalBody className="flex flex-col gap-3">
              {savedFilters.length === 0 && (
                <p className="text-sm text-gray-500">No filters saved yet.</p>
              )}

              {savedFilters.map((f) => (
                <Card
                  key={f.id}
                  className="border cursor-pointer hover:bg-gray-50"
                >
                  <CardBody
                    className="py-3 cursor-pointer"
                    onClick={() => applySavedFilter(f.query)}
                  >
                    <div className="font-medium">{f.name}</div>
                    <div className="text-xs text-gray-500 truncate">
                      {Object.entries(f.query)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(", ")}
                    </div>
                  </CardBody>
                </Card>

              ))}
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={() => setSavedListModalOpen(false)}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </main>
    </div>
    </>
  );
}