import { Helmet } from "react-helmet";
import { Button, Img, Heading, GoogleMap } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListingCard from "../../components/ListingCard";
import PropertyDetails2 from "../../components/PropertyDetails2";
import SearchFilterSection from "./SearchFilterSection";
import React, { Suspense } from "react";

export default function ListingMapViewPage() {
  return (
    <>
      <Helmet>
        <title>Map View Listings - Find Your Dream Property</title>
        <meta
          name="description"
          content="Explore properties for sale with our interactive map view. Find your dream home by searching through listings with detailed filters like price range, bedrooms, bathrooms, and square footage."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full flex-col gap-[6.25rem] bg-gray-50_01 md:gap-[4.69rem] sm:gap-[3.13rem]">
        {/* navigation section */}
        <div className="flex flex-col gap-[3.88rem] sm:gap-[1.94rem]">
          <div>
            {/* header section */}
            <Header />
          </div>

          {/* search filter section */}
          <SearchFilterSection />

          {/* property listings section */}
          <div className="flex flex-col items-center">
            <div className="container-xs md:px-[1.25rem]">
              <div className="flex flex-col gap-[3.75rem] sm:gap-[1.88rem]">
                <div className="relative h-[26.75rem] content-center md:h-auto">
                  <GoogleMap showMarker={false} className="mx-auto h-[26.75rem] flex-1 rounded-[10px]" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-[2.38rem] mr-[4.38rem] flex h-[22.63rem] flex-1 items-end justify-end bg-[url(/public/images/img_group_2.svg)] bg-cover bg-no-repeat py-[5.13rem] pl-[3.50rem] pr-[4.13rem] md:mx-0 md:h-auto md:p-[1.25rem]">
                    <div className="mt-[0.50rem] flex w-[32%] flex-col items-start gap-[1.13rem] rounded-lg border-[0.8px] border-solid border-gray-600_02 bg-white-a700 px-[1.00rem] py-[1.38rem] md:w-full sm:py-[1.25rem]">
                      <div className="flex gap-[0.63rem] self-stretch">
                        <Img
                          src="images/img_linkedin_gray_900.svg"
                          alt="Linkedin Icon"
                          className="h-[1.13rem] w-[1.13rem]"
                        />
                        <Heading size="headingxs" as="h2" className="text-[0.75rem] font-semibold text-gray-900">
                          2861 62nd Ave, Oakland, CA 94605
                        </Heading>
                      </div>
                      <div className="flex flex-col gap-[0.88rem] self-stretch md:flex-row sm:flex-col">
                        <PropertyDetails2
                          bookmarkImage="images/img_bookmark.svg"
                          bedroomText="3 Bed Room"
                          userImage="images/img_user.svg"
                          bathText="1 Bath"
                        />
                        <PropertyDetails2
                          bookmarkImage="images/img_microphone.svg"
                          bedroomText="1,032 sqft"
                          userImage="images/img_user_gray_700.svg"
                          bathText="Family"
                        />
                      </div>
                      <Heading
                        size="headinglg"
                        as="h3"
                        className="text-[1.19rem] font-bold tracking-[0.00rem] text-gray-900"
                      >
                        $649,900
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[3.75rem] sm:gap-[1.88rem]">
                  <div className="grid grid-cols-1 justify-center gap-[1.50rem] gap-y-[1.50rem]">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {[...Array(9)].map((d, index) => (
                        <ListingCard key={"propertyGrid" + index} className="w-full" />
                      ))}
                    </Suspense>
                  </div>
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
              </div>
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}
