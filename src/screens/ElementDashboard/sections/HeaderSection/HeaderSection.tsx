import { SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  const navItems = [
    { name: "Home", active: true },
    { name: "About", active: false },
    { name: "Portfolio", active: false },
    { name: "Projects", active: false },
    { name: "Reports", active: false },
    { name: "Statements", active: false },
  ];

  return (
    <header className="w-full h-[95px] bg-[#f9fbfc]">
      <div className="h-[94px] bg-white">
        <div className="flex items-center justify-between h-full px-7">
          <div className="flex items-center gap-[105px]">
            <div className="relative w-[66px] h-[69px] bg-[url(https://c.animaapp.com/m87tsqrx7wsq2A/img/polygon-2.svg)] bg-[100%_100%]">
              <div className="absolute w-7 h-7 top-[21px] left-5 rounded-[14px] border-[5px] border-solid border-white" />
              <div className="absolute w-1.5 h-2.5 top-5 left-[41px] bg-white rounded-[100px] rotate-45" />
            </div>

            <NavigationMenu>
              <NavigationMenuList className="flex gap-10">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      className={`px-5 py-3 rounded-[10px] ${
                        item.active
                          ? "bg-[#12aff033] text-[#12aff0]"
                          : "text-[#809fb8]"
                      }`}
                    >
                      <span className="font-normal text-[15px]">
                        {item.name}
                      </span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-10">
            <div className="relative w-px h-[37px] bg-[#f9fbfc]" />
            <div className="relative w-[360px]">
              <div className="relative">
                <Input
                  className="h-[54px] pl-14 bg-[url(https://c.animaapp.com/m87tsqrx7wsq2A/img/input.svg)] bg-[100%_100%]"
                  placeholder="search"
                />
                <div className="absolute w-[21px] h-[21px] top-4 left-6">
                  <SearchIcon className="w-5 h-5 text-[#809fb8]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-[#f1f4f9]" />
    </header>
  );
};
