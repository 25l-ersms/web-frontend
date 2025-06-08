import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function VendorListSection() {
  // Vendor data for mapping
 const vendors = [
    {
      id: 1,
      name: "Viking Burrito",
      distance: "4",
      avatar: "/avatar.png", // Placeholder for personCircle
      rating: 5,
      services: [
        { name: "plumbing", color: "#6a92c0" },
        { name: "painting", color: "#9b6b3e" },
        { name: "electric-work", color: "#66696d" },
      ],
    },
    {
      id: 2,
      name: "Viking Burrito",
      distance: "4",
      avatar: "/avatar.png", // Placeholder for personCircle2
      rating: 5,
      services: [
        { name: "plumbing", color: "#6a92c0" },
        { name: "painting", color: "#9b6b3e" },
        { name: "electric-work", color: "#66696d" },
      ],
    },
    {
      id: 3,
      name: "Viking Burrito",
      distance: "4",
      avatar: "/avatar.png", // Placeholder for personCircle3
      rating: 3,
      services: [
        { name: "plumbing", color: "#6a92c0" },
        { name: "painting", color: "#9b6b3e" },
        { name: "electric-work", color: "#66696d" },
      ],
    },
    {
      id: 4,
      name: "Viking Burrito",
      distance: "4",
      avatar: "/avatar.png", // Placeholder for personCircle3
      rating: 3,
      services: [
        { name: "plumbing", color: "#6a92c0" },
        { name: "painting", color: "#9b6b3e" },
        { name: "electric-work", color: "#66696d" },
      ],
    },
  ];


  // state & derived filtered list


  return (
    <section className="flex h-120 flex-col w-full gap-[var(--size-space-1200)]  bg-[#fafaf8b2] rounded-[15px]">

      {/* Scrollable list */}
      <ul
        className="flex flex-col w-full gap-[40px] max-h-[600px] overflow-y-auto p-10"
        role="list"
      >
        {vendors.map(vendor => (
          <li key={vendor.id} className="list-none rounded-2xl">
            <Card className="flex flex-wrap min-w-60 border border-solid border-color-border-default-default bg-[#fafaf8] rounded">
              <CardContent className="flex items-start gap-[var(--size-space-600)] p-[var(--size-space-600)] w-full">
                <Avatar className="w-[122px] h-[122px] mx-4">
                  <AvatarImage src={vendor.avatar} alt={`${vendor.name} profile`} />
                  <AvatarFallback className="bg-gray-300">
                    {vendor.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col min-w-40 items-start gap-[var(--size-space-400)] flex-1">
                  <div className="flex justify-between w-full items-start">
                    <div className="flex flex-col gap-[var(--size-space-200)]">
                      <h3 className="[font-family:'Syne-SemiBold',Helvetica] font-semibold text-[#101112] text-4xl tracking-[-0.72px] leading-[43.2px]">
                        {vendor.name}
                      </h3>
                      <p className="[font-family:'Syne-Regular',Helvetica] font-normal text-[#3f3f3d] text-xl">
                        {vendor.distance}km away
                      </p>
                    </div>

                    <div className="flex items-center px-4">
                      {[...Array(vendor.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <div className="flex w-full items-start">
                    <div className="flex flex-wrap gap-4">
                      {vendor.services.map((service, idx) => (
                        <Badge
                          key={idx}
                          className="px-4 py-2.5 rounded-lg"
                          style={{ backgroundColor: service.color }}
                        >
                          <span className="[font-family:'Syne-Regular',Helvetica] font-normal text-white text-sm">
                            {service.name}
                          </span>
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center ml-auto mr-4">
                      <Button className="flex items-center">
                        <span className="[font-family:'Syne-Regular',Helvetica] font-normal text-[#fafaf8] text-base">
                          Visit Vendor Profile
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}

        {vendors.length === 0 && (
          <li className="py-10 text-center text-gray-500">
            No vendors found.
          </li>
        )}
      </ul>
    </section>
  );
}
