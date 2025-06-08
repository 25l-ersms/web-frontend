import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UserCircle } from "lucide-react";
import React from "react";

export default function ProfileSection() {
  // User data
  const userData = {
    username: "friedtoaster2000",
    firstName: "friedtoaster2000",
    lastName: "",
    phoneNumber: "+XX XXX XXX XXX",
  };

  return (
    <div className="flex max-h-screen flex-col gap-12 py-4 px-9 bg-[#fafaf8b2] rounded-[15px] w-full max-w-[505px]">
      {/* Profile Card */}
      <Card className="bg-[#fafaf8] rounded-[15px] border-none">
        <CardContent className="flex flex-col items-center gap-8 pt-2  px-4">
          <UserCircle className="w-14 h-14 text-gray-500" />

          <div className="text-center">
            <p className="font-bold text-[22px] text-[#45474a] font-['Syne-Bold',Helvetica] leading-6 ">
              Welcome&nbsp;&nbsp;back <br />
              <span className="text-[20px] ">
                {userData.username}!
              </span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Form Card */}
      <Card className="bg-[#fafaf8] rounded-[15px] border-none ">
        <CardContent className="flex flex-col items-center gap-[30px] px-4">
          {/* First Name Field */}
          <div className="relative w-full">
            <div className="absolute -top-3 left-7 px-2 bg-[#fafaf8]">
              <span className="font-['Syne-SemiBold',Helvetica] font-semibold text-xl text-[#45474a] tracking-[-0.20px] leading-6">
                First Name
              </span>
            </div>
            <Input
              className="h-[46px] rounded-lg border-[#45474a] bg-[#fafaf8] font-['Syne-Regular',Helvetica] text-xl text-[#66696d] tracking-[-0.20px] leading-6 px-3"
              defaultValue={userData.firstName}
            />
          </div>

          {/* Last Name Field */}
          <div className="relative w-full">
            <div className="absolute -top-3 left-7 px-2 bg-[#fafaf8]">
              <span className="font-['Syne-SemiBold',Helvetica] font-semibold text-xl text-[#45474a] tracking-[-0.20px] leading-6">
                Last Name
              </span>
            </div>
            <Input
              className="h-[46px] rounded-lg border-[#45474a] bg-[#fafaf8] font-['Syne-Regular',Helvetica] text-xl text-[#66696d] tracking-[-0.20px] leading-6 px-3"
              defaultValue={userData.lastName}
            />
          </div>

          {/* Phone Number Field */}
          <div className="relative w-full">
            <div className="absolute -top-3 left-7 px-2 bg-[#fafaf8]">
              <span className="font-['Syne-SemiBold',Helvetica] font-semibold text-xl text-[#45474a] tracking-[-0.20px] leading-6">
                Phone Number
              </span>
            </div>
            <Input
              className="h-[46px] rounded-lg border-[#45474a] bg-[#fafaf8] font-['Syne-Regular',Helvetica] text-xl text-[#66696d] tracking-[-0.20px] leading-6 px-3"
              defaultValue={userData.phoneNumber}
            />
          </div>

          {/* Update Button */}
          <Button className="w-[278px] h-[46px] bg-[#d4a017] hover:bg-[#c19015] rounded-lg font-['Syne-Bold',Helvetica] font-bold text-xl text-[#e3e3d6] tracking-[-0.20px]">
            Update data
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
