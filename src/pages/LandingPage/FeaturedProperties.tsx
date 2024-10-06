import { Heading, Img } from "../../components";
import LandingPageCard from "../../components/LandingPageCard";
import React, { Suspense } from "react";

export default function FeaturedProperties() {
  return (
    <>
      {/* featured properties section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[3.25rem] md:px-[1.25rem] sm:gap-[1.63rem]">
          <div className="flex flex-col gap-[1.38rem]">
            <div className="flex items-end justify-center sm:flex-col">
              <Heading
                size="heading4xl"
                as="h2"
                className="mt-[0.25rem] text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
              >
                Featured Properties
              </Heading>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <div className="mb-[0.50rem] flex flex-1 justify-end gap-[0.50rem] sm:self-stretch">
                  <Heading size="headingmd" as="h3" className="text-[1.13rem] font-bold text-orange-a700">
                    Explore All
                  </Heading>
                  <Img src="images/img_arrow_left.svg" alt="Arrow Image" className="h-[1.50rem] w-[1.50rem]" />
                </div>
              </a>
            </div>
            <div className="flex flex-wrap justify-between gap-[1.25rem]">
              <Heading size="headingmd" as="h4" className="text-[1.13rem] font-bold text-gray-900">
                Resident Property
              </Heading>
              <Heading size="headingmd" as="h5" className="text-[1.13rem] font-bold text-gray-400">
                Commercial Property
              </Heading>
              <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-400">
                Industrial Property
              </Heading>
              <Heading size="headingmd" as="h6" className="mr-[7.13rem] text-[1.13rem] font-bold text-gray-400">
                Agriculture Property
              </Heading>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-center gap-[1.50rem] md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(6)].map((d, index) => (
                <LandingPageCard key={"propertiesGrid" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
