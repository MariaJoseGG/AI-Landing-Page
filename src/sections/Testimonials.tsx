import { testimonials } from "@/constants/testimonials";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Beyond expectations.
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center pt-5 tracking-tight max-w-sm mx-auto">
          Our revolutionary AI SEO tools have transformed our clients&apos; strategies.
        </p>

        <div className="overflow-hidden pt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-5">
            {testimonials.map(testimonial => (
              <div key={testimonial.name} className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none">
                <div className="text-lg md:text-2xl tracking-tight">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 pt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="size-11 rounded-lg grayscale"
                    />
                  </div>
                  <div>
                    <div>
                      {testimonial.name}
                    </div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
