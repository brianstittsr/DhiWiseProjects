import { Button, Img, Heading, Slider } from "../../components";
import React from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";

export default function TestimonialsSlider() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <>
      {/* testimonials slider section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[1.50rem] px-[3.50rem] md:px-[1.25rem]">
          <div className="mx-auto flex w-[92%] md:w-full md:flex-col">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ "0": { items: 1 }, "551": { items: 1 }, "1051": { items: 2 } }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e: EventObject) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              items={[...Array(6)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Img
                    src="images/img_rectangle_5591.png"
                    alt="Slider Image"
                    className="h-[21.50rem] rounded-lg object-contain md:w-full"
                  />
                </React.Fragment>
              ))}
            />
          </div>
          <div className="flex gap-[16.94rem]">
            <Button
              size="xs"
              shape="square"
              onClick={() => {
                sliderRef?.current?.slidePrev();
              }}
              className="w-[6.88rem] px-[0.13rem]"
            >
              <Img src="images/img_arrow.svg" />
            </Button>
            <Button
              size="xs"
              shape="square"
              onClick={() => {
                sliderRef?.current?.slideNext();
              }}
              className="w-[4.63rem] px-[0.13rem]"
            >
              <Img src="images/img_arrow_orange_a700.svg" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
