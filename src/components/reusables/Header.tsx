import { babalInfo } from "@/constants";
import { Icon } from "@iconify/react";
import { FlexRow } from "../common/Layouts";

export default function Header() {
  const { socials, announcement, phone } = babalInfo;

  return (
    <section className="hidden sm:flex justify-between text-sm items-center py-2 text-white bg-primary-gradient">
      <FlexRow className="container container-py-none justify-between text-sm items-center gap-8 w-full">
        {/* Social Icons Loop */}
        <FlexRow className="flex gap-4 items-center">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="hover:opacity-80 transition-opacity"
            >
              <Icon icon={social.icon} className="size-5" />
            </a>
          ))}
        </FlexRow>

        {/* Dynamic Announcement Text */}
        <p className="hidden lg:block text-sm">
          {announcement.text}{" "}
          <a
            href={announcement.ctaLink}
            className="text-[#FFDD1C] hover:underline gap-1 pl-2 items-center w-fit inline-flex font-semibold"
          >
            {announcement.ctaText}{" "}
            <Icon icon={"flowbite:arrow-right-outline"} className="size-5" />
          </a>
        </p>

        {/* Dynamic Phone Contact */}
        <a
          href={`tel:${phone}`}
          className="flex gap-2 items-center hover:opacity-80 transition-opacity"
        >
          <Icon icon={"mdi:phone"} className="size-5" />
          {phone}
        </a>
      </FlexRow>
    </section>
  );
}
