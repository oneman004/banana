"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import TemplateSelectingModal from "./template-selecting-modal";
import { createPlayground } from "../actions";

const AddNewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<{
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  } | null>(null);
  const router = useRouter();

  const handleSubmit = async (data: {
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  }) => {
    setSelectedTemplate(data);

    const res = await createPlayground(data);
    toast.success("Playground Created successfully");
    setIsModalOpen(false);
    router.push(`/playground/${res?.id}`);
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="
          group px-6 py-6 flex flex-row justify-between items-center cursor-pointer
          font-[Tahoma,Verdana,sans-serif]
          bg-[#ece9d8] dark:bg-[#2b2b2b]
          border-2 border-t-[#f5f4ec] border-l-[#f5f4ec] border-r-[#716f64] border-b-[#716f64]
          dark:border-t-[#3a3a3a] dark:border-l-[#3a3a3a] dark:border-r-[#000000] dark:border-b-[#000000]
          shadow-[2px_2px_8px_rgba(0,0,0,0.3)]
          rounded-[4px]
          transition-all duration-200 ease-in-out
          hover:shadow-[3px_3px_10px_rgba(0,0,0,0.4)]
        "
      >
        <div className="flex flex-row justify-center items-start gap-4">
          <Button
            variant={"outline"}
            className="
              flex justify-center items-center
              bg-gradient-to-b from-[#f7fbff] via-[#dceeff] to-[#a9d4ff]
              dark:from-[#5c5c5c] dark:via-[#404040] dark:to-[#2a2a2a]
              group-hover:from-[#fffbdc] group-hover:via-[#ffe89a] group-hover:to-[#ffc94d]
              dark:group-hover:from-[#6e6e6e] dark:group-hover:via-[#525252] dark:group-hover:to-[#383838]
              border border-[#0058e6] dark:border-[#787878]
              text-[#003399] dark:text-[#d8d8d8]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
              active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)]
              rounded-[3px]
              transition-colors duration-200
            "
            size={"icon"}
          >
            <Plus
              size={26}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          </Button>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-[#003399] dark:text-[#a9d4ff]">
              Add New
            </h1>
            <p className="text-sm text-[#333333] dark:text-[#c8c8c8] max-w-[220px]">
              Create a new playground
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src={"/add-new.svg"}
            alt="Create new playground"
            width={130}
            height={130}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <TemplateSelectingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddNewButton;
