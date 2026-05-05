import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const HOSTING_SERVICES = [
  {
    title: "Knowledgebase",
    subtitle: "Check out our knowledge base to get more info.",
    buttonText: "Learn More",
    icon: "/images/Contact/SVG.svg",
  },
  {
    title: "Live Chat",
    subtitle: "Have a question? Let's discuss.",
    buttonText: "Chat Now",
    icon: "/images/Contact/SVG1.svg",
  },
  {
    title: "Phone Now",
    subtitle: "If there's anything you want to talk about, give us a call",
    buttonText: "Call Now",
    icon: "/images/Contact/SVG2.svg",
  },
  {
    title: "Send Ticket",
    subtitle: "Encountered any issues? Send us a ticket.",
    buttonText: "Learn More",
    icon: "/images/Contact/SVG3.svg",
  },
  {
    title: "Client Area",
    subtitle: "Access your client area.",
    buttonText: "Client Area",
    icon: "/images/Contact/SVG4.svg",
  },
  {
    title: "Non-standard contact requests",
    subtitle: "Submit non-standard, handled with fairness and accountability.",
    buttonText: "Chat Now",
    icon: "/images/Contact/SVG5.svg",
  },
];

const Experts = () => {
  return (
    <section className="pattern-white-bg py-12 xl:py-16">
      <div className="container">
        {/* Header Section */}
        <div className=" max-w-2xl mb-8 lg:mb-16">
          <h2 className="mb-4">
            Talk to Real Experts,
            <br /> Anytime
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
          {HOSTING_SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 lg:p-12 rounded-lg border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full relative"
            >
              {/* Icon */}
              <div className="mb-6 relative w-14 h-14 flex-shrink-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex-grow">
                <h3 className="font-medium text-[20px] leading-tight py-2">
                  {service.title}
                </h3>
                <p className="font-normal text-[16px] leading-[28px] text-foreground/70 antialiased">
                  {service.subtitle}
                </p>
              </div>

              {/* CTA Button - mt-auto pushes this to the bottom */}
              <div className="mt-4">
                <button className="w-fit bg-primary font-bold py-2 px-6 rounded-md flex items-center gap-2 transition-colors cursor-pointer group/btn">
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
