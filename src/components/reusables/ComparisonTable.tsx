"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* cspell:ignore Softaculous */

function cn(...inputs: (string | boolean | undefined)[]) {
  return inputs.filter(Boolean).join(" ");
}

type Billing = "annual" | "tri-annual";

type Plan = {
  id: string;
  name: string;
  annualPrice: string;
  triPrice: string;
  period: string;
  renewal: string;
  description: string;
};

type Row = {
  label: string;
  values: Array<string | boolean>;
  infinite?: boolean;
  mixedInfinite?: boolean[];
  check?: boolean;
  cross?: boolean[];
};

type Section = {
  id: string;
  title: string;
  rows: Row[];
};

const PLANS: Plan[] = [
  {
    id: "single",
    name: "Single Unlimited",
    annualPrice: "रू 1,999",
    triPrice: "रू 1,499",
    period: "/year",
    renewal: "was Rs.4999 /yr",
    description: "Best for bloggers, new to web hosting to host a single site",
  },
  {
    id: "babal",
    name: "Babal Unlimited",
    annualPrice: "रू 3,999",
    triPrice: "रू 2,999",
    period: "/year",
    renewal: "was Rs.7999 /yr",
    description: "Single cPanel, host multiple websites in a single plan",
  },
  {
    id: "professional",
    name: "Professional",
    annualPrice: "रू 999",
    triPrice: "रू 799",
    period: "/mo",
    renewal: "was Rs.1999 /mo",
    description: "Powerful hosting package for high traffic single website",
  },
  {
    id: "best-babal",
    name: "Best Babal",
    annualPrice: "रू 1,200",
    triPrice: "रू 999",
    period: "/year",
    renewal: "was Rs.1999 /yr",
    description: "Powerful hosting package for high traffic single website",
  },
];

const SECTIONS: Section[] = [
  {
    id: "core",
    title: "Core Hosting Resources",
    rows: [
      {
        label: "Websites",
        values: ["1 Website", "No Limit", "1 Website", "No Limit"],
      },
      { label: "SSD Storage", values: ["∞", "∞", "∞", "∞"], infinite: true },
      { label: "Bandwidth", values: ["∞", "∞", "∞", "∞"], infinite: true },
      { label: "RAM", values: ["1 GB", "2 GB", "4 GB", "16 GB"] },
      { label: "IOPS", values: ["1024", "1024", "2048", "2048"] },
      { label: "Entry Process", values: ["20", "30", "30", "30"] },
      { label: "I/O Usage", values: ["10MB/s", "10MB/s", "20MB/s", "10MB/s"] },
    ],
  },
  {
    id: "domain",
    title: "Domain & Website Management",
    rows: [
      { label: "Subdomains", values: ["∞", "∞", "∞", "∞"], infinite: true },
      { label: "Migration", values: [true, true, true, true], check: true },
      {
        label: "Database Limit",
        values: ["3", "∞", "∞", "∞"],
        mixedInfinite: [false, true, true, true],
      },
    ],
  },
  {
    id: "security",
    title: "Security & Reliability",
    rows: [
      {
        label: "SSL Certificate",
        values: [true, true, true, true],
        check: true,
      },
      {
        label: "Uptime Guarantee",
        values: ["99.9%", "99.9%", "99.9%", "99.9%"],
      },
      {
        label: "30-days Incremental Backup",
        values: [true, true, true, true],
        check: true,
      },
    ],
  },
  {
    id: "performance",
    title: "Performance & Technology Stack",
    rows: [
      {
        label: "LiteSpeed Webserver",
        values: [true, true, true, true],
        check: true,
      },
      {
        label: "Softaculous Installer",
        values: [true, true, true, true],
        check: true,
      },
      {
        label: "Python/Node.js Support",
        values: [false, false, true, true],
        check: true,
        cross: [true, true, false, false],
      },
    ],
  },
  {
    id: "support",
    title: "Support & Guarantees",
    rows: [
      {
        label: "Live Chat Support",
        values: [true, true, true, true],
        check: true,
      },
      {
        label: "Money-back Guarantee",
        values: [true, true, true, true],
        check: true,
      },
    ],
  },
];

const CheckIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    className="mx-auto"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="11" fill="#2E4800" />
    <path
      d="M6.5 11.5l3 3 6-6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    className="mx-auto"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="11" fill="#2E4800" opacity="0.7" />
    <path
      d="M7.5 7.5l7 7M14.5 7.5l-7 7"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const InfinityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className="mx-auto text-[#2E4800]"
  >
    <path
      fill="currentColor"
      d="M18.6 6.62C21.58 6.62 24 9 24 12c0 2.96-2.42 5.37-5.4 5.37c-1.45 0-2.8-.56-3.82-1.57L12 13.34l-2.83 2.51c-.97.97-2.33 1.53-3.77 1.53C2.42 17.38 0 14.96 0 12s2.42-5.38 5.4-5.38c1.44 0 2.8.56 3.82 1.58L12 10.66l2.83-2.51c.97-.97 2.33-1.53 3.77-1.53M7.8 14.39L10.5 12L7.84 9.65c-.68-.68-1.53-1.03-2.44-1.03C3.53 8.62 2 10.13 2 12s1.53 3.38 3.4 3.38c.91 0 1.76-.35 2.4-.99m8.4-4.78L13.5 12l2.66 2.35c.68.68 1.54 1.03 2.44 1.03c1.87 0 3.4-1.51 3.4-3.38s-1.53-3.38-3.4-3.38c-.91 0-1.76.35-2.4.99"
    />
  </svg>
);

function CellValue({ row, idx }: { row: Row; idx: number }) {
  const value = row.values[idx];
  let content;

  if (row.infinite) content = <InfinityIcon />;
  else if (row.mixedInfinite?.[idx]) content = <InfinityIcon />;
  else if (row.check) {
    if (row.cross?.[idx]) content = <CrossIcon />;
    else content = value ? <CheckIcon /> : <CrossIcon />;
  } else if (value === "∞") {
    content = <InfinityIcon />;
  } else {
    content = (
      <span className="text-sm font-medium text-slate-800">{value}</span>
    );
  }

  return <div className="flex items-center justify-center">{content}</div>;
}

