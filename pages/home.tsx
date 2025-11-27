import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { SearchIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

// Simple Close Icon Component for the Tags
const CloseIcon = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
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

export default function HomePage() {
  const router = useRouter();
  
  // --- State for Multi-Select Keywords ---
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  
  // --- Suggestions State ---
  const [allSuggestions, setAllSuggestions] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 1. Fetch Data
  useEffect(() => {
    async function fetchFilters() {
      try {
        const response = await fetch("/api/candidates/filters");
        const data = await response.json();
        if (data && data.skills && data.companies) {
          const combined = Array.from(new Set([...data.skills, ...data.companies]));
          setAllSuggestions(combined);
        }
      } catch (error) {
        console.error("Failed to fetch suggestions:", error);
      }
    }
    fetchFilters();
  }, []);

  // 2. Click Outside Handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
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

  // --- Tag/Keyword Logic ---

  const handleInputChange = (val: string) => {
    setInputValue(val);
    
    if (val.trim().length > 0) {
      const lowerVal = val.toLowerCase();
      // Filter matches, but EXCLUDE items already selected
      const matches = allSuggestions
        .filter(item => 
          item.toLowerCase().includes(lowerVal) && 
          !selectedKeywords.includes(item)
        )
        .slice(0, 10);
      
      setFilteredSuggestions(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const addKeyword = (keyword: string) => {
    if (keyword.trim() && !selectedKeywords.includes(keyword)) {
      setSelectedKeywords([...selectedKeywords, keyword]);
      setInputValue(""); // Clear input
      setShowSuggestions(false);
      inputRef.current?.focus(); // Keep focus for rapid typing
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setSelectedKeywords(selectedKeywords.filter(k => k !== keywordToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Add current input value as a tag if it exists
      if (inputValue.trim()) {
        addKeyword(inputValue.trim());
      }
    } else if (e.key === "Backspace" && inputValue === "" && selectedKeywords.length > 0) {
      // Remove last tag if input is empty (User experience like generic tag inputs)
      const newKeywords = [...selectedKeywords];
      newKeywords.pop();
      setSelectedKeywords(newKeywords);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params: any = {};
    
    // Combine selected tags + current input text (if any)
    const finalKeywords = [...selectedKeywords];
    if (inputValue.trim()) finalKeywords.push(inputValue.trim());

    if (finalKeywords.length > 0) params.keywords = finalKeywords.join(",");
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
          
          {/* --- Multi-Select Input Area --- */}
          <div className="flex flex-wrap items-center gap-2 flex-[2] relative" ref={suggestionRef}>
            <SearchIcon className="w-5 h-5 text-gray-400 shrink-0" />
            
            <div className="flex flex-wrap gap-2 flex-1 min-w-0">
              {/* Render Selected Tags */}
              {selectedKeywords.map((keyword, index) => (
                <div key={index} className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
                  <span>{keyword}</span>
                  <CloseIcon 
                    className="w-3 h-3 cursor-pointer hover:text-blue-900" 
                    onClick={() => removeKeyword(keyword)}
                  />
                </div>
              ))}

              {/* The Input Field */}
              <input 
                ref={inputRef}
                type="text" 
                placeholder={selectedKeywords.length > 0 ? "" : "Skill, Name, Company..."}
                className="bg-transparent outline-none text-gray-700 placeholder:text-gray-400 flex-1 min-w-[100px] h-8"
                value={inputValue} 
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => { if(inputValue && filteredSuggestions.length > 0) setShowSuggestions(true) }}
              />
            </div>

            {/* --- Suggestions Dropdown --- */}
            {showSuggestions && (
              <ul className="absolute top-full left-0 right-0 mt-4 bg-white border border-gray-100 rounded-xl shadow-xl max-h-[300px] overflow-y-auto z-50 py-2">
                {filteredSuggestions.map((suggestion, index) => (
                  <li 
                    key={index}
                    onClick={() => addKeyword(suggestion)}
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

          <div className="hidden sm:flex items-center gap-3 flex-1">
            <input type="text" placeholder="City (e.g. Panipat)" className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>

          <div className="w-px bg-gray-200 h-8 hidden sm:block" />

          <div className="hidden sm:block">
            <Select selectedKeys={experience ? [experience] : []} onSelectionChange={(keys) => { if (keys instanceof Set) setExperience(String(Array.from(keys)[0] ?? "")); }} placeholder="Experience">
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