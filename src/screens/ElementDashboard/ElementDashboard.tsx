import React from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { SidebarSection } from "./sections/SidebarSection/SidebarSection";

export const ElementDashboard = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f9fbfc]">
      <HeaderSection />
      <div className="flex flex-1">
        <SidebarSection />
        <MainContentSection />
      </div>
    </div>
  );
};
