import { Heading, Button, Input, Img, Text } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function ResetPassword({ isOpen, ...props }: Props) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")!}
      isOpen={isOpen}
      className="min-w-[75.13rem]"
    >
      {/* reset password content section */}
      <div className="container-xs flex min-w-[75.13rem] justify-center px-[3.50rem] md:px-[1.25rem]">
        {/* reset password form section */}
        <div className="w-[44%] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 px-[1.88rem] py-[2.38rem] md:w-full sm:p-[1.25rem]">
          {/* reset password instructions section */}
          <div className="flex flex-col gap-[1.88rem]">
            {/* email input section */}
            <div className="flex flex-col gap-[1.38rem]">
              {/* reset instructions text section */}
              <div className="flex flex-col gap-[0.50rem]">
                {/* reset header section */}
                <div className="flex items-center justify-between gap-[1.25rem]">
                  <a href="#" className="md:text-[2.13rem] sm:text-[2.00rem]">
                    <Heading
                      size="heading4xl"
                      as="h1"
                      className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900"
                    >
                      Reset Password
                    </Heading>
                  </a>
                  <Img src="images/img_close_gray_900.svg" alt="Close Image" className="h-[1.88rem] w-[1.88rem]" />
                </div>
                <Text as="p" className="text-[1.13rem] font-normal leading-[180%] text-gray-900">
                  Enter the email address associated with your account and we&#39;ll send you a link to reset your
                  password.
                </Text>
              </div>
              <Input
                shape="round"
                type="email"
                name="Email Input"
                placeholder={`user / email address`}
                prefix={
                  <Img src="images/img_lock_gray_600_02_24x24.svg" alt="Lock" className="h-[1.50rem] w-[1.50rem]" />
                }
                className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 pl-[1.00rem] pr-[2.13rem] sm:pr-[1.25rem]"
              />
            </div>

            {/* otp actions section */}
            <div className="flex flex-col gap-[1.13rem]">
              <Button
                size="xl"
                shape="round"
                className="self-stretch rounded-[10px] px-[2.13rem] font-bold sm:px-[1.25rem]"
              >
                Get OTP
              </Button>
              <Button
                color="white_A700"
                size="xl"
                shape="round"
                className="self-stretch rounded-[10px] border border-solid border-gray-600_02 px-[2.06rem] font-bold text-gray-900 sm:px-[1.25rem]"
              >
                Return to sign in
              </Button>
            </div>

            {/* separator line section */}
            <div className="h-[0.06rem] bg-blue_gray-100_01" />

            {/* account creation prompt section */}
            <div className="flex flex-wrap justify-center gap-[0.50rem] px-[1.63rem] sm:px-[1.25rem]">
              <a href="#">
                <Heading
                  size="headinglg"
                  as="h2"
                  className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-600_02"
                >
                  Don’t have an account?
                </Heading>
              </a>
              <a href="#">
                <Heading
                  size="headinglg"
                  as="h3"
                  className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                >
                  Create Account
                </Heading>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
