import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import Header from "../../components/Header";
import PrivacyPolicyContent from "./PrivacyPolicyContent";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Protecting Your Personal Information on Relasto.com</title>
        <meta
          name="description"
          content="Stay informed about how Relasto.com uses and protects your personal data. Read our updated Privacy Policy for details on cookies, registration, and your marketing choices."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[6.25rem] bg-gray-50_01 md:gap-[4.69rem] sm:gap-[3.13rem]">
        <div className="flex flex-col gap-[3.75rem] sm:gap-[1.88rem]">
          <div>
            {/* header navigation section */}
            <Header />
          </div>

          {/* privacy policy content section */}
          <PrivacyPolicyContent />
        </div>

        {/* footer section */}
        <footer className="flex items-center justify-center bg-white-a700 py-[4.63rem] md:py-[1.25rem]">
          <div className="container-xs mt-[0.25rem] flex justify-center md:px-[1.25rem]">
            <div className="flex w-full justify-center">
              <div className="flex w-[96%] flex-col items-start gap-[7.13rem] md:w-full md:gap-[5.31rem] sm:gap-[3.56rem]">
                <div className="flex items-center self-stretch md:flex-col">
                  <div className="flex w-[28%] flex-col justify-center gap-[2.63rem] md:w-full">
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
                    <div className="flex flex-col items-start gap-[1.75rem]">
                      <Heading as="h6" className="text-[1.00rem] font-semibold leading-[160%] text-gray-900">
                        <>
                          59 Bervely Hill Ave, Brooklyn Town,
                          <br />
                          New York, NY 5630, CA, US
                        </>
                      </Heading>
                      <div className="flex flex-col items-start justify-center gap-[0.50rem]">
                        <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                          +(123) 456-7890
                        </Heading>
                        <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                          info@mail.com
                        </Heading>
                      </div>
                      <div className="flex gap-[0.75rem]">
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
                    </div>
                  </div>
                  <div className="flex w-[70%] items-center justify-between gap-[1.25rem] md:w-full md:flex-col">
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
                          <a href="#" className="self-start">
                            <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                              About
                            </Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                              Contact
                            </Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="self-start">
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
                          <a href="#">
                            <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                              Blog
                            </Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#">
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
                          <a href="#">
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
                <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                  © 2022. All rights reserved.
                </Heading>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
