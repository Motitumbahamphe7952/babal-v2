import { footerContent } from "@/constants/reusables";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden font-sans pattern-primary-bg relative mt-15 md:p-6">
      {/* Blue Call-to-Action Section */}
      <div className="text-white py-6 pb-8 lg:pb-12 px-4 text-center space-y-6">
        <p className="text-2xl">{footerContent.stats[0].label}</p>
        <p className="text-4xl font-bold">{footerContent.stats[0].value}</p>
        <p className="text-4xl font-bold">{footerContent.stats[1].value}</p>
        <p className="mb-8 opacity-90 text-base">{footerContent.ctaText}</p>
        <button className="bg-white text-foreground px-6 py-3 rounded-md font-semibold flex items-center cursor-pointer justify-center gap-2 mx-auto transition-all duration-500 hover:scale-103 hover:bg-gray-100">
          <Image
            src="/images/footer/chat.svg"
            alt="Chat icon"
            width={18}
            height={18}
            priority
          />
          Talk to an expert
        </button>
      </div>

      {/* Main White Footer Section */}
      <div className="container bg-white text-[#1a1a1a] pt-8 lg:pt-16 pb-8 sm:px-6 md:px-20 rounded-lg relative overflow-hidden">
        <div className="absolute hidden sm:block sm:bottom-50 md:bottom-10 2xl:bottom-8 select-none pointer-events-none left-1/2 -translate-x-1/2">
          <Image
            src="/footerlogo.svg"
            alt="Babal Host Logo"
            width={1400}
            height={700}
            className="w-full scale-[140%] lg:scale-[120%]"
          />
        </div>

        {/* <div className="absolute sm:hidden block -right-[6%] scale-120 top-1/2 -translate-y-1/2   select-none pointer-events-none ">
          <Image
            src={"footerlogo.svg"}
            alt="Babal Host Logo"
            width={400}
            height={400}
            className=" w-[75%]"
          />
        </div> */}

        <div className="mx-auto relative z-10">
          {/* Logo */}
          {/* <div className="mb-10">
            <Link href="/">
              <Image
                src="/animated-logo.svg"
                alt="Babal Host Logo"
                width={400}
                height={400}
                className="w-37"
              />
            </Link>
          </div> */}

          {/* 4-Column Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mb-6 sm:mb-20">
            {footerContent.columns.map((column, index) => (
              <FooterColumn key={index} title={column.title}>
                {column.links?.map(
                  (
                    link: { label: string; href: string },
                    linkIndex: number,
                  ) => (
                    <FooterLink key={linkIndex} href={link.href}>
                      {link.label}
                    </FooterLink>
                  ),
                )}
              </FooterColumn>
            ))}

            {/* Contact Column */}
            <FooterColumn title="Contact">
              <a
                href={`tel:${footerContent.contact.phone}`}
                className="text-gray-600 hover:text-gray-700 cursor-pointer text-lg"
              >
                {footerContent.contact.phone}
              </a>

              <div className="mt-2 space-y-2">
                <p className="font-semibold text-[#1a1a1a]">General Inquiry</p>
                <a
                  href={`mailto:${footerContent.contact.inquiryEmail}`}
                  className="text-gray-600 hover:text-gray-700 cursor-pointer"
                >
                  {footerContent.contact.inquiryEmail}
                </a>
              </div>

              <div className="mt-2 space-y-2">
                <p className="font-semibold text-[#1a1a1a] max-w-[50%] sm:max-w-full">
                  ©2026 Babal.Host - All rights reserved
                </p>
                <p className="text-gray-600 text-[16px] mt-1 max-w-50 leading-6">
                  Where applicable, VAT will be added to our prices for hosting
                  plans at your countries local rate
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-3">
                {footerContent.socials.map((social, index) => (
                  <SocialIcon
                    key={index}
                    iconName={social.iconName}
                    href={social.href}
                  />
                ))}
              </div>
            </FooterColumn>
          </div>

          {/* Payment Gateway Logos */}
          <div className="flex flex-wrap items-center gap-6 pt-2 lg:pt-4">
            {footerContent.paymentLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain h-8 lg:h-10 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1 sm:gap-3">
    <h3 className="font-bold text-foreground text-xl mb-1">{title}</h3>
    <div className="flex flex-col gap-2 text-lg">{children}</div>
  </div>
);

const FooterLink = ({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) => (
  <a href={href} className="text-gray-600 hover:text-gray-900 transition-colors">
    {children}
  </a>
);

const SocialIcon = ({
  iconName,
  href = "#",
}: {
  iconName: string;
  href?: string;
}) => (
  <Link
    href={href}
    className="size-8 flex justify-center items-center rounded-full bg-[#1a1a1a] text-white transition-transform hover:scale-110"
    target="_blank"
  >
    <Icon icon={iconName} width={24} height={24} />
  </Link>
);

export default Footer;