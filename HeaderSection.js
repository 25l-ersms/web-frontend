import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const HeaderSection = () => {
  // Navigation items data
  const navItems = [
    { name: "Profile", active: true },
    { name: "Search", active: false },
    { name: "Visits History", active: false },
    { name: "Chat", active: false },
  ];

  return (
    <header className="w-full bg-[#fafaf8] rounded-[10px] flex flex-col items-start gap-2.5">
      <div className="flex items-center justify-between w-full">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-[15px] bg-[url(/logo-navy-1.png)] bg-[100%_100%]" />
          <div className="[font-family:'Syne-ExtraBold',Helvetica] font-extrabold text-[#0a111a] text-xl tracking-[-0.20px] leading-[30px]">
            HANDS4HIRE
          </div>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex items-center gap-10">
            {navItems.map((item) => (
              <NavigationMenuItem className="focus:shadow-md" key={item.name}>

                  <NavigationMenuLink href='/'>
                    <span
                      className={`[font-family:'Syne-SemiBold',Helvetica] font-semibold text-[#a67c0f] text-xl tracking-[-0.20px] leading-[30px]`}
                    >
                      {item.name}
                    </span>
                  </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Log Out Button */}
        <Button
          variant="ghost"
          className="px-5 py-1 h-auto hover:bg-transparent"
        >
          <span className="[font-family:'Syne-SemiBold',Helvetica] font-semibold text-[#a67c0f] text-xl tracking-[-0.20px] leading-[30px]">
            Log out
          </span>
        </Button>
      </div>
    </header>
  );
};

export default HeaderSection;
