import { Img } from "../../components";
import React from "react";

export default function HeroBanner() {
  return (
    <>
      {/* hero banner section */}
      <div>
        <Img src="images/img_cover_image.png" alt="Coverimage" className="h-[15.63rem] w-full object-cover md:h-auto" />
      </div>
    </>
  );
}
