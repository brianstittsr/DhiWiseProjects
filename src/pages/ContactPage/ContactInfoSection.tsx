import { Img, Heading, Button, TextArea, Input, Text } from "../../components";
import React from "react";

export default function ContactInfoSection() {
  return (
    <>
      {/* contact info section */}
      <div className="flex flex-col items-center">
        {/* contact form section */}
        <div className="container-xs flex flex-col gap-[2.75rem] md:px-[1.25rem]">
          <div className="flex flex-col items-center justify-center gap-[0.88rem]">
            <Heading
              size="heading3xl"
              as="h1"
              className="text-[3.38rem] font-extrabold tracking-[-0.06rem] text-gray-900 md:text-[2.88rem] sm:text-[2.50rem]"
            >
              Get in touch
            </Heading>
            <Text
              as="p"
              className="self-stretch text-center text-[1.13rem] font-normal leading-[180%] text-gray-600_02"
            >
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the
              pain and trouble.
            </Text>
          </div>
          <div className="flex items-start gap-[3.00rem] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 px-[1.63rem] py-[3.13rem] md:flex-col md:py-[1.25rem] sm:p-[1.25rem]">
            <div className="flex flex-1 items-center justify-between gap-[1.25rem] self-center md:self-stretch sm:flex-col">
              <div className="flex w-[90%] flex-col gap-[2.50rem] sm:w-full">
                <div className="ml-[1.38rem] flex flex-col items-start justify-center gap-[1.13rem] md:ml-0">
                  <Heading
                    size="heading3xl"
                    as="h2"
                    className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                  >
                    Send a message
                  </Heading>
                  <div className="flex flex-col gap-[0.75rem] self-stretch">
                    <Input
                      shape="round"
                      type="text"
                      name="Full Name Field"
                      placeholder={`Full Name`}
                      prefix={
                        <Img src="images/img_lock_gray_600_02.svg" alt="Lock" className="h-[1.50rem] w-[1.50rem]" />
                      }
                      className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 pl-[1.00rem] pr-[2.13rem] sm:pr-[1.25rem]"
                    />
                    <Input
                      shape="round"
                      type="email"
                      name="Email Field"
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
                      name="Phone Field"
                      placeholder={`Phone Number`}
                      prefix={<Img src="images/img_call.svg" alt="Call" className="h-[1.50rem] w-[1.50rem]" />}
                      className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 pl-[1.00rem] pr-[2.13rem] sm:pr-[1.25rem]"
                    />
                    <TextArea
                      shape="round"
                      name="Message Box"
                      placeholder={`Message`}
                      className="rounded-[10px] !border !border-blue_gray-100_01 pl-[1.13rem] pr-[2.13rem] font-semibold text-gray-600_02 sm:pb-[1.25rem] sm:pr-[1.25rem]"
                    />
                  </div>
                </div>
                <Button
                  size="xl"
                  shape="round"
                  className="ml-[1.38rem] self-stretch rounded-[10px] px-[2.13rem] font-semibold md:ml-0 sm:px-[1.25rem]"
                >
                  Send Request
                </Button>
              </div>
              <div className="h-[33.38rem] w-[0.06rem] bg-blue_gray-100_01 sm:h-[0.06rem] sm:w-[33.38rem]" />
            </div>

            {/* address and social section */}
            <div className="flex w-[48%] flex-col gap-[2.50rem] md:w-full">
              <div className="mr-[1.50rem] flex flex-col gap-[1.00rem] md:mr-0">
                <div className="flex flex-col items-start justify-center gap-[0.13rem]">
                  <Heading
                    size="headinglg"
                    as="h3"
                    className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                  >
                    Office Address
                  </Heading>
                  <Heading
                    size="headingmd"
                    as="h4"
                    className="text-[1.13rem] font-semibold leading-[180%] text-gray-600_02"
                  >
                    <>
                      1421 San Pedro St, Los Angeles, <br />
                      CA 90015
                    </>
                  </Heading>
                </div>
                <div className="flex flex-col gap-[0.63rem]">
                  <div className="flex gap-[0.81rem]">
                    <Img src="images/img_call.svg" alt="Phone Icon" className="h-[1.50rem] w-[1.50rem]" />
                    <Heading size="headingmd" as="h5" className="text-[1.13rem] font-semibold text-gray-600_02">
                      (123) 456-7890
                    </Heading>
                  </div>
                  <div className="flex gap-[0.75rem]">
                    <Img
                      src="images/img_lock_gray_600_02_24x24.svg"
                      alt="Email Icon"
                      className="h-[1.50rem] w-[1.50rem]"
                    />
                    <Heading
                      size="headingmd"
                      as="h6"
                      className="self-end text-[1.13rem] font-semibold text-gray-600_02"
                    >
                      info@mail.com
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.75rem]">
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
                  <Img src="images/img_favorite.svg" alt="Instagram Icon" className="h-[1.88rem] w-[1.88rem]" />
                  <Img
                    src="images/img_warning_gray_600_02.svg"
                    alt="Twitter Icon"
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
