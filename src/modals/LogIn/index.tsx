import { Heading, Button, Img, CheckBox, Input } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function LogIn({ isOpen, ...props }: Props) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")!}
      isOpen={isOpen}
      className="min-w-[75.13rem]"
    >
      {/* login form container section */}
      <div className="container-xs flex min-w-[75.13rem] justify-center px-[3.50rem] md:px-[1.25rem]">
        {/* login form section */}
        <div className="w-[44%] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 px-[1.88rem] py-[2.38rem] md:w-full sm:p-[1.25rem]">
          {/* login actions section */}
          <div className="flex flex-col gap-[1.75rem]">
            {/* remember me forgot password section */}
            <div className="flex flex-col gap-[0.75rem]">
              {/* login credentials section */}
              <div className="flex flex-col gap-[1.50rem]">
                {/* login header section */}
                <div className="flex items-center justify-between gap-[1.25rem]">
                  <a href="#" className="mt-[0.25rem] self-end md:text-[2.13rem] sm:text-[2.00rem]">
                    <Heading
                      size="heading4xl"
                      as="h1"
                      className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900"
                    >
                      Log in
                    </Heading>
                  </a>
                  <Img src="images/img_close_gray_900.svg" alt="Close Image" className="h-[1.88rem] w-[1.88rem]" />
                </div>

                {/* input fields section */}
                <div className="flex flex-col gap-[0.75rem]">
                  <Input
                    shape="round"
                    type="email"
                    name="Email Input"
                    placeholder={`user / email address`}
                    prefix={
                      <Img src="images/img_lock_gray_600_02.svg" alt="Lock" className="h-[1.50rem] w-[1.50rem]" />
                    }
                    className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 pl-[1.00rem] pr-[2.13rem] sm:pr-[1.25rem]"
                  />
                  <Input
                    shape="round"
                    type="password"
                    name="Password Input"
                    placeholder={`Password`}
                    prefix={<Img src="images/img_profile.svg" alt="Profile" className="h-[1.50rem] w-[1.50rem]" />}
                    suffix={<Img src="images/img_airplane.svg" alt="Airplane" className="h-[1.50rem] w-[1.50rem]" />}
                    className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 px-[1.00rem]"
                  />
                </div>
              </div>

              {/* checkbox forgotpassword section */}
              <div className="flex justify-between gap-[1.25rem]">
                <CheckBox
                  size="xs"
                  name="Remember Checkbox"
                  label="Remember"
                  id="RememberCheckbox"
                  className="gap-[0.50rem] text-[1.13rem] font-bold text-gray-900"
                />
                <a href="#">
                  <Heading size="headingmd" as="h2" className="text-[1.13rem] font-bold text-gray-900">
                    Forgot Password
                  </Heading>
                </a>
              </div>
            </div>

            {/* login buttons section */}
            <div className="flex flex-col gap-[1.13rem]">
              <Button
                size="xl"
                shape="round"
                className="self-stretch rounded-[10px] px-[2.13rem] font-bold sm:px-[1.25rem]"
              >
                Log in
              </Button>
              <Button
                color="white_A700"
                size="3xl"
                shape="round"
                leftIcon={
                  <Img
                    src="images/img_arrowdown.svg"
                    alt="Arrow Down"
                    className="mb-[0.25rem] h-[1.25rem] w-[1.25rem]"
                  />
                }
                className="gap-[0.63rem] self-stretch rounded-[10px] border border-solid border-gray-600_02 px-[2.06rem] font-bold text-gray-900 sm:px-[1.25rem]"
              >
                Log in with Google
              </Button>
            </div>
            <div className="h-[0.06rem] bg-blue_gray-100_01" />

            {/* signup prompt section */}
            <div className="flex flex-wrap justify-center gap-[0.50rem] px-[1.63rem] sm:px-[1.25rem]">
              <a href="#">
                <Heading
                  size="headinglg"
                  as="h3"
                  className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-600_02"
                >
                  Don’t have an account?
                </Heading>
              </a>
              <a href="#">
                <Heading
                  size="headinglg"
                  as="h4"
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
