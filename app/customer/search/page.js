'use client';
import React from "react";
import { Card } from "@/components/ui/card";
import VendorListSection from "./VendorListSection";
import SearchFields from "./SearchFields";

export default function SearchPanel() {


  return (
    <Card className="bg-[#a67c0f] flex-row  justify-center w-full border-none rounded-none">
      <div className="bg-[#a67c0f] w-full max-w-[1440px] relative">
        <div className="relative min-h-screen">

          {/* Main content sections */}
          <div className="relative z-10 flex flex-col w-full gap-4">
            <SearchFields />
            <VendorListSection />
          </div>
        </div>
      </div>
    </Card>
  );
}
