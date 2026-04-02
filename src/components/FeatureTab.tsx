import { tabs } from "@/constants/featureTabs";
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import { animate, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";
import { ComponentPropsWithoutRef, FC, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Props extends ComponentPropsWithoutRef<"div"> {
  tab: typeof tabs[number];
  selected: boolean;
};

export const FeatureTab: FC<Props> = ({ tab, selected, ...rest }) => {
  const tabRef = useRef<HTMLDivElement>(null);

  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !selected) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop"
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [selected]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  }

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative cursor-pointer"
      {...rest}
    >
      {selected && (
        <motion.div
          style={{ maskImage }}
          className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"></motion.div>
      )}

      <div className="size-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer ref={dotLottieRef} src={tab.icon} className="size-5" autoplay />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-sm rounded-full px-2 py-0.5 bg-[#8C44FF] text-black font-semibold">
          new
        </div>
      )}
    </div>
  )
};