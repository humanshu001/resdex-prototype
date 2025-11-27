import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { SearchIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

const experienceOptions = [
  { key: "0-1", label: "0-1 years" },
  { key: "1-3", label: "1-3 years" },
  { key: "3-5", label: "3-5 years" },
  { key: "5-10", label: "5-10 years" },
  { key: "10+", label: "10+ years" },
];

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    // Client-side guard: redirect to login when not authenticated
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("user");
      if (!saved) router.replace("/login");
    }
  }, []);
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState(""); // New State
  const [experience, setExperience] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params: any = {};

    if (keywords.trim()) params.keywords = keywords.trim();
    if (location.trim()) params.location = location.trim(); // New Param
    if (experience) params.experience = experience;

    router.push({
      pathname: "/candidates",
      query: params,
    });
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-10 min-h-[50vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Find the Perfect Candidate</h1>
          <p className="text-gray-600 text-lg">
            Search by skills, names, location, or remarks.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="max-w-5xl w-full flex items-center gap-4 bg-white rounded-full shadow-lg px-6 py-4"
        >
          {/* Keyword Search */}
          <div className="flex items-center gap-3 flex-[2]">
            <SearchIcon className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Skill, Name, Company or Remarks"
              className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>

          <div className="w-px bg-gray-200 h-8 hidden sm:block" />

          {/* Location Search (New) */}
          <div className="hidden sm:flex items-center gap-3 flex-1">
            <input
              type="text"
              placeholder="City (e.g. Panipat)"
              className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="w-px bg-gray-200 h-8 hidden sm:block" />

          {/* Experience Select */}
          <div className="hidden sm:block">
            <Select
              selectedKeys={experience ? [experience] : []}
              onSelectionChange={(keys) => {
                if (keys instanceof Set) {
                  setExperience(String(Array.from(keys)[0] ?? ""));
                }
              }}
              classNames={{
                trigger: "border-none bg-transparent shadow-none rounded-xl min-w-[150px]",
                value: "text-gray-700",
              }}
              placeholder="Experience"
            >
              {experienceOptions.map((option) => (
                <SelectItem key={option.key}>{option.label}</SelectItem>
              ))}
            </Select>
          </div>

          <Button
            type="submit"
            className="rounded-full bg-[#2F6BFF] text-white px-8 py-6 text-md shadow hover:opacity-90 min-w-[100px]"
          >
            Search
          </Button>
        </form>

        {/* Mobile Filters Hint (Optional) */}
        <p className="text-xs text-gray-400 sm:hidden">
          Use desktop view for location & experience filters
        </p>
      </section>
    </DefaultLayout>
  );
}