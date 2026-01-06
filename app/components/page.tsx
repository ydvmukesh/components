"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { buttonCode } from "@/lib/code-snippet/button";
import { sectionCode } from "@/lib/code-snippet/section";
import { globalCon } from "@/lib/code-snippet/global";
import { Button } from "@/components/ui/button";
export default function ComponentPage(){
      const [copied, setCopied] = useState<string | null>(null);
    
      const handleCopy = async (text: string, key: string) => {
        await navigator.clipboard.writeText(text);
        setCopied(key);
        setTimeout(() => setCopied(null), 1500);
      };
    return (

          <main className="min-h-screen bg-slate-900 px-24 py-20">
      
      {/* PAGE TITLE */}
      <div className="mb-12 max-w-3xl">
        <h1 className="text-3xl font-semibold text-slate-100">
          UI Components <Button variant="secondary" disabled>test</Button>
        </h1>
        <p className="mt-2 text-slate-400 text-sm">
          Reusable, scalable components built with Tailwind CSS and React.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-10 items-stretch">

        {/* BUTTON COMPONENT */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/40 overflow-hidden h-[50px] flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 text-xs text-slate-400 border-b border-slate-800">
            <span>Button.tsx</span>

            <button
              onClick={() => handleCopy(buttonCode, "button")}
              className="flex items-center gap-1 hover:text-white"
            >
              {copied === "button" ? (
                <>
                  <Check className="h-4 w-4 text-green-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Context */}
          <div className="px-4 py-3">
            <h3 className="text-sm font-medium text-slate-200">
              Reusable Button Component
            </h3>
            <p className="text-xs text-slate-400">
              Supports variants, sizes, loading state, and icons.
            </p>
          </div>

          {/* Code */}
          <pre className="bg-slate-900/60 px-4 py-4 text-[13px] leading-relaxed overflow-auto flex-1 no-scrollbar">
            <code className="text-slate-300 whitespace-pre">
              {buttonCode}
            </code>
          </pre>
        </div>

        {/* SECTION HEADER COMPONENT */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/40 overflow-hidden h-[50px] flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 text-xs text-slate-400 border-b border-slate-800">
            <span>section-header.tsx</span>

            <button
              onClick={() => handleCopy(sectionCode, "section")}
              className="flex items-center gap-1 hover:text-white"
            >
              {copied === "section" ? (
                <>
                  <Check className="h-4 w-4 text-green-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Context */}
          <div className="px-4 py-3">
            <h3 className="text-sm font-medium text-slate-200">
              Section Header Component
            </h3>
            <p className="text-xs text-slate-400">
              Common heading component with alignment and description support.
            </p>
          </div>

          {/* Code */}
          <pre className="bg-slate-900/60 px-4 py-4 text-[13px] leading-relaxed overflow-auto flex-1 no-scrollbar">
            <code className="text-slate-300 whitespace-pre">
              {sectionCode}
            </code>
          </pre>
        </div>
           {/* SECTION HEADER COMPONENT */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/40 overflow-hidden h-[50px] flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 text-xs text-slate-400 border-b border-slate-800">
            <span>Global</span>

            <button
              onClick={() => handleCopy(sectionCode, "section")}
              className="flex items-center gap-1 hover:text-white"
            >
              {copied === "section" ? (
                <>
                  <Check className="h-4 w-4 text-green-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Context */}
          <div className="px-4 py-3">
            <h3 className="text-sm font-medium text-slate-200">
            Global
            </h3>
            <p className="text-xs text-slate-400">
              Common heading component with alignment and description support.
            </p>
          </div>

          {/* Code */}
          <pre className="bg-slate-900/60 px-4 py-4 text-[13px] leading-relaxed overflow-auto flex-1 no-scrollbar">
            <code className="text-slate-300 whitespace-pre">
              {globalCon}
            </code>
          </pre>
        </div>

      </div>
    </main>
    )
}