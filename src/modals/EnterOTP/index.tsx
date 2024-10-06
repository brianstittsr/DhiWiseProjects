import { Heading, Button, Text, Img } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";
import OTPInput from "react-otp-input";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function EnterOTP({ isOpen, ...props }: Props) {
  const [otp, setOtp] = React.useState("");

  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")!}
      isOpen={isOpen}
      className="min-w-[75.13rem]"
    >
      <div className="container-xs flex min-w-[75.13rem] justify-center px-[3.50rem] md:px-[1.25rem]">
        {/* otp form section */}
        <div className="w-[44%] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 px-[1.88rem] py-[2.25rem] md:w-full sm:p-[1.25rem]">
          <div className="flex flex-col gap-[1.88rem]">
            <div className="flex flex-col gap-[1.50rem]">
              {/* otp instruction section */}
              <div className="flex flex-col items-start justify-center gap-[0.88rem]">
                {/* otp header section */}
                <div className="flex items-center justify-between gap-[1.25rem] self-stretch">
                  <Heading
                    size="heading4xl"
                    as="h1"
                    className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
                  >
                    Enter OTP
                  </Heading>
                  <Img src="images/img_close_gray_900.svg" alt="Close Image" className="h-[1.88rem] w-[1.88rem]" />
                </div>
                <Text as="p" className="text-[1.13rem] font-normal text-gray-900">
                  Please check your mail, We sent an OTP code
                </Text>
              </div>

              {/* otp input section */}
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                inputStyle="flex items-center justify-center cursor-text h-[3.75rem] w-[3.75rem] text-gray-900 border-gray-600_02 border border-solid text-center rounded-[10px]"
                containerStyle="flex w-auto gap-[0.75rem]"
                renderInput={({ className, ...inputProps }, i) => (
                  <label
                    className="className flex h-[3.75rem] w-[3.75rem] cursor-text items-center justify-center rounded-[10px] border border-solid border-gray-600_02 text-center text-gray-900"
                    key={i}
                  >
                    <input {...inputProps} />
                  </label>
                )}
              />
            </div>

            {/* otp actions section */}
            <div className="flex flex-col gap-[1.13rem]">
              <Button
                size="xl"
                shape="round"
                className="self-stretch rounded-[10px] px-[2.13rem] font-bold sm:px-[1.25rem]"
              >
                Confirm
              </Button>
              <Button
                color="white_A700"
                size="xl"
                shape="round"
                className="self-stretch rounded-[10px] border border-solid border-gray-600_02 px-[2.06rem] font-bold text-gray-900 sm:px-[1.25rem]"
              >
                Request OTP Again
              </Button>
            </div>

            {/* otp separator section */}
            <div className="h-[0.06rem] bg-blue_gray-100_01" />

            {/* otp footer section */}
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
