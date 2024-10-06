import { Heading, Button, Img, CheckBox, Input } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function CreateAccount({ isOpen, ...props }: Props) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")!}
      isOpen={isOpen}
      className="min-w-[75.13rem]"
    >
      {/* account creation form section */}
      <div className="container-xs flex min-w-[75.13rem] justify-center px-[3.50rem] md:px-[1.25rem]">
        {/* login section */}
        <div className="flex w-[62%] flex-col gap-[1.75rem] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 px-[1.88rem] py-[2.25rem] md:w-full sm:p-[1.25rem]">
          <div className="flex flex-col gap-[0.88rem]">
            {/* user credentials input section */}
            <div className="flex flex-col gap-[1.50rem]">
              {/* account creation header section */}
              <div className="flex items-center justify-between gap-[1.25rem]">
                <a href="#" className="md:text-[2.13rem] sm:text-[2.00rem]">
                  <Heading
                    size="heading4xl"
                    as="h1"
                    className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900"
                  >
                    Create Account
                  </Heading>
                </a>
                <Img src="images/img_close_gray_900.svg" alt="Close Image" className="h-[1.88rem] w-[1.88rem]" />
              </div>

              {/* password input section */}
              <div className="flex gap-[1.25rem] md:flex-col">
                <div className="flex w-full flex-col gap-[1.25rem]">
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

                {/* email input section */}
                <div className="flex w-full flex-col gap-[1.25rem]">
                  <Input
                    shape="round"
                    type="email"
                    name="Repeat Email Input"
                    placeholder={`user / email address`}
                    prefix={
                      <Img src="images/img_lock_gray_600_02.svg" alt="Lock" className="h-[1.50rem] w-[1.50rem]" />
                    }
                    className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 pl-[1.00rem] pr-[2.13rem] sm:pr-[1.25rem]"
                  />
                  <Input
                    shape="round"
                    type="password"
                    name="Repeat Password Input"
                    placeholder={`Password`}
                    prefix={<Img src="images/img_profile.svg" alt="Profile" className="h-[1.50rem] w-[1.50rem]" />}
                    suffix={<Img src="images/img_airplane.svg" alt="Airplane" className="h-[1.50rem] w-[1.50rem]" />}
                    className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 px-[1.00rem]"
                  />
                </div>
              </div>
            </div>
            <CheckBox
              size="xs"
              name="Terms Checkbox"
              label="I agree to all Terms & Conditions"
              id="TermsCheckbox"
              className="gap-[0.50rem] text-[1.13rem] font-bold text-gray-600_02"
            />
          </div>

          {/* account creation buttons section */}
          <div className="flex flex-col gap-[1.13rem]">
            <Button
              size="xl"
              shape="round"
              className="self-stretch rounded-[10px] px-[2.13rem] font-bold sm:px-[1.25rem]"
            >
              Create Account
            </Button>
            <Button
              color="white_A700"
              size="3xl"
              shape="round"
              leftIcon={
                <Img src="images/img_arrowdown.svg" alt="Arrow Down" className="mb-[0.25rem] h-[1.25rem] w-[1.25rem]" />
              }
              className="gap-[0.63rem] self-stretch rounded-[10px] border border-solid border-gray-600_02 px-[2.06rem] font-bold text-gray-900 sm:px-[1.25rem]"
            >
              Create Account with Google
            </Button>
          </div>
          <div className="h-[0.06rem] bg-blue_gray-100_01" />

          {/* login prompt section */}
          <div className="flex flex-wrap items-center justify-center gap-[0.50rem] px-[3.50rem] md:px-[1.25rem]">
            <a href="#">
              <Heading
                size="headinglg"
                as="h2"
                className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-600_02"
              >
                Have an account?
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
    </ModalProvider>
  );
}
