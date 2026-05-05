import Image from "next/image";

const LOAD_BALANCING_DATA = {
  title: "Cloud Load Balancing",
  description:
    "We make use of top cloud providers and optimize it to provide the best web hosting platform in Nepal that'll perform best for you. Your web hosting will evolve with you.",
  imageSrc: "/loadBalancing.svg",
  steps: [
    { num: "1", label: "Users" },
    { num: "2", label: "Load Balancing" },
    { num: "3", label: "Cloud Servers" },
  ],
};

const LoadBalancing = () => {
  const { title, description, imageSrc, steps } = LOAD_BALANCING_DATA;

  return (
    <section className="bg-white py-10 lg:py-24 overflow-hidden">
      <div className="container flex flex-col">
        {/* Header Section */}
        <div className="max-w-[800px]">
          <h2 className="lg:text-5xl font-bold mb-4 text-slate-900">{title}</h2>
          <p className="font-figtree font-normal text-sm md:text-lg lg:text-xl leading-relaxed text-slate-600">
            {description}
          </p>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-[200px] md:h-[250px] lg:h-[400px] xl:h-[500px]">
          <Image
            src={imageSrc}
            alt={`${title} Diagram`}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Dynamic Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full mx-auto lg:gap-40">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex items-center justify-start md:justify-center gap-3 p-4"
            >
              <span className="text-[#84A841]/60 font-bold text-lg">
                [{step.num}]
              </span>
              <span className="uppercase tracking-widest text-sm font-semibold text-[#84A841] text-left">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoadBalancing;
