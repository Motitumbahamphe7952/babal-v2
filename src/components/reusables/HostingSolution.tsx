import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

// 1. Data Constant - Easy to add/remove hosting types
const HOSTING_SERVICES = [
  {
    title: "Unlimited Cloud Hosting",
    subtitle: "Cloud-based. Starting at",
    price: "1,999",
    period: "/year",
    icon: "/images/HostingPlans/SVG.svg",
  },
  {
    title: "WordPress Hosting",
    subtitle: "WordPress Optimized. Starting at",
    price: "2,499",
    period: "/year",
    icon: "/images/HostingPlans/SVG (1).svg",
    badge: "Popular",
  },
  {
    title: "Python Hosting",
    subtitle: "Built for Python. Starting at",
    price: "2,499",
    period: "/year",
    icon: "/images/HostingPlans/python 2.svg",
  },
  {
    title: "Reseller Hosting",
    subtitle: "Europe based. Starting at",
    price: "799",
    period: "/month",
    icon: "/images/HostingPlans/SVG (2).svg",
  },
  {
    title: "Node.js Hosting",
    subtitle: "Built for Node.js. Starting at",
    price: "2,499",
    period: "/year",
    icon: "/images/HostingPlans/SVG (3).svg",
  },
  {
    title: "Cloud Server",
    subtitle: "On top of cloud",
    price: "10,310",
    period: "/month",
    icon: "/images/HostingPlans/SVG (4).svg",
  },
];

const HostingSolutions = () => {
  return (
    <section className="bg-white py-12 xl:py-16">
      <div className="container">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">Built By Experts For Experts</h2>
          <p className="text-foreground/70 font-light lg:font-[20px] leading-relaxed">
            Get fast, secure, and affordable solutions to launch & grow your
            business digitally.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
          {HOSTING_SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 lg:p-12 rounded-lg border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col relative"
            >
              {/* Optional "Popular" Badge */}
              {service.badge && (
                <span className="absolute top-6 right-6 bg-[#4CAF50] text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  {service.badge}
                </span>
              )}

              {/* Icon */}
              <div className="mb-6 relative w-14 h-14">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <h3 className="font-medium text-[20px] leading-tight py-2">
                {service.title}
              </h3>
              <p className="font-normal text-[16px] leading-[28px] text-foreground/70 antialiased">
                {service.subtitle}
              </p>

              {/* Price Section */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[18px] font-regular">रु</span>
                <span className="text-[28px] font-regular">
                  {service.price}
                </span>
                <span className="text-[14px] text-foreground font-regular">
                  {service.period}
                </span>
              </div>

              {/* CTA Button */}
              <button className="mt-auto w-fit bg-primary font-bold py-2 px-4 rounded-md flex items-center gap-2 transition-colors cursor-pointer group/btn">
                All plans
                <MoveRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingSolutions;