export default function ComparisonTable() {
  const [billing, setBilling] = useState<Billing>("annual");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [colsVisible, setColsVisible] = useState(1);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    core: true,
    domain: true,
    security: true,
    performance: true,
    support: true,
  });

  useEffect(() => {
    const update = () => {
      let visible = 1;
      if (window.innerWidth >= 1024) visible = 4;
      else if (window.innerWidth >= 640) visible = 2;

      setColsVisible(visible);
      setCurrentIndex((i) => Math.min(i, Math.max(0, PLANS.length - visible)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, PLANS.length - colsVisible);
  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const isSlider = colsVisible < 4;
  const planWidthPct = 100 / PLANS.length;
  const translatePct = currentIndex * planWidthPct;

  const toggle = (id: string) =>
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));

  const labelWidth = isSlider ? "140px" : "240px";

  const SliderTrackStyle = isSlider
    ? {
        transform: `translateX(-${translatePct}%)`,
        transition: "transform 0.35s ease-in-out",
        width: `${(PLANS.length / colsVisible) * 100}%`,
      }
    : undefined;

  return (
    <div className="container bg-white pb-16">
      <div className="mx-auto pb-6">
        <h2 className="mb-1 font-semibold text-slate-900">Compare Plans</h2>
      </div>

      <div className="mx-auto">
        <div className="w-full">
          {/* Main Header Wrapper: Toggle on Left, Plans on Right */}
          <div className="flex w-full mb-6 items-start">
            {/* Left Section: Select Plan Toggle */}
            <div className="shrink-0 pr-4" style={{ width: labelWidth }}>
              <div className="lg:text-[24px] font-medium text-[#2D1551] mb-4">
                Select Plan
              </div>
              <div className="inline-flex flex-col sm:flex-row w-full bg-[#FFF7CD] p-1 rounded-sm">
                {(["annual", "tri-annual"] as Billing[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBilling(option)}
                    className={cn(
                      "flex-1 rounded-sm px-4 py-2 text-sm font-semibold transition-all duration-200",
                      billing === option
                        ? "bg-[#FFD700] text-[#2D1551] shadow-sm"
                        : "bg-transparent text-slate-600 hover:bg-black/3",
                    )}
                  >
                    {option === "annual" ? "Annual" : "Tri-Annual"}
                  </button>
                ))}
              </div>

              {/* Slider Controls (Only visible when mobile/tablet) */}
              {isSlider && (
                <div className="flex gap-2 mt-4 justify-center">
                  <button
                    onClick={prev}
                    disabled={currentIndex === 0}
                    className={cn(
                      "p-2 rounded-full border border-gray-300 transition-all",
                      currentIndex === 0 ? "opacity-20" : "hover:bg-gray-100",
                    )}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={next}
                    disabled={currentIndex >= maxIndex}
                    className={cn(
                      "p-2 rounded-full border border-gray-300 transition-all",
                      currentIndex >= maxIndex
                        ? "opacity-20"
                        : "hover:bg-gray-100",
                    )}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Right Section: Plans Cards */}
            <div className="flex-1 overflow-hidden">
              <div
                className={cn("flex", !isSlider && "gap-4")}
                style={SliderTrackStyle}
              >
                {PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className="flex flex-col px-4 py-6 text-[#1F2937] hover:bg-[#FFF7CD]/20 rounded-lg"
                    style={
                      isSlider
                        ? { width: `${100 / PLANS.length}%`, flexShrink: 0 }
                        : { flex: "1 1 0" }
                    }
                  >
                    <p className="mb-2 lg:text-[28px] font-semibold text-foreground">
                      {plan.name}
                    </p>
                    <div className="mb-1 flex items-baseline font-medium gap-1">
                      <span className="text-2xl">
                        {billing === "annual"
                          ? plan.annualPrice
                          : plan.triPrice}
                      </span>
                      <span className="text-lg font-medium">{plan.period}</span>
                    </div>
                    <div className="mb-3 line-through text-foreground text-sm">
                      {plan.renewal}
                    </div>
                    <p className="mb-6 text-sm leading-relaxed min-h-[40px]">
                      {plan.description}
                    </p>
                    <button
                      type="button"
                      className="w-full rounded-sm bg-[#FFD700] py-3 text-sm font-bold text-[#2D1551] hover:bg-[#FFC700] transition-colors"
                    >
                      Buy Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 my-8" />

          {/* Comparison Sections */}
          <div className="flex flex-col gap-3">
            {SECTIONS.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggle(section.id)}
                  className="flex w-full items-center gap-2 px-5 py-4 text-left bg-foreground text-white rounded-sm lg:rounded-lg hover:opacity-95 transition-opacity"
                >
                  <span className="text-base font-bold">{section.title}</span>
                </button>

                {openSections[section.id] && (
                  <div className="bg-white  border-b border-slate-100 overflow-hidden">
                    {section.rows.map((row, rowIndex) => (
                      <div
                        key={row.label}
                        className={cn(
                          "flex items-stretch border-b border-slate-100",
                          rowIndex === section.rows.length - 1 && "border-b-2",
                        )}
                      >
                        <p
                          className="shrink-0 flex items-center px-5 py-4 font-semibold"
                          style={{ width: labelWidth }}
                        >
                          {row.label}
                        </p>

                        <div className="flex-1 overflow-hidden">
                          <div className="flex" style={SliderTrackStyle}>
                            {PLANS.map((_, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-center px-4 py-4"
                                style={
                                  isSlider
                                    ? {
                                        width: `${100 / PLANS.length}%`,
                                        flexShrink: 0,
                                      }
                                    : { flex: "1 1 0" }
                                }
                              >
                                <CellValue row={row} idx={idx} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
