import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import React from "react";

const UpcomingVisitsSection = ({title}) => {
  // Data for upcoming visits
  const upcomingVisits = [
    {
      id: 1,
      serviceType: "Plumbing",
      date: "DD/MM/YYYY",
      status: "accepted",
      provider: "Viking Burrito",
    },
    {
      id: 2,
      serviceType: "Plumbing",
      date: "DD/MM/YYYY",
      status: "accepted",
      provider: "Viking Burrito",
    },
    {
      id: 3,
      serviceType: "Electricity",
      date: "DD/MM/YYYY",
      status: "declined",
      provider: "Viking Burrito",
    },
    {
      id: 4,
      serviceType: "Electricity",
      date: "DD/MM/YYYY",
      status: "declined",
      provider: "Viking Burrito",
    },
        {
      id: 5,
      serviceType: "Electricity",
      date: "DD/MM/YYYY",
      status: "declined",
      provider: "Viking Burrito",
    },
  ];

  return (
    <Card className="flex flex-col w-full bg-[#ffffffb2] rounded-[15px]">
      <div className="p-2.5">
        <h2 className="[font-family:'Syne-Bold',Helvetica] font-bold text-[#0a111a] text-xl ">
          {title}
        </h2>
      </div>

      <ul className="flex flex-col overflow-y-auto items-start max-h-[200px] gap-[10px] p-0 pb-2.5" role='list'>
        {upcomingVisits.map((visit) => (
              <li key={visit.id} className="list-none rounded-2xl px-5 ">

          <Card
            key={visit.id}
            className="flex flex-col items-start w-full bg-[#fafaf8] rounded-[15px] overflow-hidden"
          >
            <CardContent className="p-0 w-full">
              <div className="flex items-center w-full text-[#262729] [font-family:'Syne-Bold',Helvetica] font-bold  text-sm">
                <div className="px-5">
                  {visit.provider}
                </div>
                <div className="px-5 ">
                  <div className="">
                    {visit.serviceType}
                  </div>
                </div>

                <div className="px-5 ">
                  <div >
                    {visit.date}
                  </div>
                </div>
              </div>


            </CardContent>
          </Card>
        </li>

        ))}
      </ul>

    </Card>
  );
};

export default UpcomingVisitsSection;
