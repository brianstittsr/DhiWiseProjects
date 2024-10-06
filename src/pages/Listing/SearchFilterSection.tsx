import { Img, ChipView, Button, SelectBox, Input, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close.tsx";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SearchFilterSection() {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `Bathrooms 2+` },
    { value: 2, label: `Square Feet 750 - 2000 sq. ft` },
    { value: 3, label: `Year Built 5 - 15` },
    { value: 4, label: `For Sale By Agent` },
    { value: 5, label: `New Construction` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState<number[]>([]);
  const [searchBarValue16, setSearchBarValue16] = React.useState("");

  return (
    <>
      {/* search filter section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-[1.13rem] md:px-[1.25rem]">
          <Heading
            size="heading4xl"
            as="h1"
            className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
          >
            Find Property
          </Heading>
          <div className="flex flex-col gap-[0.75rem] self-stretch">
            <div className="flex justify-center gap-[1.25rem] md:flex-col">
              <Input
                shape="round"
                name="Address Search"
                placeholder={`Enter your address`}
                value={searchBarValue16}
                onChange={(e) => setSearchBarValue16(e.target.value)}
                suffix={
                  searchBarValue16?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue16("")} height={24} width={24} fillColor="#626262ff" />
                  ) : (
                    <Img
                      src="images/img_rewind_gray_700.svg"
                      alt="Rewind"
                      className="mb-[0.13rem] h-[1.50rem] w-[1.50rem]"
                    />
                  )
                }
                className="w-[36%] gap-[2.13rem] rounded-[10px] border border-solid border-blue_gray-100_01 pl-[1.00rem] pr-[1.63rem] !text-gray-700 md:w-full sm:pr-[1.25rem]"
              />
              <SelectBox
                shape="round"
                indicator={
                  <Img src="images/img_arrowdown_gray_700.svg" alt="Arrow Down" className="h-[1.50rem] w-[1.50rem]" />
                }
                name="Buy Dropdown"
                placeholder={`Buy`}
                options={dropDownOptions}
                className="w-[8%] rounded-[10px] border border-solid border-blue_gray-100_01 font-bold md:w-full"
              />
              <SelectBox
                shape="round"
                indicator={
                  <Img src="images/img_arrowdown_gray_700.svg" alt="Arrow Down" className="h-[1.50rem] w-[1.50rem]" />
                }
                name="Price Range"
                placeholder={`\\$15000 - \\$18000`}
                options={dropDownOptions}
                className="w-[18%] rounded-[10px] border border-solid border-blue_gray-100_01 font-bold md:w-full"
              />
              <SelectBox
                shape="round"
                indicator={
                  <Img src="images/img_arrowdown_gray_700.svg" alt="Arrow Down" className="h-[1.50rem] w-[1.50rem]" />
                }
                name="Bedrooms Filter"
                placeholder={`Bed - 3`}
                options={dropDownOptions}
                className="flex-grow rounded-[10px] border border-solid border-blue_gray-100_01 font-bold"
              />
              <Button
                color="white_A700"
                size="3xl"
                shape="round"
                rightIcon={<Img src="images/img_plus.svg" alt="Plus" className="h-[1.50rem] w-[1.50rem]" />}
                className="min-w-[7.00rem] gap-[0.75rem] rounded-[10px] border border-solid border-blue_gray-100_01 px-[0.94rem] font-bold text-gray-700"
              >
                More
              </Button>
              <Button
                size="3xl"
                shape="round"
                rightIcon={
                  <Img
                    src="images/img_rewind_white_a700.svg"
                    alt="Rewind"
                    className="mb-[0.13rem] h-[1.25rem] w-[1.25rem]"
                  />
                }
                className="flex-1 gap-[0.63rem] rounded-[10px] px-[1.00rem] font-bold md:self-stretch"
              >
                Search
              </Button>
            </div>
            <ChipView
              options={chipOptions}
              setOptions={setChipOptions}
              values={selectedChipOptions}
              setValues={setSelectedChipOptions}
              className="flex flex-wrap gap-[0.63rem]"
            >
              {(option) => (
                <React.Fragment key={option.index}>
                  {option.isSelected ? (
                    <div
                      onClick={option.toggle}
                      className="flex h-[2.25rem] min-w-[9.00rem] cursor-pointer flex-row items-center justify-center gap-[0.50rem] whitespace-pre-wrap rounded-[10px] border border-solid border-blue_gray-100 bg-gray-700_33 px-[0.88rem] text-center text-[0.88rem] font-semibold text-gray-700"
                    >
                      <span>{option.label}</span>
                      <Img
                        src="images/img_close.svg"
                        alt="Close"
                        onClick={option.delete}
                        tabIndex="0"
                        className="h-[1.00rem] w-[1.00rem] cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div
                      onClick={option.toggle}
                      className="flex h-[2.25rem] min-w-[9.00rem] cursor-pointer flex-row items-center justify-center gap-[0.50rem] rounded-[10px] border border-solid border-blue_gray-100 px-[0.88rem] text-center text-[0.88rem] font-semibold text-gray-700"
                    >
                      <span>{option.label}</span>
                      <Img
                        src="images/img_close.svg"
                        alt="Close"
                        onClick={option.delete}
                        tabIndex="0"
                        className="h-[1.00rem] w-[1.00rem] cursor-pointer"
                      />
                    </div>
                  )}
                </React.Fragment>
              )}
            </ChipView>
          </div>
        </div>
      </div>
    </>
  );
}
