'use client'
import React, { useEffect, useState } from "react";

import ProfileSection from "./ProfileSection";
import UpcomingVisitsSection from "./UpcomingVisitsSection";

export default function Homepage() {

  // const upcomingVisits = await fetch("http://localhost:3000/api/customer/upcoming-visits")
  //                                     .then((res) => res.json())

  const [profile, setProfile] = useState(null)
  const [visitsUpcoming, setVisitsUpcoming] = useState(null)
  const [visitsPast, setVisitsPast] = useState(null)

  useEffect(() => {
        fetch("http://localhost:8082/user/my_visits",  {
          method: "GET",
          credentials: "include",           // ← this is critical
          headers: {
            "Content-Type": "application/json"
          }})
          .then((res) => res.json())
          .then((res) => {
            const past = []
            const upcoming = []
            res.map((visit) => {
              if (new Date(visit.end_time) > new Date()) {
                upcoming.push(visit)
              }
              else {
                past.push(visit)
              }

            })
            setVisitsUpcoming(upcoming)
            setVisitsPast(past)
          })


      fetch("http://localhost:8082/user/me",  {
        method: "GET",
        credentials: "include",           // ← this is critical
        headers: {
          "Content-Type": "application/json"
        }})
        .then((res) => res.json())
        .then((res) => setProfile(res))

  }, [])


  return (
    <div className="bg-[#a67c0f] flex flex-row justify-center w-full min-h-screen pt-3">
      <div className="w-full justify-center max-w-[1440px]">
        <div className="flex flex-col justify-center w-full bg-[url(/blobs-background.png)] bg-cover">
          {/* Header section at the top */}


          {/* Main content with profile on left, visits on right */}
          <div className="flex flex-row justify-center gap-30 w-full">
            {/* Left column - Profile section */}
            <div className="w-[35%] ml-[1%]">
              <ProfileSection profileData={profile} />
            </div>

            {/* Right column - Upcoming and Past visits */}
            <div className="ml-[6%] gap-3 flex flex-col">
              <div className="w-full">
                <UpcomingVisitsSection visitsData={visitsUpcoming} title="Upocoming visits" />
              </div>
              <div className="w-full">
                <UpcomingVisitsSection visitsData={visitsPast} title="Pasts visits" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
