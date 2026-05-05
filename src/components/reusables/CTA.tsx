import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const DARK_SECTION_DATA = {
  title: "Why choose Babal Host?",
  description:
    "We believe the best technology is only as effective as the team behind it. That's why we provide expert support and so much more.",
  button: {
    label: "Contact Us",
    link: "/contact",
  },
  dashboardImg: "/images/CTA/CTA.png",
  comparison: {
    label: "Your website is now",
    headline: "10x faster",
    stats: [
      {
        name: "babal.host",
        value: "0.7s",
        percentage: 20,
        color: "bg-emerald-500",
      },
      {
        name: "Other Host",
        value: "7.4s",
        percentage: 80,
        color: "bg-rose-500",
        labelColor: "text-gray-400",
      },
    ],
  },
};

const CTA = () => {
  const { title, description, button, dashboardImg } = DARK_SECTION_DATA;

  return (
    <section className="pattern-primary-bg overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-end">
        {/* Left Content — 40% */}
        <div className="max-w-[540px] py-12 lg:py-16">
          <h2 className="text-white mb-6">{title}</h2>
          <p className="font-figtree font-normal text-[18px] xl:text-[20px] leading-[28px] text-white/80 mb-8">
            {description}
          </p>
          <button className="group bg-primary text-foreground px-6 py-3 rounded-md font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer">
            {button.label}
            <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right Visuals — 60% */}
        <div className="relative w-full hidden lg:block">
          <Image
            src={dashboardImg}
            alt="Dashboard Preview"
            width={900}
            height={600}
            className="w-full h-auto object-contain object-bottom origin-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
