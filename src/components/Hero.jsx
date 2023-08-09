import React from "react";
import Container from "./Container";
import Title from "./Title";
import playstore from "@/images/playstore.png";
import Image from "next/image";
import Button from "./Button";
import { BsPlayCircle } from "react-icons/bs";
import ExtraLogos from "./ExtraLogos";


const Hero = () => {
  return (
    <section
      id="Home"
      className="py-20 overflow-hidden sm:py-32 lg:pb-32 xl:pb-3"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Right section */}
          <div className="relative z-10 max-w-2xl mx-auto lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <Title title="Invest at the perfect time" className="text-4xl" />
            <p className="mt-6 text-lg text-gray-600">
              By leveraging insights from our network of industry insiders, you
              will know exactly when to buy to maximize profit, and exactly when
              to sell to avoid painful losses.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8 gap-x-6">
              <Image
                src={playstore}
                alt="playstore apple image"
                className="w-32 h-auto"
              />
              <Button variant="outline" href="https://youtu.be/vviFia-Stqk">
                <BsPlayCircle className="text-xl" />
                <span className="ml-2.5">Watch the video</span>
              </Button>
            </div>
          </div>
          {/* Left Side */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
           
          </div>
          <ExtraLogos />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
