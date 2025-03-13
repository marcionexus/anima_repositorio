import { ChevronDownIcon, MoonIcon, PlusCircleIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Switch } from "../../../../components/ui/switch";

const navigationItems = [
  { name: "Dashboard", isActive: false },
  { name: "Profile", isActive: false },
  { name: "Discover", isActive: true },
  { name: "Taskbar", isActive: false },
  { name: "Friendslist", isActive: false },
];

const currencyItems = [
  {
    code: "EUR",
    icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-country.svg",
    isActive: false,
  },
  {
    code: "GBP",
    icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-country-1.svg",
    isActive: false,
  },
  {
    code: "USD",
    icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-country-3.svg",
    isActive: true,
  },
  {
    code: "YEN",
    icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-country-2.svg",
    isActive: false,
  },
];

export const SidebarSection = (): JSX.Element => {
  return (
    <div className="flex w-[362px] h-full items-start">
      <div className="flex flex-col items-start gap-5 py-5 relative flex-1 self-stretch grow bg-white">
        <div className="flex flex-col items-start gap-[17px] relative self-stretch w-full">
          <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full">
            <div className="flex flex-col items-start gap-2.5 p-5 relative self-stretch w-full">
              <div className="flex w-full items-center gap-[22px] relative">
                <Avatar className="w-[50px] h-[50px] bg-[#12aff033]">
                  <AvatarFallback className="text-[#12aff0] text-xl">
                    PJ
                    <div className="absolute w-4 h-4 bottom-0 right-0 bg-[#1ad598] rounded-lg border-2 border-solid border-white" />
                  </AvatarFallback>
                </Avatar>

                <div className="inline-flex flex-col items-start justify-center">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-[#17181a] text-xl leading-6 whitespace-nowrap">
                    Patrick Johns
                  </div>

                  <div className="relative w-fit font-normal text-[#809fb8] text-[15px] leading-[18px] whitespace-nowrap">
                    Administrator
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2.5 p-2.5 relative flex-1 self-stretch grow">
                  <ChevronDownIcon className="w-[11px] h-[22px] text-[#809fb8]" />
                </div>
              </div>
            </div>

            <Separator className="w-full" />

            <div className="flex items-center gap-5 pt-4 pb-0 px-10 relative self-stretch w-full">
              <div className="relative flex-1 mt-[-1.00px] font-normal text-[#d9e1e7] text-sm leading-5">
                OPTIONS
              </div>
            </div>

            {navigationItems.map((item, index) =>
              item.isActive ? (
                <div
                  key={index}
                  className="flex items-center gap-5 px-5 py-0 relative self-stretch w-full"
                >
                  <Card className="flex h-[60px] items-center gap-5 p-5 relative flex-1 grow bg-[#29b5f133] rounded-[10px] border-none">
                    <img
                      className="w-3.5 h-3.5"
                      alt="Indicator"
                      src="https://c.animaapp.com/m87tsqrx7wsq2A/img/ellipse-1242.svg"
                    />
                    <CardContent className="p-0">
                      <div className="w-[214px] mt-[-2.00px] font-normal text-[#809fb8] text-lg leading-[22px]">
                        {item.name}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div
                  key={index}
                  className="flex items-center gap-5 px-10 py-4 relative self-stretch w-full rounded-[10px]"
                >
                  <img
                    className="w-3.5 h-3.5"
                    alt="Indicator"
                    src="https://c.animaapp.com/m87tsqrx7wsq2A/img/ellipse-1242.svg"
                  />
                  <div className="flex-1 mt-[-1.00px] font-normal text-[#809fb8] text-lg leading-[22px]">
                    {item.name}
                  </div>
                  <img
                    className="w-3.5 h-2"
                    alt="Expand"
                    src="https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-stroke.svg"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 pt-0 pb-[388px] relative self-stretch w-full">
          <Separator className="w-full" />

          <div className="flex items-center gap-5 pt-4 pb-0 px-10 relative self-stretch w-full rounded-[10px]">
            <div className="relative flex-1 mt-[-1.00px] font-normal text-[#d9e1e7] text-sm leading-5">
              CURRENCY
            </div>
          </div>

          {currencyItems.map((currency, index) =>
            currency.isActive ? (
              <div
                key={index}
                className="flex items-center gap-5 px-5 py-0 relative self-stretch w-full rounded-[10px]"
              >
                <div className="flex h-[60px] items-center gap-5 p-5 relative flex-1 grow rounded-[10px]">
                  <img
                    className="w-9 h-9"
                    alt={`${currency.code} flag`}
                    src={currency.icon}
                  />
                  <div className="w-[214px] mt-[-2.00px] font-normal text-[#809fb8] text-lg leading-[22px]">
                    {currency.code}
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="flex items-center gap-5 px-10 py-4 relative self-stretch w-full rounded-[10px]"
              >
                <img
                  className="w-9 h-9"
                  alt={`${currency.code} flag`}
                  src={currency.icon}
                />
                <div className="flex-1 font-normal text-[#809fb8] text-lg leading-[22px]">
                  {currency.code}
                </div>
              </div>
            )
          )}

          <div className="flex items-center gap-5 px-10 py-4 relative self-stretch w-full rounded-[10px]">
            <PlusCircleIcon className="w-9 h-9 text-[#809fb8]" />
            <div className="flex-1 font-normal text-[#809fb8] text-lg leading-[22px]">
              add currency
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-center justify-end gap-3 relative flex-1 grow mr-[-1.00px]">
          <Separator className="w-full" />

          <div className="flex w-full items-center gap-[30px] px-10 py-4 relative rounded-[10px]">
            <MoonIcon className="w-[26px] h-[26px] text-[#809fb8]" />
            <div className="relative flex-1 font-normal text-[#809fb8] text-lg leading-[22px]">
              Dark mode
            </div>
            <Switch className="h-[26px]" />
          </div>
        </div>
      </div>

      <Separator orientation="vertical" className="h-full" />
    </div>
  );
};
