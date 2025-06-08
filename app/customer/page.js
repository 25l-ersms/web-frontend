import React from "react";

import ProfileSection from "./ProfileSection";
import UpcomingVisitsSection from "./UpcomingVisitsSection";

export default function Homepage() {
  return (
    <div className="bg-[#a67c0f] flex flex-row justify-center w-full min-h-screen pt-3">
      <div className="w-full justify-center max-w-[1440px]">
        <div className="flex flex-col justify-center w-full bg-[url(/blobs-background.png)] bg-cover">
          {/* Header section at the top */}


          {/* Main content with profile on left, visits on right */}
          <div className="flex flex-row justify-center gap-30 w-full">
            {/* Left column - Profile section */}
            <div className="w-[35%] ml-[1%]">
              <ProfileSection />
            </div>

            {/* Right column - Upcoming and Past visits */}
            <div className="ml-[6%] gap-3 flex flex-col">
              <div className="w-full">
                <UpcomingVisitsSection title="Upocoming visits" />
              </div>
              <div className="w-full">
                <UpcomingVisitsSection title="Pasts visits" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
