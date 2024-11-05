import Image from "next/image";
import React from "react";
import MYImage from '@/app/public/images/img.jpeg'

function Hero() {
  return (
    <div className="h-screen mt-32 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-4 lg:px-20">
        <div className="font-[Libre Bodoni] text-[37.84px] font-bold leading-[62.24px] tracking-[0.025em] text-left">
          <h1>IMPECCABLE</h1>
          <h1>CRAFTSMANSHIP AND</h1>
          <h1>FINESSE</h1>
        </div>
        <p className="text-[#787054] text-[16px] sm:text-[18px] lg:text-[24px] mt-4 lg:mt-6 leading-relaxed xl:text-[30px] font-[Libre Bodoni]">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <button className="font-[Libre Bodoni] bg-[#A29875] px-8 sm:px-10 py-2 text-[#FFFFFF] rounded mt-6 lg:mt-8 transition duration-300 ease-in-out hover:bg-[#787054] xl:text-[30px] xl:w-[288px] xl:h-[58px] xl:rounded-md xl:mt-16">
          Explore Now
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="w-[380.1px] md:w-[400px] lg:w-[462px] h-auto mt-10 lg:mt-0 lg:ml-16 ">
        <Image
          src={MYImage}
          alt="image"
          width={380.1}
          height={525.43}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Hero;