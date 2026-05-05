import React from "react";
import Image from "next/image";

// 1. Define your data constant for easy maintenance
const REASONS = [
  {
    title: "99.9% Uptime Guarantee",
    description: "We do what we say. Free month if we fail.",
    icon: "/images/WhyChooseUs/SVG.svg",
  },
  {
    title: "Unlimited SSD & Bandwidth",
    description: "No limit on storage or bandwidth, focus on your website.",
    icon: "/images/WhyChooseUs/SVG (1).svg",
  },
  {
    title: "Money back guarantee",
    description:
      "Try our web hosting plans risk free with 30-day money back guarantee.",
    icon: "/images/WhyChooseUs/SVG (2).svg",
  },
  {
    title: "Free SSL Certificate",
    description:
      "Free SSL certificate as standard on all our web hosting plans.",
    icon: "/images/WhyChooseUs/SVG (3).svg",
  },
  {
    title: "Off-site backup",
    description:
      "All data retained for 30 days with incremental backup. Be worry free.",
    icon: "/images/WhyChooseUs/SVG (4).svg",
  },
  {
    title: "Imunify360 Security",
    description: "Centralized real-time intrusion detection, malware scanning.",
    icon: "/images/WhyChooseUs/SVG (5).svg",
  },
  {
    title: "Support 24x7x365",
    description: "Get expert support whenever you need it.",
    icon: "/images/WhyChooseUs/SVG (6).svg",
  },
  {
    title: "Free WHM & cPanel",
    description:
      "Manage your website effortlessly with cPanel as standard on all web hosting plans.",
    icon: "/images/WhyChooseUs/SVG (7).svg",
    badge: "Control Panel",
  },
  {
    title: "WordPress Optimized",
    description: "All our web hosting plans are optimized for WordPress.",
    icon: "/images/WhyChooseUs/SVG (8).svg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="pattern-secondary-bg py-12 xl:py-16">
      <div className="container">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 xl:mb-16">
          <h2 className="mb-4">Why Choose Babal Host?</h2>
          <p className="text-foreground/80">
            SLA as standard on all plans - if uptime falls below 99.9% in a
            certain month, we&apos;ll give you a free month of service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 lg:p-12 rounded-lg shadow-sm flex flex-col items-start relative group hover:shadow-md transition-shadow duration-300"
            >
              {/* Badge for specific items */}
              {item.badge && (
                <span className="absolute top-4 right-4 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded-full uppercase font-bold">
                  {item.badge}
                </span>
              )}

              {/* Icon Container */}
              <div className="mb-6 relative w-12 h-12">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="font-medium text-[20px] leading-tight mb-3">
                {item.title}
              </h3>
              <p className="font-normal text-[16px] leading-[28px] text-foreground/70 antialiased">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
