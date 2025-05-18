"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function RegistrationForm()  {
  // Define form data
  const formFields = [
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "phoneNumber", label: "Phone Number" },
  ];

  const roles = [
    { id: "customer", label: "Customer", defaultChecked: true },
    { id: "vendor", label: "Vendor", defaultChecked: false },
  ];

  const [selectedRole, setSelectedRole] = useState("customer");


  return (
    <main className="bg-[rgb(166,124,15)] flex w-full min-h-screen">

          {/* Left side - Form */}
          <Card className="flex w-3/5 h-screen rounded-[0px_30px_30px_0px] [background:radial-gradient(50%_50%_at_62%_52%,rgba(0,0,0,0)_70%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(230,226,222,1)_0%,rgba(230,226,222,1)_100%)]">
            <div className="px-[10%] py-[5%] flex flex-col">
              <h1 className="[font-family:'Syne-Bold',Helvetica] font-bold text-[#795a08] text-[44px] tracking-[-0.20px] leading-[66px]">
                Create Account
              </h1>

              <p className="mt-[5%] [font-family:'Syne-Bold',Helvetica] font-bold text-[#a67c0f] text-[32px] tracking-[-0.20px] leading-[48px] mb-[5%]">
                We need a few more details to proceed...
              </p>

              <form className="flex flex-col gap-5">
                {/* Input fields */}
                {formFields.map((field) => (
                  <div key={field.id} className="relative">
                    <Label
                      htmlFor={field.id}
                      className=" -top-3 left-7 px-2 [font-family:'Syne-SemiBold',Helvetica] font-semibold text-[#442d17] text-xl tracking-[-0.20px]"
                    >
                      {field.label}
                    </Label>
                    <Input
                      id={field.id}
                      type={field.id == 'phoneNumber' ? 'number' : 'text'}
                    //   inputmode={field.id == 'phoneNumber' ? 'numeric' : 'text'}

                      className="h-[30px] w-2/3 bg-[#e3e3d6] rounded-lg border border-solid border-[#442d17] px-5 py-2"
                    />

                  </div>
                ))}

                {/* Role selection */}
                <div>
                  <p className="[font-family:'Syne-SemiBold',Helvetica] font-semibold text-[#442d17] text-xl tracking-[-0.20px] leading-6 mb-5">
                    Select a role:
                  </p>

                  <RadioGroup defaultValue="customer" className="flex gap-10" onValueChange={(value) => setSelectedRole(value)}>
                    {roles.map((role) => (
                      <div
                        key={role.id}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={role.id}
                          id={role.id}
                          className="w-5 h-5 border-2 border-[#a67c0f] text-[#a67c0f]"
                          defaultChecked={role.defaultChecked}
                        />
                        <Label
                          htmlFor={role.id}
                          className="[font-family:'Syne-SemiBold',Helvetica] font-semibold text-[#442d17] text-xl tracking-[-0.20px]"
                        >
                          {role.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-100 h-12 mt-1 bg-[#d4a017] rounded-lg [font-family:'Syne-Bold',Helvetica] font-bold text-[#e3e3d6] text-[32px] tracking-[-0.20px] hover:bg-[#c19215] transition-colors"
                >
                  {selectedRole === 'customer'? "Continue" : 'Submit Form'}
                </Button>
              </form>
            </div>
          </Card>

          {/* Right side - Logo and branding */}
          {/* Right panel with branding and graphics */}
                  <div className=" relative h-screen w-2/5">

                    <div className="w-full  h-[137px] mt-10">
                         {/* Logo */}
                      <Image
                        className="absolute w-[219px] h-[137px] top-5 right-5"
                        alt="HANDS4HIRE Logo"
                        src="/logo_h4h.png"
                        width={219}
                        height={137}
                      />
                    </div>

                    {/* Brand name */}
                    <h2 className="flex justify-center items-center w-full h-[58px] [font-family:'Syne-ExtraBold',Helvetica] font-extrabold text-[#e3e3d6] text-6xl text-center tracking-[-0.20px] leading-[54px]">
                      HANDS4HIRE
                    </h2>

                  </div>
    </main>
  );
}