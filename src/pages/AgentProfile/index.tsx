import { Helmet } from "react-helmet";
import { Button, Img, Heading, RatingBar } from "../../components";
import AgentProfileCard from "../../components/AgentProfileCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AgentBio from "./AgentBio";
import ClientReviews from "./ClientReviews";
import HeroBanner from "./HeroBanner";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function AgentProfilePage() {
  return (
    <>
      <Helmet>
        <title>Bruno Fernandes - Experienced Real Estate Agent in Oakland, CA</title>
        <meta
          name="description"
          content="Meet Bruno Fernandes, a top-rated real estate agent with over 15 years of experience in Oakland, CA. Specializing in family homes, Bruno offers personalized services to help you find your dream property. Contact Bruno today for listings and expert advice."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[6.25rem] bg-gray-50_01 md:gap-[4.69rem] sm:gap-[3.13rem]">
        <div>
          {/* navigation header section */}
          <Header />
          <div>
            {/* hero banner section */}
            <HeroBanner />
            <div className="relative mt-[-2.88rem] flex flex-col items-center gap-[3.63rem] sm:gap-[1.81rem]">
              {/* agent highlight section */}
              <div className="flex justify-center self-stretch">
                <div className="container-xs flex items-center justify-center gap-[1.88rem] px-[1.25rem] md:flex-col">
                  <Img
                    src="images/img_rectangle_5599_150x150.png"
                    alt="Profile Image"
                    className="h-[9.38rem] w-[9.38rem] rounded-[10px] object-cover md:w-full"
                  />
                  <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                    <div className="flex flex-1 items-center gap-[2.00rem] md:flex-col md:self-stretch">
                      <div className="flex w-[46%] flex-col items-start justify-center gap-[0.63rem] md:w-full">
                        <Heading
                          size="heading2xl"
                          as="h1"
                          className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
                        >
                          Bruno Fernandes
                        </Heading>
                        <div className="flex items-start gap-[0.88rem] self-stretch">
                          <RatingBar value={1} isEditable={true} size={16} className="flex gap-[0.63rem]" />
                          <Heading as="h2" className="self-center text-[1.00rem] font-semibold text-gray-900">
                            4.5 review
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[0.88rem] md:self-stretch">
                        <div className="flex gap-[0.81rem]">
                          <Img
                            src="images/img_call_gray_900.svg"
                            alt="Phone Icon"
                            className="h-[1.50rem] w-[1.50rem]"
                          />
                          <Heading size="headingmd" as="h3" className="text-[1.13rem] font-semibold text-gray-900">
                            (123) 456-7890
                          </Heading>
                        </div>
                        <div className="flex gap-[0.75rem]">
                          <Img
                            src="images/img_lock_gray_900.svg"
                            alt="Email Icon"
                            className="h-[1.50rem] w-[1.50rem]"
                          />
                          <Heading size="headingmd" as="h4" className="text-[1.13rem] font-semibold text-gray-900">
                            bruno@relasto .com
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <Button
                      shape="round"
                      className="min-w-[7.00rem] rounded-[10px] px-[1.50rem] font-semibold sm:px-[1.25rem]"
                    >
                      Contact
                    </Button>
                  </div>
                </div>
              </div>

              {/* property tabs section */}
              <div className="container-xs md:px-[1.25rem]">
                <Tabs
                  className="flex flex-col gap-[3.00rem]"
                  selectedTabClassName="!text-white-a700 bg-gray-900 rounded-[10px]"
                  selectedTabPanelClassName="!relative tab-panel--selected"
                >
                  <div className="flex justify-between gap-[1.25rem] md:flex-col">
                    <TabList className="flex flex-wrap gap-[0.88rem] md:flex-col">
                      <Tab className="w-full px-[7.25rem] py-[0.63rem] text-center text-[1.00rem] font-semibold leading-[100%] text-gray-900 md:px-[1.25rem]">
                        For rent
                      </Tab>
                      <Tab className="w-full px-[7.25rem] py-[0.63rem] text-center text-[1.00rem] font-semibold leading-[100%] text-gray-900 md:px-[1.25rem]">
                        For sale
                      </Tab>
                      <Tab className="w-full px-[7.25rem] py-[0.63rem] text-center text-[1.00rem] font-semibold leading-[100%] text-gray-900 md:px-[1.25rem]">
                        About
                      </Tab>
                    </TabList>
                    <Button
                      color="gray_600_02"
                      size="md"
                      variant="outline"
                      shape="round"
                      className="min-w-[18.13rem] rounded-[10px] !border px-[2.06rem] font-semibold sm:px-[1.25rem]"
                    >
                      Review
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[3.00rem]">
                    {[...Array(3)].map((_, index) => (
                      <TabPanel key={`tab-panel${index}`} className="absolute justify-center">
                        <div className="w-full">
                          <div className="grid grid-cols-3 gap-[1.50rem] md:grid-cols-2 sm:grid-cols-1">
                            <Suspense fallback={<div>Loading feed...</div>}>
                              {[...Array(6)].map((d, index) => (
                                <AgentProfileCard key={"propertyGrid" + index} />
                              ))}
                            </Suspense>
                          </div>
                        </div>
                      </TabPanel>
                    ))}
                    <div className="flex justify-center sm:flex-col">
                      <div className="flex flex-1 sm:self-stretch">
                        <Button
                          color="gray_700"
                          variant="outline"
                          shape="round"
                          className="min-w-[3.00rem] rounded-[10px] !border px-[1.19rem] font-semibold"
                        >
                          1
                        </Button>
                        <Button
                          color="blue_gray_100_02"
                          variant="outline"
                          shape="round"
                          className="ml-[0.25rem] min-w-[3.00rem] rounded-[10px] !border px-[1.06rem] font-semibold"
                        >
                          2
                        </Button>
                        <Button
                          color="blue_gray_100_02"
                          variant="outline"
                          shape="round"
                          className="ml-[0.25rem] min-w-[3.00rem] rounded-[10px] !border px-[1.06rem] font-semibold"
                        >
                          3
                        </Button>
                        <Button
                          color="blue_gray_100_02"
                          variant="outline"
                          shape="round"
                          className="ml-[0.25rem] min-w-[3.00rem] rounded-[10px] !border px-[1.06rem] font-semibold"
                        >
                          4
                        </Button>
                        <Button
                          color="blue_gray_100_02"
                          variant="outline"
                          shape="round"
                          className="ml-[0.25rem] min-w-[3.00rem] rounded-[10px] !border px-[1.06rem] font-semibold"
                        >
                          5
                        </Button>
                      </div>
                      <Button
                        color="blue_gray_100_02"
                        variant="outline"
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_arrowright.svg"
                            alt="Arrow Right"
                            className="mb-[0.25rem] h-[1.00rem] w-[1.00rem]"
                          />
                        }
                        className="min-w-[8.38rem] gap-[0.25rem] rounded-[10px] !border px-[1.06rem] font-semibold"
                      >
                        Next Page
                      </Button>
                    </div>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        {/* agent bio section */}
        <AgentBio />

        {/* client reviews section */}
        <ClientReviews />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
