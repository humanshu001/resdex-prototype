import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { SearchIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

// Helper for the Map Pin Icon (for location suggestions)
const LocationIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function HomePage() {
  const router = useRouter();

  // --- Search State ---
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  // --- Suggestions Data State ---
  const [allKeywords, setAllKeywords] = useState<string[]>([]);
  const [allLocations, setAllLocations] = useState<string[]>([]);
  
  // --- Filtered Results State ---
  const [filteredKeywords, setFilteredKeywords] = useState<string[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  
  // --- Visibility State ---
  const [showKeywordSuggestions, setShowKeywordSuggestions] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  // --- Refs for Click Outside Logic ---
  const keywordRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  // 1. Fetch Data
  useEffect(() => {
    async function fetchFilters() {
      try {
        const response = await fetch("/api/candidates/filters");
        const data = await response.json();
        
        // Setup Keywords (Skills + Companies)
        if (data && (data.skills || data.companies)) {
          const combined = Array.from(new Set([...(data.skills || []), ...(data.companies || [])]));
          setAllKeywords(combined);
        }

        // Setup Locations (Assuming data.locations exists, otherwise empty)
        if (data && data.locations) {
           setAllLocations(data.locations);
        } else {
            // Fallback example if your API doesn't return locations yet
            setAllLocations(["New York", "London", "Remote", "Bangalore", "Mumbai", "San Francisco"]);
        }

      } catch (error) {
        console.error("Failed to fetch suggestions:", error);
      }
    }
    fetchFilters();
  }, []);

  // 2. Click Outside Handler (Handles both dropdowns)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      
      // Close Keyword Dropdown if clicked outside
      if (keywordRef.current && !keywordRef.current.contains(target)) {
        setShowKeywordSuggestions(false);
      }

      // Close Location Dropdown if clicked outside
      if (locationRef.current && !locationRef.current.contains(target)) {
        setShowLocationSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const experienceOptions = [
    { key: "0-1", label: "0-1 years" },
    { key: "1-3", label: "1-3 years" },
    { key: "3-5", label: "3-5 years" },
    { key: "5-10", label: "5-10 years" },
    { key: "10+", label: "10+ years" },
  ];

  // --- Keyword Logic ---
  const handleKeywordChange = (val: string) => {
    setKeyword(val);
    if (val.trim().length > 0) {
      const matches = allKeywords
        .filter(item => item.toLowerCase().includes(val.toLowerCase()))
        .slice(0, 10);
      setFilteredKeywords(matches);
      setShowKeywordSuggestions(matches.length > 0);
    } else {
      setShowKeywordSuggestions(false);
    }
  };

  const selectKeyword = (val: string) => {
    setKeyword(val);
    setShowKeywordSuggestions(false);
  };

  // --- Location Logic ---
  const handleLocationChange = (val: string) => {
    setLocation(val);
    if (val.trim().length > 0) {
      const matches = allLocations
        .filter(item => item.toLowerCase().includes(val.toLowerCase()))
        .slice(0, 5); // Limit location suggestions
      setFilteredLocations(matches);
      setShowLocationSuggestions(matches.length > 0);
    } else {
      setShowLocationSuggestions(false);
    }
  };

  const selectLocation = (val: string) => {
    setLocation(val);
    setShowLocationSuggestions(false);
  };

  // --- Search Handler ---
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params: any = {};
    
    if (keyword.trim()) params.keywords = keyword.trim();
    if (location.trim()) params.location = location.trim();
    if (experience) params.experience = experience;
    
    router.push({ pathname: "/candidates", query: params });
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-10 min-h-[50vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Find the Perfect Candidate</h1>
          <p className="text-gray-600 text-lg">Search by skills, names, company, or remarks.</p>
        </div>

        <form onSubmit={handleSearch} className="max-w-5xl w-full flex items-center gap-4 bg-white rounded-full shadow-lg px-6 py-3 relative z-20">
          
          {/* --- Keyword Input Area --- */}
          <div className="relative flex items-center gap-2 flex-[2]" ref={keywordRef}>
            <SearchIcon className="w-5 h-5 text-gray-400 shrink-0" />
            <input 
              type="text" 
              placeholder="Skill, Name, Company..."
              className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 h-10"
              value={keyword} 
              onChange={(e) => handleKeywordChange(e.target.value)}
              onFocus={() => { if(keyword && filteredKeywords.length > 0) setShowKeywordSuggestions(true) }}
            />

            {/* Keyword Suggestions Dropdown */}
            {showKeywordSuggestions && (
              <ul className="absolute top-full left-[-20px] right-0 mt-4 bg-white border border-gray-100 rounded-xl shadow-xl max-h-[300px] overflow-y-auto z-50 py-2 w-[calc(100%+20px)]">
                {filteredKeywords.map((suggestion, index) => (
                  <li 
                    key={index}
                    onClick={() => selectKeyword(suggestion)}
                    className="px-5 py-2.5 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 transition-colors flex items-center gap-2"
                  >
                    <SearchIcon className="w-3 h-3 text-gray-300" />
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="w-px bg-gray-200 h-8 hidden sm:block" />

          {/* --- Location Input Area --- */}
          <div className="hidden sm:flex relative items-center gap-2 flex-1" ref={locationRef}>
            <LocationIcon className="w-5 h-5 text-gray-400 shrink-0" />
            <input 
              type="text" 
              placeholder="City or Remote" 
              className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 h-10"
              value={location} 
              onChange={(e) => handleLocationChange(e.target.value)}
              onFocus={() => { if(location && filteredLocations.length > 0) setShowLocationSuggestions(true) }}
            />

            {/* Location Suggestions Dropdown */}
            {showLocationSuggestions && (
              <ul className="absolute top-full left-[-10px] right-0 mt-4 bg-white border border-gray-100 rounded-xl shadow-xl max-h-[300px] overflow-y-auto z-50 py-2 w-[calc(100%+10px)]">
                {filteredLocations.map((suggestion, index) => (
                  <li 
                    key={index}
                    onClick={() => selectLocation(suggestion)}
                    className="px-5 py-2.5 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 transition-colors flex items-center gap-2"
                  >
                    <LocationIcon className="w-3 h-3 text-gray-300" />
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="w-px bg-gray-200 h-8 hidden sm:block" />

          {/* --- Experience Select --- */}
          <div className="hidden sm:block min-w-[150px]">
            <Select 
              selectedKeys={experience ? [experience] : []} 
              onSelectionChange={(keys) => { if (keys instanceof Set) setExperience(String(Array.from(keys)[0] ?? "")); }} 
              placeholder="Experience"
              classNames={{
                trigger: "bg-transparent shadow-none hover:bg-transparent data-[hover=true]:bg-transparent",
                value: "text-gray-700",
              }}
            >
              {experienceOptions.map((option) => (<SelectItem key={option.key}>{option.label}</SelectItem>))}
            </Select>
          </div>

          <Button type="submit" className="rounded-full bg-[#2F6BFF] text-white px-8 py-6 text-md shadow hover:opacity-90 min-w-[100px]">Search</Button>
        </form>

        <p className="text-xs text-gray-400 sm:hidden">Use desktop view for location & experience filters</p>
      </section>
    </DefaultLayout>
  );
}