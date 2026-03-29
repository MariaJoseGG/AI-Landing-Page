"use client";

import { tabs } from "@/constants/featureTabs";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center pt-5">
          From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.
        </p>

        <div className="pt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map(tab => (
            <div
              key={tab.title}
              className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1"
            >
              <div className="size-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer src={tab.icon} className="size-5" autoplay />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="text-sm rounded-full px-2 py-0.5 bg-[#8C44FF] text-black font-semibold">
                  new
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`
            }}></div>
        </div>
      </div>
    </section>
  );
};