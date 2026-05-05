import React from "react";
import Image from "next/image";

const LoadBalancing = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container">
        {/* Top Content Area */}
        <div className="max-w-[800px] mb-12 lg:mb-20">
          <h2 className="mb-6">Cloud Load Balancing</h2>
          <p className="font-figtree font-normal text-[18px] xl:text-[20px] leading-[28px] text-foreground/70">
            We make use of top cloud providers and optimize it to provide the
            best web hosting platform in Nepal that&apos;ll perform best for
            you. Your web hosting will evolve with you.
          </p>
        </div>

        {/* SVG Illustration Container */}
        <div className="relative w-full aspect-[21/9] min-h-[300px] lg:min-h-[450px]">
          <Image
            src="/loadBalancing.svg"
            alt="Cloud Load Balancing Diagram"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Optional: Mobile Legend (If the SVG text gets too small on phones) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100 lg:hidden">
          <div className="flex items-center gap-3">
            <span className="font-bold text-primary">[1]</span>
            <span className="font-figtree font-semibold text-foreground/80">
              Users
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-primary">[2]</span>
            <span className="font-figtree font-semibold text-foreground/80">
              Load Balancing
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-primary">[3]</span>
            <span className="font-figtree font-semibold text-foreground/80">
              Cloud Servers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadBalancing;
