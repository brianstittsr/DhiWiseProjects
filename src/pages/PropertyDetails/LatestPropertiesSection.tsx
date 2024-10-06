import { Img, Heading } from "../../components";
import ListingCard from "../../components/ListingCard";
import React, { Suspense } from "react";

export default function LatestPropertiesSection() {
  return (
    <>
      {/* latest properties section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[2.38rem] md:px-[1.25rem]">
          <div className="flex items-end justify-center sm:flex-col">
            <Heading
              size="heading3xl"
              as="h2"
              className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
            >
              Latest Property Listings
            </Heading>
            <div className="mb-[0.25rem] flex flex-1 justify-end gap-[0.50rem] sm:self-stretch">
              <Heading size="headingmd" as="h3" className="text-[1.13rem] font-bold text-orange-a700">
                Explore All
              </Heading>
              <Img src="images/img_arrow_left.svg" alt="Left Arrow Image" className="h-[1.50rem] w-[1.50rem]" />
            </div>
          </div>
          <div className="flex gap-[1.50rem] md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(3)].map((d, index) => (
                <ListingCard key={"propertiesList" + index} className="w-[32%] md:w-full" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
