import React from "react";
import Link from "next/link";

const Banner = () => {
  const features = [
    "Locally owned and operated",
    "Makes use of top-rated cloud infrastructure",
    "99.9% uptime guarantee",
    "30-day money back policy",
    "Unlimited SSD and bandwidth",
    "Reliable and fast servers",
    "User-friendly control panel",
    "24/7 customer support",
    "Domain name registration services in Nepal",
    "Inclusive email hosting",
  ];

  return (
    <section className="bg-[#F9F7FD] py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Column: Main Content */}
        <div className="space-y-6">
          <h2 className="text-[38px] font-semibold leading-[110%] tracking-[-0.01em]">
            Empower your website with the Best Web Hosting in Nepal: Babal.Host
          </h2>

          <p className="text-xl font-semibold text-[#15212A] max-w-xl leading-7">
            Join the Babal.Host family and experience unmatched Web Hosting in
            Nepal
          </p>

          <p className="font-normal lg:text-xl leading-7 text-[#1D2A3B] text-justify align-middle">
            As a locally owned and operated web hosting company, we understand
            the unique needs of businesses and individuals in Nepal. That&apos;s
            why we offer a range of hosting plans to suit your needs and budget,
            including unlimited cloud hosting, WordPress hosting, Python
            hosting, reseller hosting, Node.js hosting, and dedicated hosting.
            Our plans come with a 99.9% uptime guarantee, unlimited SSD and
            bandwidth, a 30-day money back guarantee, a free SSL certificate,
            email hosting, and more. We also offer Imunify360 security to
            protect your website from threats and provide centralized real-time
            intrusion detection and malware scanning. Our support team is
            available 24x7x365 to assist you with any issues or questions you
            may have. Plus, we offer domain name registration services in Nepal
            to help you get your website up and running quickly and easily.
          </p>
        </div>

        {/* Right Column: Features List */}
        <div className="p-8 text-[#1D2A3B]">
          <h3 className="text-xl font-medium mb-6">Why Choose Babal.Host?</h3>

          <ul className="space-y-0.5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="">•</span>
                <span className="text-base md:text-xl font-regular">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="text-lg md:text-xl font-regular max-w-125 leading-7">
              To learn more about our hosting plans and features,{" "}
              <Link
                href="#"
                className="text-blue-600 hover:underline font-bold"
              >
                click here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
