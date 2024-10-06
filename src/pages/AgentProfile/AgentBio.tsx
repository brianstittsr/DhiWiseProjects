import { Img, Heading, Button, Text, RatingBar } from "../../components";
import React from "react";

export default function AgentBio() {
  return (
    <>
      {/* agent bio section */}
      <div className="flex justify-center">
        <div className="container-xs flex justify-center md:px-[1.25rem]">
          <div className="flex w-full items-start rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 p-[2.63rem] md:flex-col md:p-[1.25rem]">
            <div className="flex w-full flex-col items-start gap-[3.50rem] self-center sm:gap-[1.75rem]">
              <div className="flex flex-col gap-[1.50rem] self-stretch">
                <div className="flex items-center gap-[1.88rem] sm:flex-col">
                  <Img
                    src="images/img_rectangle_5599.png"
                    alt="Profile Image"
                    className="h-[11.38rem] w-[11.38rem] rounded-[10px] object-cover sm:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start justify-center gap-[0.38rem] sm:self-stretch">
                    <Heading
                      size="heading2xl"
                      as="h2"
                      className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
                    >
                      Bruno Fernandes
                    </Heading>
                    <div className="flex items-center gap-[0.88rem] self-stretch">
                      <RatingBar value={1} isEditable={true} size={16} starCount={2} className="flex gap-[0.63rem]" />
                      <Heading as="h3" className="text-[1.00rem] font-semibold text-gray-900">
                        4.5 review
                      </Heading>
                    </div>
                    <div className="flex gap-[0.81rem] self-stretch">
                      <Img src="images/img_call_gray_900.svg" alt="Phone Icon" className="h-[1.50rem] w-[1.50rem]" />
                      <Heading size="headingmd" as="h4" className="text-[1.13rem] font-semibold text-gray-900">
                        (123) 456-7890
                      </Heading>
                    </div>
                    <div className="flex gap-[0.75rem] self-stretch">
                      <Img src="images/img_lock_gray_900.svg" alt="Email Icon" className="h-[1.50rem] w-[1.50rem]" />
                      <Heading size="headingmd" as="h5" className="self-end text-[1.13rem] font-semibold text-gray-900">
                        bruno@relasto .com
                      </Heading>
                    </div>
                  </div>
                </div>
                <Text as="p" className="w-[94%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
                  <>
                    A slider is great way to display a slideshow featuring images or videos, usually on your
                    homepage.Adding sliders to your site is no longer difficult. You don’t have to know coding anymore.
                    Just use a slider widget and it will automatically insert the slider on your web page.
                    <br />
                    One of the best ways to add beautiful sliders with excellent responsiveness and advanced options.{" "}
                  </>
                </Text>
              </div>
              <Button
                shape="round"
                className="min-w-[32.75rem] rounded-[10px] px-[2.13rem] font-semibold sm:px-[1.25rem]"
              >
                Contact
              </Button>
            </div>
            <div className="flex w-full flex-col items-end gap-[1.50rem]">
              <div className="flex flex-col items-start justify-center gap-[0.38rem]">
                <Heading
                  size="headinglg"
                  as="h6"
                  className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                >
                  Experiences
                </Heading>
                <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-600_02">
                  15+ years experience
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.38rem]">
                <Heading
                  size="headinglg"
                  as="h5"
                  className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                >
                  Property Types
                </Heading>
                <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-600_02">
                  Private House, Villa, Townhouse, Apartment
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.50rem]">
                <Heading
                  size="headinglg"
                  as="h5"
                  className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                >
                  Area
                </Heading>
                <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-900">
                  California, San Jose, Miami
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.50rem]">
                <Heading
                  size="headinglg"
                  as="h5"
                  className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                >
                  Address
                </Heading>
                <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-600_02">
                  59 Orchard, NY 5005, US
                </Heading>
              </div>
              <div className="flex justify-center self-stretch">
                <div className="flex flex-col items-start justify-center gap-[0.38rem]">
                  <Heading
                    size="headinglg"
                    as="h5"
                    className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                  >
                    License No
                  </Heading>
                  <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-600_02">
                    BF-0535
                  </Heading>
                </div>
                <div className="flex flex-col items-start justify-center gap-[0.38rem]">
                  <Heading
                    size="headinglg"
                    as="h5"
                    className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                  >
                    Website
                  </Heading>
                  <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-600_02 underline">
                    www.abc.com
                  </Heading>
                </div>
              </div>
              <div className="flex w-[94%] flex-col items-start justify-center gap-[0.75rem] md:w-full">
                <Heading
                  size="headinglg"
                  as="h5"
                  className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                >
                  Social
                </Heading>
                <div className="flex gap-[1.00rem] self-stretch">
                  <Img src="images/img_facebook.svg" alt="Facebook Icon" className="h-[1.88rem] w-[1.88rem]" />
                  <Img src="images/img_link_gray_600_02.svg" alt="Linkedin Icon" className="h-[1.88rem] w-[1.88rem]" />
                  <Img src="images/img_favorite.svg" alt="Favorite Icon" className="h-[1.88rem] w-[1.88rem]" />
                  <Img
                    src="images/img_warning_gray_600_02.svg"
                    alt="Warning Icon"
                    className="h-[1.88rem] w-[1.88rem]"
                  />
                  <Img
                    src="images/img_settings_gray_600_02.svg"
                    alt="Settings Icon"
                    className="h-[1.88rem] w-[1.88rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
