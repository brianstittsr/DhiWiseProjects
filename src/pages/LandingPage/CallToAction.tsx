import { Button, CheckBox, Text, Heading, Img } from "../../components";
import React from "react";

export default function CallToAction() {
  return (
    <>
      {/* call to action section */}
      <div>
        <div className="flex flex-col items-center justify-center bg-gray-50_01 py-[7.50rem] md:py-[1.25rem]">
          <div className="container-xs md:px-[1.25rem]">
            <div className="flex flex-col gap-[9.38rem] md:gap-[7.00rem] sm:gap-[4.69rem]">
              <div className="flex items-center md:flex-col">
                <div className="flex w-full flex-col items-start gap-[3.63rem] sm:gap-[1.81rem]">
                  <div className="flex flex-col items-start gap-[1.13rem] self-stretch">
                    <Heading
                      size="heading4xl"
                      as="h2"
                      className="w-[92%] text-[2.25rem] font-extrabold leading-[140%] tracking-[0.00rem] text-gray-900 md:w-full md:text-[2.13rem] sm:text-[2.00rem]"
                    >
                      Simple & easy way to find your dream Appointment
                    </Heading>
                    <Text as="p" className="w-[92%] text-[1.13rem] font-normal leading-[180%] text-gray-700 md:w-full">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when
                      our power of choice is untrammelled and when nothing prevents our being able to do what we like
                      best, every pleasure is to be welcomed.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    className="min-w-[8.63rem] rounded-[10px] px-[1.50rem] font-semibold sm:px-[1.25rem]"
                  >
                    Get Started
                  </Button>
                </div>
                <div className="flex w-full gap-[0.63rem] sm:flex-col">
                  <div className="flex flex-1 flex-col items-end gap-[1.00rem] sm:self-stretch">
                    <Img
                      src="images/img_rectangle_18.png"
                      alt="Image Two"
                      className="h-[20.38rem] w-[86%] rounded-[10px] object-contain"
                    />
                    <Img
                      src="images/img_rectangle_21.png"
                      alt="Image Three"
                      className="h-[13.63rem] w-[86%] rounded-[10px] object-contain"
                    />
                  </div>
                  <div className="flex w-[46%] flex-col gap-[1.00rem] sm:w-full">
                    <Img
                      src="images/img_rectangle_19.png"
                      alt="Image Four"
                      className="ml-[0.63rem] h-[13.63rem] rounded-[10px] object-cover md:ml-0"
                    />
                    <Img
                      src="images/img_rectangle_20.png"
                      alt="Image Five"
                      className="ml-[0.63rem] h-[20.38rem] rounded-[10px] object-cover md:ml-0"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-[1.25rem] md:flex-col">
                <Img
                  src="images/img_rectangle_20_588x520.png"
                  alt="Image Six"
                  className="h-[36.75rem] w-[42%] rounded-[10px] object-contain md:w-full"
                />
                <div className="flex w-[42%] flex-col items-start gap-[3.75rem] md:w-full sm:gap-[1.88rem]">
                  <div className="flex flex-col gap-[1.13rem] self-stretch">
                    <div className="flex flex-col gap-[1.13rem]">
                      <Heading
                        size="heading2xl"
                        as="h3"
                        className="text-[2.25rem] font-extrabold leading-[140%] tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
                      >
                        Best rated host on popular rental sites
                      </Heading>
                      <Text as="p" className="text-[1.13rem] font-normal leading-[180%] text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when
                        our power of choice is untrammelled.
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[1.00rem]">
                      <CheckBox
                        name="Deals Checkbox"
                        label="Find excellent deals"
                        id="DealsCheckbox"
                        className="gap-[0.88rem] text-[1.13rem] font-semibold text-gray-900"
                      />
                      <CheckBox
                        name="Host Checkbox"
                        label="Friendly host & Fast support"
                        id="HostCheckbox"
                        className="gap-[0.88rem] text-[1.13rem] font-semibold text-gray-900"
                      />
                      <CheckBox
                        name="Payment Checkbox"
                        label="Secure payment system"
                        id="PaymentCheckbox"
                        className="gap-[0.88rem] text-[1.13rem] font-semibold text-gray-900"
                      />
                    </div>
                  </div>
                  <Button
                    shape="round"
                    className="min-w-[8.38rem] rounded-[10px] px-[1.50rem] font-semibold sm:px-[1.25rem]"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
