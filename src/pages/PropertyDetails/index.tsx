import { Helmet } from "react-helmet";
import {
  Button,
  TextArea,
  DatePicker,
  Input,
  Img,
  Heading,
  RatingBar,
  GoogleMap,
  ChipView,
  Text,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductPriceInfo from "../../components/ProductPriceInfo";
import PropertyDetails1 from "../../components/PropertyDetails1";
import HeroSection from "./HeroSection";
import LatestPropertiesSection from "./LatestPropertiesSection";
import React from "react";

export default function PropertyDetailsPage() {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `Map` },
    { value: 2, label: `Schools` },
    { value: 3, label: `Crime` },
    { value: 4, label: `Shop & Eat` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState<number[]>([]);

  return (
    <>
      <Helmet>
        <title>Property Details - Explore Real Estate Listings</title>
        <meta
          name="description"
          content="Discover the details of your next home at 2861 62nd Ave, Oakland, CA. Get insights on price, square footage, amenities, and request a visit to see if it's the right fit for you."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full flex-col gap-[6.25rem] bg-gray-50_01 md:gap-[4.69rem] sm:gap-[3.13rem]">
        <div className="flex flex-col gap-[3.75rem] sm:gap-[1.88rem]">
          {/* header section */}
          <div className="flex flex-col items-center gap-[2.50rem]">
            {/* navigation menu section */}
            <div className="self-stretch">
              <Header />
            </div>

            {/* hero section */}
            <HeroSection />
            <div className="container-xs md:px-[1.25rem]">
              {/* property details section */}
              <div className="flex items-start gap-[1.50rem] md:flex-col">
                {/* property description section */}
                <div className="flex flex-1 flex-col gap-[1.50rem] self-center md:self-stretch">
                  <div className="flex flex-col gap-[2.75rem] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 py-[2.50rem] sm:py-[1.25rem]">
                    <div className="flex flex-col gap-[2.75rem] px-[2.50rem] sm:px-[1.25rem]">
                      <div className="flex flex-col gap-[1.38rem]">
                        <div className="flex flex-col items-start gap-[1.00rem]">
                          <Heading
                            size="heading3xl"
                            as="h2"
                            className="w-full text-[1.75rem] font-extrabold leading-[135%] tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                          >
                            Trovilla Plan in Sereno Canyon - Estate Collection by Toll Brothers
                          </Heading>
                          <Heading
                            size="headinglg"
                            as="h3"
                            className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Heading>
                        </div>
                        <div className="mr-[11.25rem] flex gap-[1.00rem] md:mr-0 md:flex-col">
                          <ProductPriceInfo className="border-gray-600_02" />
                          <ProductPriceInfo
                            priceText="$850 / month"
                            paymentMethodText="0% EMI for 6 Months"
                            className="border-blue_gray-100_01"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-[0.75rem]">
                        <Heading
                          size="headinglg"
                          as="h4"
                          className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                        >
                          Well-constructed 1562 Sq Ft Home Is Now Offering To You In Uttara For Sale
                        </Heading>
                        <Text as="p" className="w-full text-[1.13rem] font-normal leading-[180%] text-gray-600_02">
                          A slider is great way to display a slideshow featuring images or videos, usually on your
                          homepage.Adding sliders to your site is no longer difficult. You don’t have to know coding
                          anymore. Just use a slider widget and it will automatically insert the slider on your web
                          page.So, the Elementor slider would be a great tool to work with when building a WordPress
                          site.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[1.50rem] px-[2.50rem] sm:px-[1.25rem]">
                      <div className="flex flex-col items-start justify-center gap-[1.38rem]">
                        <Heading
                          size="heading3xl"
                          as="h5"
                          className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                        >
                          Local Information
                        </Heading>
                        <ChipView
                          options={chipOptions}
                          setOptions={setChipOptions}
                          values={selectedChipOptions}
                          setValues={setSelectedChipOptions}
                          className="flex flex-wrap gap-[0.75rem] self-stretch"
                        >
                          {(option) => (
                            <React.Fragment key={option.index}>
                              {option.isSelected ? (
                                <div
                                  onClick={option.toggle}
                                  className="flex h-[2.75rem] min-w-[7.38rem] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[10px] border border-solid border-blue_gray-100_01 bg-gray-900 px-[2.13rem] text-center text-[1.00rem] font-semibold text-white-a700 sm:px-[1.25rem]"
                                >
                                  <span>{option.label}</span>
                                </div>
                              ) : (
                                <div
                                  onClick={option.toggle}
                                  className="flex h-[2.75rem] min-w-[7.38rem] cursor-pointer flex-row items-center justify-center rounded-[10px] border border-solid border-blue_gray-100_01 px-[2.13rem] text-center text-[1.00rem] font-semibold text-gray-900 sm:px-[1.25rem]"
                                >
                                  <span>{option.label}</span>
                                </div>
                              )}
                            </React.Fragment>
                          )}
                        </ChipView>
                      </div>
                      <div className="relative h-[25.00rem] content-center md:h-auto">
                        <GoogleMap showMarker={false} className="mx-auto h-[25.00rem] flex-1 rounded-[10px]" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-[1.25rem] px-[10.00rem] md:px-[1.25rem]">
                          <Img
                            src="images/img_linkedin_deep_orange_300_01.svg"
                            alt="Linkedin Image"
                            className="h-[3.38rem] w-[3.38rem]"
                          />
                          <Img
                            src="images/img_linkedin_deep_orange_300_01.svg"
                            alt="Linkedin Image Alt"
                            className="h-[3.38rem] w-[3.38rem]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* home highlights section */}
                  <div>
                    <div className="flex flex-col items-start justify-center gap-[1.13rem] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 p-[2.50rem] sm:p-[1.25rem]">
                      <Heading
                        size="heading3xl"
                        as="h6"
                        className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                      >
                        Home Highlights
                      </Heading>
                      <div className="flex gap-[9.38rem] self-stretch md:flex-col">
                        <PropertyDetails1 />
                        <PropertyDetails1 className="mb-[2.63rem] md:mb-0" />
                      </div>
                    </div>
                  </div>

                  {/* agent information section */}
                  <div>
                    <div className="flex flex-col items-start justify-center gap-[1.25rem] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 p-[2.50rem] sm:p-[1.25rem]">
                      <Heading
                        size="heading3xl"
                        as="h3"
                        className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                      >
                        Agent Information
                      </Heading>
                      <div className="flex items-center gap-[1.50rem] self-stretch md:flex-col">
                        <Img
                          src="images/img_rectangle_5599.png"
                          alt="Agent Image"
                          className="h-[9.38rem] w-[9.38rem] rounded-[10px] object-cover md:w-full"
                        />
                        <div className="flex flex-1 flex-col items-start justify-center gap-[0.13rem] md:self-stretch">
                          <Heading
                            size="headinglg"
                            as="h5"
                            className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                          >
                            Bruno Fernandes
                          </Heading>
                          <div className="flex items-center gap-[0.88rem] self-stretch">
                            <RatingBar value={1} isEditable={true} size={16} className="flex gap-[0.63rem]" />
                            <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                              4 review
                            </Heading>
                          </div>
                          <div className="flex items-center gap-[0.63rem] self-stretch">
                            <Img src="images/img_lock.svg" alt="Email Icon" className="h-[1.25rem] w-[1.25rem]" />
                            <Heading
                              size="textxs"
                              as="p"
                              className="self-end text-[1.00rem] font-medium text-gray-600_02"
                            >
                              bruno@relasto .com
                            </Heading>
                          </div>
                          <div className="flex items-center gap-[0.63rem] self-stretch">
                            <Img src="images/img_call.svg" alt="Call Icon" className="h-[1.25rem] w-[1.25rem]" />
                            <Heading size="textxs" as="p" className="text-[1.00rem] font-medium text-gray-600_02">
                              +65 0231 965 965
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* visit request section */}
                <div className="flex w-[32%] flex-col gap-[2.50rem] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 p-[1.50rem] md:w-full sm:p-[1.25rem]">
                  <div className="flex flex-col items-start justify-center gap-[1.13rem]">
                    <Heading
                      size="heading3xl"
                      as="h3"
                      className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                    >
                      Request for Visit
                    </Heading>
                    <div className="flex flex-col gap-[0.75rem] self-stretch">
                      <Input
                        shape="round"
                        type="text"
                        name="Full Name Input"
                        placeholder={`Full Name`}
                        prefix={
                          <Img src="images/img_lock_gray_600_02.svg" alt="Lock" className="h-[1.50rem] w-[1.50rem]" />
                        }
                        className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 pl-[1.00rem] pr-[2.13rem] sm:pr-[1.25rem]"
                      />
                      <Input
                        shape="round"
                        type="email"
                        name="Email Input"
                        placeholder={`Email Address`}
                        prefix={
                          <Img
                            src="images/img_lock_gray_600_02_24x24.svg"
                            alt="Lock"
                            className="h-[1.50rem] w-[1.50rem]"
                          />
                        }
                        className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 pl-[1.00rem] pr-[2.13rem] sm:pr-[1.25rem]"
                      />
                      <Input
                        shape="round"
                        type="number"
                        name="Phone Input"
                        placeholder={`Phone Number`}
                        prefix={<Img src="images/img_call.svg" alt="Call" className="h-[1.50rem] w-[1.50rem]" />}
                        className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 pl-[1.00rem] pr-[2.13rem] sm:pr-[1.25rem]"
                      />
                      <DatePicker
                        name="Date Picker"
                        placeholder={`Date`}
                        className="flex gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 py-[1.00rem] pl-[1.00rem] pr-[2.13rem] text-[1.13rem] font-semibold text-gray-600_02 sm:pr-[1.25rem]"
                      />
                      <TextArea
                        shape="round"
                        name="Message TextArea"
                        placeholder={`Message`}
                        className="rounded-[10px] !border !border-blue_gray-100_01 pl-[1.13rem] pr-[2.13rem] font-semibold text-gray-600_02 sm:pb-[1.25rem] sm:pr-[1.25rem]"
                      />
                    </div>
                  </div>
                  <Button
                    size="xl"
                    shape="round"
                    className="self-stretch rounded-[10px] px-[2.13rem] font-semibold sm:px-[1.25rem]"
                  >
                    Send Request
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* latest properties section */}
          <LatestPropertiesSection />
        </div>

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}
