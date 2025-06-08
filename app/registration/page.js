"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import InputRegistrationForm from "./InputRegistrationForm";
import ExpertizeForm from "./ExpertizeForm";
import CreditCardForm from "./CreditCardForm";
import { useState } from "react";

  export const formTypes = {
    registration: 0,
    expertize: 1,
    fee: 2
  }

export default function RegistrationForm()  {



    const [formType, setFormType] = useState(formTypes.registration);
    const [data, setData] = useState(null);

  return (
    <main className="bg-[rgb(166,124,15)] flex w-full min-h-screen">

      {/* Left side - Form */}
      <Card className="flex max-h-screen overflow-y-auto w-3/5 h-screen rounded-[0px_30px_30px_0px] [background:radial-gradient(50%_50%_at_62%_52%,rgba(0,0,0,0)_70%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(230,226,222,1)_0%,rgba(230,226,222,1)_100%)]">
        <div className="px-[10%] py-[5%] flex flex-col">
          <h1 className="[font-family:'Syne-Bold',Helvetica] font-bold text-[#795a08] text-[44px] tracking-[-0.20px] leading-[66px]">
            Create Account
          </h1>

          <p className=" [font-family:'Syne-Bold',Helvetica] font-bold text-[#a67c0f] text-[32px] tracking-[-0.20px] leading-[48px] mb-[5%]">
            We need a few more details to proceed...
          </p>
            {formType === formTypes.registration && <InputRegistrationForm data={data} setData={setData} setFormType={setFormType} />}
            {formType === formTypes.expertize && <ExpertizeForm data={data} setData={setData} setFormType={setFormType} />}
            {formType === formTypes.fee && <CreditCardForm data={data} setData={setData} setFormType={setFormType} />}
        </div>
      </Card>

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