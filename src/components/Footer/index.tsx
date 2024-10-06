import { Heading, Img, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center py-[4.63rem] md:py-[1.25rem] bg-white-a700`}
    >
      <div className="container-xs mt-[0.25rem] flex justify-center md:px-[1.25rem]">
        <div className="flex w-full justify-center">
          <div className="flex w-[96%] items-start justify-center md:w-full md:flex-col">
            <div className="flex w-[28%] flex-col items-start self-center md:w-full">
              <div className="flex items-start gap-[0.63rem]">
                <Img src="images/img_home.svg" alt="Home Icon" className="h-[2.50rem] w-[2.50rem] self-center" />
                <Text
                  size="textmd"
                  as="p"
                  className="mt-[0.25rem] font-markoone text-[1.25rem] font-normal text-orange-a700"
                >
                  Relasto
                </Text>
              </div>
              <ul className="!mt-[2.63rem] flex flex-col items-start gap-[0.88rem] self-stretch">
                <li>
                  <a href="#">
                    <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                      59 Bervely Hill Ave, Brooklyn Town,
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                      New York, NY 5630, CA, US
                    </Heading>
                  </a>
                </li>
              </ul>
              <Heading as="h6" className="mt-[1.88rem] text-[1.00rem] font-semibold text-gray-900">
                +(123) 456-7890
              </Heading>
              <Heading as="h6" className="mt-[0.50rem] text-[1.00rem] font-semibold text-gray-900">
                info@mail.com
              </Heading>
              <div className="mt-[1.75rem] flex gap-[0.75rem]">
                <Img
                  src="images/img_contrast_orange_a700.svg"
                  alt="Contrast Icon"
                  className="h-[1.88rem] w-[1.88rem]"
                />
                <Img src="images/img_icon_twitter.svg" alt="Twitter Icon" className="h-[1.88rem] w-[1.88rem]" />
                <Img src="images/img_info.svg" alt="Info Icon" className="h-[1.88rem] w-[1.88rem]" />
                <Img src="images/img_link.svg" alt="Link Icon" className="h-[1.88rem] w-[1.88rem]" />
                <Img src="images/img_warning.svg" alt="Warning Icon" className="h-[1.88rem] w-[1.88rem]" />
              </div>
              <a href="#" className="mt-[7.13rem]">
                <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                  © 2022. All rights reserved.
                </Heading>
              </a>
            </div>
            <div className="mt-[1.63rem] flex w-[70%] items-center justify-between gap-[1.25rem] md:w-full md:flex-col">
              <div className="flex w-[28%] flex-col items-start gap-[1.00rem] md:w-full">
                <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-900">
                  Features
                </Heading>
                <ul className="flex flex-col items-center gap-[0.88rem]">
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Home v1
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Home v2
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="About" target="_blank" rel="noreferrer" className="self-start">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        About
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Contact" target="_blank" rel="noreferrer">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Contact
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Search" target="_blank" rel="noreferrer" className="self-start">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Search
                      </Heading>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex w-[28%] flex-col items-start gap-[1.00rem] md:w-full">
                <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-900">
                  Information
                </Heading>
                <ul className="flex flex-col items-start gap-[0.88rem]">
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Listing v1
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Listing v2
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Property Details
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Agent List
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Agent Profile
                      </Heading>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex w-[28%] flex-col items-start gap-[1.00rem] self-start md:w-full md:self-auto">
                <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-900">
                  Documentation{" "}
                </Heading>
                <ul className="flex flex-col items-start gap-[0.88rem]">
                  <li>
                    <a href="Blog" target="_blank" rel="noreferrer">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Blog
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="FAQ" target="_blank" rel="noreferrer">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        FAQ
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Privacy Policy
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="License" target="_blank" rel="noreferrer">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        License
                      </Heading>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-[1.00rem]">
                <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-900">
                  Others
                </Heading>
                <ul className="flex flex-col items-start gap-[0.88rem]">
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Log in
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Enter OTP
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        New Password
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Reset Password
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                        Create Account
                      </Heading>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
