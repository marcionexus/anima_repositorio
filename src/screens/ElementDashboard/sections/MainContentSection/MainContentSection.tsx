import {
  CalendarIcon,
  InfoIcon,
  MoreVerticalIcon,
  PlusIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Separator } from "../../../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const MainContentSection = (): JSX.Element => {
  const cryptoCards = [
    {
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-3.svg",
      name: "Bitcoin",
      code: "BTC",
      price: "$42,004.01",
      change: "+12.7%",
    },
    {
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-1.svg",
      name: "Bitcoin",
      code: "BTC",
      price: "$42,004.01",
      change: "+12.7%",
    },
    {
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-2.svg",
      name: "Bitcoin",
      code: "BTC",
      price: "$42,004.01",
      change: "+12.7%",
    },
  ];

  const currentValueItems = [
    {
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-3.svg",
      value: "24.012,02",
    },
    {
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-5.svg",
      value: "24.012,02",
    },
    {
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-6.svg",
      value: "24.012,02",
    },
    {
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-10.svg",
      value: "24.012,02",
    },
    {
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-8.svg",
      value: "24.012,02",
    },
    {
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-2.svg",
      value: "24.012,02",
    },
  ];

  const cryptoTableData = [
    {
      id: "01",
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-3.svg",
      name: "Bitcoin",
      code: "BTC",
      currentPrice: "$21.144,05",
      change: "+17,3%",
      changeType: "positive",
      lastPrice: "$20.106,94",
    },
    {
      id: "02",
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-12.svg",
      name: "Pirl",
      code: "PRL",
      currentPrice: "$3.721,32",
      change: "+11,6%",
      changeType: "positive",
      lastPrice: "$3.206,94",
    },
    {
      id: "03",
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-13.svg",
      name: "Mona",
      code: "MON",
      currentPrice: "$5.206,94",
      change: "-14,2%",
      changeType: "negative",
      lastPrice: "$4.981,01",
    },
    {
      id: "04",
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-10.svg",
      name: "Zcash",
      code: "ZEC",
      currentPrice: "$5.206,94",
      change: "+1,6%",
      changeType: "positive",
      lastPrice: "$4.206,04",
    },
    {
      id: "05",
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-14.svg",
      name: "Binance",
      code: "BNB",
      currentPrice: "$18.204,01",
      change: "+1,9%",
      changeType: "negative",
      lastPrice: "$17.206,53",
    },
    {
      id: "07",
      icon: "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-2.svg",
      name: "Tether",
      code: "USDT",
      currentPrice: "$6.014,63",
      change: "+4,3%",
      changeType: "positive",
      lastPrice: "$6.206,91",
    },
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const yAxisValues = ["60k", "50k", "40k", "30k", "20k", "10k", "0"];

  return (
    <div className="flex flex-col gap-5 py-[30px] pr-5 pl-0 flex-1 grow">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-[32px] text-[#17181a] leading-[39px]">
          Cryptocurrency
        </h1>

        <div className="flex items-start justify-end gap-5">
          <Button
            variant="outline"
            className="h-[46px] gap-[17px] bg-white border-[#f1f5f7] rounded-[10px]"
          >
            <PlusIcon className="w-[11.5px] h-[11.5px]" />
            <span className="font-normal text-[15px] text-[#17181a]">
              Add something
            </span>
          </Button>

          <Button
            variant="outline"
            className="h-[46px] gap-5 bg-white border-[#f1f4f9] rounded-[10px]"
          >
            <img
              className="h-[21.02px] w-[20.96px]"
              alt="Icon"
              src="https://c.animaapp.com/m87tsqrx7wsq2A/img/icon.svg"
            />
            <span className="font-normal text-[15px] text-[#17181a] leading-[18px]">
              Download Report
            </span>
          </Button>
        </div>
      </div>

      <div className="flex gap-5 w-full">
        <Card className="bg-white rounded-[10px]">
          <CardContent className="p-5">
            <div className="flex gap-[30px]">
              <div className="flex flex-col gap-2.5">
                <div className="px-[30px]">
                  <div className="py-1.5">
                    <h2 className="font-normal text-xl text-[#17181a] leading-6">
                      Currency Balance
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-[30px]">
                  <div className="flex items-center gap-2.5">
                    <div className="font-bold text-[42px] text-[#17181a] leading-[42px]">
                      USD 1.250.418
                    </div>
                  </div>

                  <Badge className="bg-[#1ad59833] text-[#1ad598] rounded-[90px] font-normal">
                    <img
                      className="w-[15px] h-2.5"
                      alt="Icon stroke"
                      src="https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-stroke-2.svg"
                    />
                    +12,7%
                  </Badge>
                </div>

                <div className="flex items-center gap-5 px-[30px] py-1.5">
                  <img
                    className="w-8 h-8"
                    alt="Icon crypto"
                    src="https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto-3.svg"
                  />
                  <div className="font-normal text-xl text-[#17181a] leading-6">
                    Bitcoin / BTC
                  </div>
                </div>

                <div className="flex gap-[72px] px-[30px]">
                  <div className="relative w-[188px] h-[74px]">
                    <div className="relative h-[74px]">
                      <img
                        className="absolute w-[9px] h-[9px] left-2 top-[7px]"
                        alt="Arrow"
                        src="https://c.animaapp.com/m87tsqrx7wsq2A/img/arrow.svg"
                      />

                      <div className="flex flex-col gap-[18px]">
                        <div className="flex items-center gap-[11px]">
                          <div className="w-6 h-6 bg-[#1ad59833] rounded-xl" />
                          <div className="font-normal text-base text-[#809fb8] leading-[19px]">
                            Income
                          </div>
                        </div>

                        <div className="font-bold text-[26px] text-[#17181a] leading-8">
                          USD 25.103,63
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[18px]">
                    <div className="flex items-center gap-3">
                      <div className="relative w-6 h-6 bg-[#ea3a3d33] rounded-xl">
                        <img
                          className="absolute w-[9px] h-[9px] top-2 left-2"
                          alt="Arrow"
                          src="https://c.animaapp.com/m87tsqrx7wsq2A/img/arrow-2.svg"
                        />
                      </div>
                      <div className="font-normal text-base text-[#809fb8] leading-[19px]">
                        Expenses
                      </div>
                    </div>

                    <div className="font-bold text-[26px] text-[#17181a] leading-8">
                      USD 16.267,04
                    </div>
                  </div>
                </div>
              </div>

              <Separator
                orientation="vertical"
                className="h-[218px] bg-[#f1f4f9]"
              />

              <div className="flex items-center justify-center gap-[30px] py-5">
                <div className="relative w-[192.59px] h-[190.47px]">
                  <div className="relative w-[191px] h-[190px]">
                    <div className="absolute top-[107px] left-[76px] font-normal text-base text-[#809fb8] leading-[19px]">
                      Value
                    </div>

                    <Badge className="absolute top-[71px] left-12 bg-[#1ad59833] text-[#1ad598] rounded-[90px] font-normal">
                      <img
                        className="w-[15px] h-2.5"
                        alt="Icon stroke"
                        src="https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-stroke-2.svg"
                      />
                      +12,7%
                    </Badge>

                    <div className="absolute w-[191px] h-[190px] top-0 left-0 bg-[url(https://c.animaapp.com/m87tsqrx7wsq2A/img/chart.png)] bg-[100%_100%]" />
                  </div>
                </div>

                <div className="flex flex-col gap-[30px]">
                  {cryptoCards.map((crypto, index) => (
                    <div key={index} className="flex items-center gap-5">
                      <div className="flex items-center gap-4">
                        <img
                          className="w-8 h-8"
                          alt="Icon crypto"
                          src={crypto.icon}
                        />
                        <div className="flex flex-col">
                          <div className="font-normal text-lg text-[#17181a] leading-[22px]">
                            {crypto.name}
                          </div>
                          <div className="font-normal text-[15px] text-[#809fb8] leading-[18px]">
                            {crypto.code}
                          </div>
                        </div>
                      </div>

                      <Badge className="bg-[#1ad59833] text-[#1ad598] rounded-[90px] font-normal">
                        <img
                          className="w-[15px] h-2.5"
                          alt="Icon stroke"
                          src="https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-stroke-2.svg"
                        />
                        {crypto.change}
                      </Badge>

                      <div className="font-normal text-[17px] text-[#17181a] leading-[21px]">
                        {crypto.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <img
          className="flex-1 grow h-[270px]"
          alt="Element"
          src="https://c.animaapp.com/m87tsqrx7wsq2A/img/2.png"
        />
      </div>

      <div className="flex gap-5 w-full">
        <div className="flex w-[1126px] gap-5">
          <div className="flex flex-col gap-[30px] flex-1 grow">
            <Card className="bg-white rounded-[10px]">
              <CardContent className="p-[30px] flex flex-col gap-[18px] w-[1122px]">
                <div className="flex items-center gap-[68px] w-full">
                  <div className="flex gap-[19px] items-center">
                    <div className="flex flex-col gap-[17px]">
                      <div className="flex items-center gap-3.5">
                        <h2 className="font-bold text-[26px] text-[#17181a] leading-8">
                          Currency
                        </h2>
                        <InfoIcon className="w-[21.96px] h-[21.96px]" />
                      </div>

                      <div className="flex items-center gap-[17px]">
                        <img
                          className="w-8 h-8"
                          alt="Icon crypto"
                          src="https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-crypto.svg"
                        />
                        <div className="font-bold text-[38px] text-[#17181a] leading-[46px]">
                          $ 159.461,50
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-end gap-[33px] flex-1 self-stretch grow">
                    <div className="flex flex-col gap-2.5">
                      <ToggleGroup type="single" defaultValue="12month">
                        <ToggleGroupItem
                          value="12month"
                          className="h-[46px] px-5 py-3.5rounded-[10px_0px_0px_10px] border border-solid border-[#d9e1e7] bg-white text-[#17181a]"
                        >
                          12 month
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="30days"
                          className="h-[46px] px-5 py-3.5 border border-solid border-[#d9e1e7] bg-white text-[#809fb8]"
                        >
                          30 days
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="7days"
                          className="h-[46px] px-5 py-3.5 border border-solid border-[#d9e1e7] bg-white text-[#809fb8]"
                        >
                          7 days
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="24hours"
                          className="h-[46px] px-5 py-3.5 rounded-[0px_10px_10px_0px] border border-solid border-[#d9e1e7] bg-white text-[#809fb8]"
                        >
                          24 hours
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </div>

                    <Button
                      variant="outline"
                      className="h-[46px] gap-[17px] bg-white border-[#f1f5f7] rounded-[10px]"
                    >
                      <CalendarIcon className="w-[19.95px] h-[21.96px]" />
                      <span className="font-normal text-[15px] text-[#17181a]">
                        Select dates
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="px-2.5 mr-[-15.00px]">
                  <div className="relative w-[1057px] h-[399px]">
                    <div className="relative w-[1068px] h-[416px] top-[11px]">
                      <div className="absolute w-[1068px] h-[416px] top-0 left-0">
                        <div className="relative h-[416px]">
                          <div className="flex flex-col gap-2.5 p-2.5 absolute top-0 left-7">
                            <img
                              className="w-[1019.51px] h-[368px]"
                              alt="Grid"
                              src="https://c.animaapp.com/m87tsqrx7wsq2A/img/grid.svg"
                            />

                            <div className="flex h-[18px] items-start justify-between px-2.5 py-0 w-full">
                              {months.map((month, index) => (
                                <div
                                  key={index}
                                  className="font-normal text-[15px] text-[#99b2c6] leading-[18px]"
                                >
                                  {month}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col gap-[43px] absolute top-px left-0">
                            {yAxisValues.map((value, index) => (
                              <div
                                key={index}
                                className="font-normal text-[15px] text-[#99b2c6] leading-[18px]"
                              >
                                {value}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="absolute w-[965px] h-[266px] top-[110px] left-16">
                        <div className="relative w-[964px] h-[78px] top-[189px] left-px bg-[url(https://c.animaapp.com/m87tsqrx7wsq2A/img/bar-off.svg)] bg-[100%_100%]" />
                      </div>

                      <div className="absolute w-[972px] h-[342px] top-[25px] left-[60px]">
                        {/* Chart bars and lines would be rendered here */}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex-1 self-stretch grow">
          <Card className="h-full bg-white rounded-[10px]">
            <CardContent className="p-[30px] flex flex-col gap-[30px]">
              <h2 className="font-bold text-[22px] text-[#17181a] leading-[27px]">
                Current Value
              </h2>

              <div className="flex flex-col gap-5 w-full mb-[-23.00px]">
                {currentValueItems.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2.5 w-full">
                    <div className="flex items-start w-full h-[54px]">
                      <div className="flex items-center gap-2.5 px-2.5 py-[30px] h-[54px] bg-[#f1f5f7] rounded-[10px_0px_0px_10px] border border-solid border-[#d9e1e7]">
                        <img
                          className="w-8 h-8 mt-[-19.00px] mb-[-19.00px]"
                          alt="Icon crypto"
                          src={item.icon}
                        />
                        <div className="font-normal text-[15px] text-[#17181a] mt-[-13.00px] mb-[-11.00px]">
                          USD
                        </div>
                      </div>
                      <div className="flex items-center gap-[17px] px-5 py-3.5 flex-1 grow -ml-px bg-white rounded-[0px_10px_10px_0px] border border-solid border-[#d9e1e7] h-[54px]">
                        <div className="font-normal text-[15px] text-[#809fb8]">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-white rounded-[10px] p-5 w-full">
        <div className="flex flex-col w-full">
          <div className="flex h-16 gap-5 py-2 w-full items-center">
            <div className="flex items-center gap-2.5 flex-1 self-stretch grow">
              <h2 className="font-bold text-[26px] text-[#17181a] leading-8">
                Cryptocurrency
              </h2>

              <div className="flex items-center justify-end gap-2.5 flex-1 self-stretch grow">
                <Button
                  variant="outline"
                  className="h-[46px] gap-[17px] bg-white border-[#f1f5f7] rounded-[10px]"
                >
                  <img
                    className="h-[20.99px] w-[20.96px]"
                    alt="Icon"
                    src="https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-1.svg"
                  />
                  <span className="font-normal text-[15px] text-[#17181a]">
                    Download Report
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <Table>
            <TableHeader className="bg-[#f1f4f9] rounded-[10px] border-b border-[#f1f5f7]">
              <TableRow>
                <TableHead className="w-6 h-6 rounded-lg"></TableHead>
                <TableHead className="text-[#99b2c6] text-[15px] font-normal">
                  No.
                  <img
                    className="inline-block ml-5 w-[6.22px] h-[11.69px]"
                    alt="Element"
                    src="https://c.animaapp.com/m87tsqrx7wsq2A/img/-01-6.svg"
                  />
                </TableHead>
                <TableHead className="text-[#99b2c6] text-[15px] font-normal">
                  Currency
                  <img
                    className="inline-block ml-5 w-[6.22px] h-[11.69px]"
                    alt="Element"
                    src="https://c.animaapp.com/m87tsqrx7wsq2A/img/-01-6.svg"
                  />
                </TableHead>
                <TableHead className="text-[#99b2c6] text-[15px] font-normal">
                  Current Price
                  <img
                    className="inline-block ml-5 w-[6.22px] h-[11.69px]"
                    alt="Element"
                    src="https://c.animaapp.com/m87tsqrx7wsq2A/img/-01-6.svg"
                  />
                </TableHead>
                <TableHead className="text-[#99b2c6] text-[15px] font-normal">
                  Last 24h
                  <img
                    className="inline-block ml-5 w-[6.22px] h-[11.69px]"
                    alt="Element"
                    src="https://c.animaapp.com/m87tsqrx7wsq2A/img/-01-6.svg"
                  />
                </TableHead>
                <TableHead className="text-[#99b2c6] text-[15px] font-normal">
                  Performance
                  <img
                    className="inline-block ml-5 w-[6.22px] h-[11.69px]"
                    alt="Element"
                    src="https://c.animaapp.com/m87tsqrx7wsq2A/img/-01-6.svg"
                  />
                </TableHead>
                <TableHead className="text-[#99b2c6] text-[15px] font-normal">
                  Last Price
                  <img
                    className="inline-block ml-5 w-[6.22px] h-[11.69px]"
                    alt="Element"
                    src="https://c.animaapp.com/m87tsqrx7wsq2A/img/-01-6.svg"
                  />
                </TableHead>
                <TableHead className="text-[#99b2c6] text-[15px] font-normal">
                  Options
                  <img
                    className="inline-block ml-5 w-[6.22px] h-[11.69px]"
                    alt="Element"
                    src="https://c.animaapp.com/m87tsqrx7wsq2A/img/-01-6.svg"
                  />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cryptoTableData.map((crypto) => (
                <TableRow
                  key={crypto.id}
                  className="h-[66px] border-b border-[#f1f5f7]"
                >
                  <TableCell className="p-0 pl-4">
                    <Checkbox className="w-[26px] h-[26px]" />
                  </TableCell>
                  <TableCell className="text-[#17181a] text-lg font-normal">
                    {crypto.id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-5">
                      <img
                        className="w-8 h-8"
                        alt="Icon crypto"
                        src={crypto.icon}
                      />
                      <div className="flex flex-col">
                        <div className="font-normal text-lg text-[#17181a] leading-5">
                          {crypto.name}
                        </div>
                        <div className="font-normal text-sm text-[#809fb8] leading-4">
                          {crypto.code}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-normal text-lg text-[#17181a] leading-5">
                    {crypto.currentPrice}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`bg-${crypto.changeType === "positive" ? "[#1ad59833]" : "[#ea3a3d33]"} text-${crypto.changeType === "positive" ? "[#1ad598]" : "[#ea3a3d]"} rounded-md font-normal`}
                    >
                      <img
                        className="w-[15px] h-2.5"
                        alt="Icon stroke"
                        src={
                          crypto.changeType === "positive"
                            ? "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-stroke-2.svg"
                            : "https://c.animaapp.com/m87tsqrx7wsq2A/img/icon-stroke-10.svg"
                        }
                      />
                      {crypto.change}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <img
                      className="w-[194px]"
                      alt="Cell"
                      src={
                        crypto.changeType === "positive"
                          ? "https://c.animaapp.com/m87tsqrx7wsq2A/img/cell.svg"
                          : "https://c.animaapp.com/m87tsqrx7wsq2A/img/cell-2.svg"
                      }
                    />
                  </TableCell>
                  <TableCell className="font-normal text-lg text-[#17181a] leading-5">
                    {crypto.lastPrice}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-10">
                      <Badge className="bg-[#12aff033] text-[#12aff0] rounded-md font-normal px-3 py-1.5">
                        Trade
                      </Badge>
                      <MoreVerticalIcon className="w-[5px] h-6" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};
