import { useState } from "react";
import { Button } from "@heroui/button";
import DefaultLayout from "@/layouts/default";
import axios from "axios";

export default function UploadCandidates() {
  const [file, setFile] = useState<any>(null);
  const [message, setMessage] = useState("");

  const upload = async () => {
    if (!file) return;

    const form = new FormData();
    form.append("file", file);

    const res = await axios.post("/api/admin/upload", form);
    setMessage(`${res.data.count} candidates uploaded successfully`);
  };

  return (
    <DefaultLayout>
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Upload Candidates CSV</h1>

        <input
          title="File Upload"
          type="file"
          accept=".csv,.xlsx"
          onChange={(e) => setFile(e.target.files?.[0])}
          className="mb-4"
        />

        <Button onPress={upload} className="bg-[#2F6BFF] text-white">
          Upload
        </Button>

        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>
    </DefaultLayout>
  );
}
