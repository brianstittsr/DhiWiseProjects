import { Img, Button, Heading, Input, Text } from "../../components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <div>
        <div className="bg-yellow-50 py-[3.13rem] md:py-[1.25rem]">
          <div className="flex items-center overflow-x-scroll md:flex-col">
            <div className="flex w-[51.88rem] flex-1 flex-col items-center gap-[2.50rem] px-[3.50rem] md:self-stretch md:px-[1.25rem]">
              <div className="ml-[1.25rem] flex w-[86%] flex-col items-center gap-[0.88rem] md:ml-0 md:w-full">
                <Heading
                  size="heading5xl"
                  as="h1"
                  className="text-[2.88rem] font-extrabold leading-[140%] tracking-[0.00rem] text-gray-900 md:text-[2.63rem] sm:text-[2.25rem]"
                >
                  <>
                    Find a perfect property
                    <br />
                    Where you&#39;ll love to live
                  </>
                </Heading>
                <Text size="textmd" as="p" className="w-full text-[1.25rem] font-normal leading-[180%] text-gray-700">
                  We helps businesses customize, automate and scale up their ad production and delivery.
                </Text>
              </div>
              <Tabs
                className="ml-[1.25rem] flex w-[86%] flex-col items-center gap-[2.38rem] rounded-[16px] bg-white-a700 p-[1.50rem] md:ml-0 md:w-full sm:p-[1.25rem]"
                selectedTabClassName="!text-white-a700 bg-gray-900 rounded-[10px]"
                selectedTabPanelClassName="!relative tab-panel--selected"
              >
                <TabList className="flex flex-wrap gap-[1.50rem]">
                  <Tab className="px-[4.13rem] py-[0.75rem] text-[1.13rem] font-bold text-gray-900 md:px-[1.25rem]">
                    Buy
                  </Tab>
                  <Tab className="px-[4.13rem] py-[0.75rem] text-[1.13rem] font-bold text-gray-900 md:px-[1.25rem]">
                    Sell
                  </Tab>
                  <Tab className="px-[4.13rem] py-[0.75rem] text-[1.13rem] font-bold text-gray-900 md:px-[1.25rem]">
                    Rent
                  </Tab>
                </TabList>
                {[...Array(3)].map((_, index) => (
                  <TabPanel key={`tab-panel${index}`} className="absolute items-center self-stretch">
                    <div className="w-full self-stretch">
                      <div className="flex flex-col gap-[1.50rem]">
                        <div className="flex flex-col gap-[1.25rem]">
                          <Input
                            shape="round"
                            name="City Input"
                            placeholder={`City/Street`}
                            suffix={
                              <Img
                                src="images/img_linkedin.svg"
                                alt="Linkedin"
                                className="mb-[0.25rem] h-[1.25rem] w-[1.25rem]"
                              />
                            }
                            className="gap-[2.13rem] rounded-[10px] border border-solid border-blue_gray-100_01 px-[1.00rem]"
                          />
                          <div className="flex items-center justify-between gap-[1.25rem] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 px-[1.00rem] py-[0.88rem]">
                            <Heading
                              size="headingmd"
                              as="h2"
                              className="mt-[0.25rem] self-end text-[1.13rem] font-semibold text-gray-600_02"
                            >
                              Property Type
                            </Heading>
                            <Img src="images/img_arrow_up.svg" alt="Type Arrow" className="h-[1.25rem] w-[1.25rem]" />
                          </div>
                          <div className="flex items-center justify-between gap-[1.25rem] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 px-[1.00rem] py-[0.88rem]">
                            <Heading
                              size="headingmd"
                              as="h3"
                              className="mt-[0.25rem] self-end text-[1.13rem] font-semibold text-gray-600_02"
                            >
                              Price Range
                            </Heading>
                            <Img src="images/img_arrow_up.svg" alt="Price Arrow" className="h-[1.25rem] w-[1.25rem]" />
                          </div>
                        </div>
                        <Button
                          size="3xl"
                          shape="round"
                          className="self-stretch rounded-[10px] px-[2.13rem] font-bold sm:px-[1.25rem]"
                        >
                          Search
                        </Button>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
            <Img
              src="images/img_image.png"
              alt="Main Image"
              className="h-[31.38rem] w-[38.13rem] object-cover md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
