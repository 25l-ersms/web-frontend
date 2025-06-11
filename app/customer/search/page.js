'use client';
import React from "react";
import { Card } from "@/components/ui/card";
import VendorListSection from "./VendorListSection";
import SearchFields from "./SearchFields";
import { useState } from "react";
export default function SearchPanel() {

  const [visits, setVisits] = useState([])

  return (
    <Card className="bg-[#a67c0f] flex-row  justify-center w-full border-none rounded-none">
      <div className="bg-[#a67c0f] w-full max-w-[1440px] relative">
        <div className="relative min-h-screen">

          {/* Main content sections */}
          <div className="relative z-10 flex flex-col w-full gap-4">
            <SearchFields visits={visits} setVisits={setVisits} />
            <VendorListSection visits={visits} />
          </div>
        </div>
      </div>
    </Card>
  );
}
