import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { map } from "zod";

export default function VendorListSection({visits}) {
  // Vendor data for mapping`
  const [booked, setBooked] = useState(new Map());

  // Update booked map when visits change
  useEffect(() => {
    if (visits) {
      const initialBooked = new Map();
      for (const visit of visits) {
        initialBooked.set(visit.id, false);
      }
      setBooked(initialBooked);
    }
  }, [visits]);

  const bookVisit = (id) => {
    const request = { time_slot_ids: [id] };
    fetch("http://localhost:8080/visits/book_time_slot", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    // Create a new Map to trigger re-render
    setBooked(prev => {
      const newMap = new Map(prev);
      newMap.set(id, true);
      return newMap;
    });
  };
  return (
    <section className="flex h-120 flex-col w-full gap-[var(--size-space-1200)]  bg-[#fafaf8b2] rounded-[15px]">

      {/* Scrollable list */}
      <ul
        className="flex flex-col w-full gap-[40px] max-h-[600px] overflow-y-auto p-10"
        role="list"
      >
        {visits && visits.map(vendor => (
          <li key={vendor.id} className="list-none rounded-2xl">
            <Card className="flex flex-wrap min-w-60 border border-solid border-color-border-default-default bg-[#fafaf8] rounded">
              <CardContent className="flex items-start gap-[var(--size-space-600)] p-[var(--size-space-600)] w-full">
                <Avatar className="w-[122px] h-[122px] mx-4">
                  <AvatarImage src={'/avatar.png'} alt={`${vendor.name} profile`} />
                  <AvatarFallback className="bg-gray-300">
                    {/* {vendor.vendor_name.substring(0, 2)} */}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col min-w-40 items-start gap-[var(--size-space-400)] flex-1">
                  <div className="flex justify-between w-full items-start">
                    <div className="flex flex-col gap-[var(--size-space-200)]">
                      <h3 className="[font-family:'Syne-SemiBold',Helvetica] font-semibold text-[#101112] text-4xl tracking-[-0.72px] leading-[43.2px]">
                        {vendor.vendor_name}
                      </h3>

                    </div>

                    <div className="flex items-center px-4">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <div className="flex w-full items-start">
                    <div className="flex flex-wrap gap-4">

                      {vendor.service_types.map((service, idx) => (
                        <Badge
                          key={idx}
                          className="px-4 py-2.5 rounded-lg"
                          style={{ backgroundColor: "#6a92c0" }}
                        >
                          <span className="[font-family:'Syne-Regular',Helvetica] font-normal text-white text-sm">
                            {service}
                          </span>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center ml-12 [font-family:'Syne-Regular',Helvetica] font-normal">
                      <b>{vendor.start_time.replace(/^(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+).*/, "$3.$2.$1 $4:$5")}</b>
                    </div>
                    <div className="flex items-center ml-auto mr-4">
                      <Button onClick={() => { bookVisit(vendor.id); }} className="flex items-center">
                        <span className="[font-family:'Syne-Regular',Helvetica] font-normal text-[#fafaf8] text-base">
                          {booked.get(vendor.id) ? 'Booked':  'Book visit'}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}

      </ul>
    </section>
  );
}
