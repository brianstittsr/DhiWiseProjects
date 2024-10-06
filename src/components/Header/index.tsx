import MegaMenu1 from "../MegaMenu1";
import { Button, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);

  return (
    <header {...props} className={`${props.className} flex justify-center items-center py-[1.13rem] bg-white-a700`}>
      <div className="container-xs flex items-center justify-between gap-[1.25rem] md:flex-col md:px-[1.25rem]">
        <Img src="images/img_header_logo.png" alt="Header Logo" className="h-[2.50rem] w-[8.00rem] object-contain" />
        <ul className="!mb-[0.38rem] flex gap-[2.63rem] self-end md:self-auto sm:flex-col">
          <li
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
          >
            <div className="flex cursor-pointer items-center gap-[0.38rem]">
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                Home
              </Heading>
              <Img src="images/img_arrow_down_gray_600_02.svg" alt="Home Arrow" className="h-[1.00rem] w-[1.00rem]" />
            </div>
            {menuOpen ? <MegaMenu1 /> : null}
          </li>
          <li
            onMouseLeave={() => {
              setMenuOpen1(false);
            }}
            onMouseEnter={() => {
              setMenuOpen1(true);
            }}
          >
            <div className="flex cursor-pointer items-center gap-[0.38rem]">
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                Listing
              </Heading>
              <Img
                src="images/img_arrow_down_gray_600_02.svg"
                alt="Listing Arrow"
                className="h-[1.00rem] w-[1.00rem]"
              />
            </div>
            {menuOpen1 ? <MegaMenu1 /> : null}
          </li>
          <li
            onMouseLeave={() => {
              setMenuOpen2(false);
            }}
            onMouseEnter={() => {
              setMenuOpen2(true);
            }}
          >
            <div className="flex cursor-pointer items-center gap-[0.38rem]">
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                Agents
              </Heading>
              <Img src="images/img_arrow_down_gray_600_02.svg" alt="Agents Arrow" className="h-[1.00rem] w-[1.00rem]" />
            </div>
            {menuOpen2 ? <MegaMenu1 /> : null}
          </li>
          <li>
            <a href="#">
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                Property{" "}
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
                Blog
              </Heading>
            </a>
          </li>
        </ul>
        <div className="flex w-[18%] items-center justify-between gap-[1.25rem] md:w-full">
          <div className="flex gap-[0.50rem]">
            <a href="#">
              <Img src="images/img_rewind.svg" alt="Search Icon" className="h-[1.50rem] w-[1.50rem]" />
            </a>
            <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-900">
              Search
            </Heading>
          </div>
          <Button
            size="md"
            shape="round"
            className="min-w-[5.88rem] rounded-[10px] px-[1.50rem] font-semibold sm:px-[1.25rem]"
          >
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}
