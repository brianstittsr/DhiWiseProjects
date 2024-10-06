import { Heading, Button, Input, Img, Text } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function NewPassword({ isOpen, ...props }: Props) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")!}
      isOpen={isOpen}
      className="min-w-[75.13rem]"
    >
      {/* password reset form section */}
      <div className="container-xs flex min-w-[75.13rem] justify-center px-[3.50rem] md:px-[1.25rem]">
        {/* password reset fields section */}
        <div className="w-[44%] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 px-[1.88rem] py-[2.25rem] md:w-full sm:p-[1.25rem]">
          {/* password update actions section */}
          <div className="flex flex-col gap-[1.88rem]">
            <div className="flex flex-col gap-[1.50rem]">
              <div className="flex flex-col items-start justify-center gap-[0.88rem]">
                {/* password reset header section */}
                <div className="flex items-center justify-between gap-[1.25rem] self-stretch">
                  <Heading
                    size="heading4xl"
                    as="h1"
                    className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
                  >
                    New Password
                  </Heading>
                  <Img src="images/img_close_gray_900.svg" alt="Close Image" className="h-[1.88rem] w-[1.88rem]" />
                </div>
                <Text as="p" className="text-[1.13rem] font-normal text-gray-900">
                  Enter your new password
                </Text>
              </div>
              <Input
                shape="round"
                type="password"
                name="Password Input"
                placeholder={`Password`}
                prefix={<Img src="images/img_profile.svg" alt="Profile" className="h-[1.50rem] w-[1.50rem]" />}
                suffix={<Img src="images/img_airplane.svg" alt="Airplane" className="h-[1.50rem] w-[1.50rem]" />}
                className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 px-[1.00rem]"
              />
              <Input
                shape="round"
                type="password"
                name="Re-enter Password"
                placeholder={`Re-New Password`}
                prefix={<Img src="images/img_profile.svg" alt="Profile" className="h-[1.50rem] w-[1.50rem]" />}
                suffix={<Img src="images/img_airplane.svg" alt="Airplane" className="h-[1.50rem] w-[1.50rem]" />}
                className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 px-[1.00rem]"
              />
            </div>
            <Button
              size="xl"
              shape="round"
              className="self-stretch rounded-[10px] px-[2.13rem] font-bold sm:px-[1.25rem]"
            >
              Update Password
            </Button>
            <div className="h-[0.06rem] bg-blue_gray-100_01" />

            {/* password reset footer section */}
            <div className="flex flex-wrap items-center justify-center gap-[0.50rem] px-[3.50rem] md:px-[1.25rem]">
              <a href="#">
                <Heading
                  size="headinglg"
                  as="h2"
                  className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-600_02"
                >
                  Remember the Password?
                </Heading>
              </a>
              <a href="#" className="self-end">
                <Heading
                  size="headinglg"
                  as="h3"
                  className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                >
                  Log in
                </Heading>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
