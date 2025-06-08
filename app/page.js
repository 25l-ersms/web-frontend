import React from "react";
import Image from "next/image";
import { GoogleLogin } from '@react-oauth/google';
import ChatWindow from "@/components/ui/ChatWindow";


export default function Home() {

  const pageContent = {
    welcomeText: "Welcome!",
    subheading: "We connect you with your local Professionals in Home Repair",
    callToAction: "Create Account or Login",
    brandName: "HANDS4HIRE",
  };

  return (
    <main className="bg-[rgb(166,124,15)] flex w-full min-h-screen">

        {/* Left panel with login */}
        <div className="flex w-3/5 h-screen rounded-[0px_30px_30px_0px] [background:radial-gradient(50%_50%_at_62%_52%,rgba(0,0,0,0)_70%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(230,226,222,1)_0%,rgba(230,226,222,1)_100%)]">
          {/* Welcome text section */}
          <div className="flex w-full flex-col ml-[129px]">
            <h1 className="w-[499px] mt-[111px] [font-family:'Syne-Bold',Helvetica] font-bold text-[#795a08] text-[44px] tracking-[-0.20px] leading-[66px]">
              {pageContent.welcomeText}
            </h1>

            <div className=" w-2/3 mt-[48px] [font-family:'Syne-Bold',Helvetica] font-bold text-[#a67c0f] text-4xl tracking-[-0.20px] leading-[54px]">
              <span className="tracking-[-0.07px]">
                <br />
              </span>
              <span className="text-[32px] tracking-[-0.06px] leading-[48px]">
                {pageContent.subheading}
              </span>
            </div>

            <h2 className="w-full mb-10 mt-20 [font-family:'Syne-Bold',Helvetica] font-bold text-[#d4a017] text-[40px] tracking-[-0.20px] leading-6">
              {pageContent.callToAction}
            </h2>
              <GoogleLogin width={1000}/>
          </div>
        </div>

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
            {pageContent.brandName}
          </h2>

          {/* Tools graphic */}
          <div className="absolute bottom-0 right-0 w-full h-3/5">
          <Image
            alt="Hand tools graphic"
            src="/hand_tools.png"
            fill
          />
          </div>
        </div>
        <ChatWindow />
    </main>
  );
}
