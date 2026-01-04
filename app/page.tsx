'use client';
import React from 'react';
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<SectionHeader title="Welcome to the Practical App" description="This is a sample Next.js application using Inter font." align="center" />
<Button variant="link"  size="md" className="mb-8" >Click Me</Button>
<Image 
  src="/nextjs-logo.png" 
  alt="Next.js Logo" 
  width={200} 
  height={100} 
/>
<div className="flex flex-wrap gap-4 p-8 items-center">
  <Button variant="primary" >Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link Style</Button>
  <Button 
      variant="outline" 
      leftIcon={<Mail size={16} />}
      onClick={() => console.log("Clicked")}
    >
      Contact Support
    </Button>

    <Button variant="danger" isLoading RightIcon={<Mail size={16} />}>Delete Account</Button>
    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none text-primary-foreground px-4 py-2 bg-primary hover:bg-orange-400 active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-md h-10">
      Custom But
    </button>
</div>

      </main>
  );
}
