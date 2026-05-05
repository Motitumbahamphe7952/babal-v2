"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState, useCallback, useEffect } from "react";

interface SubmenuItem {
  name: string;
  link: string;
  icon: string;
  desc: string;
}

interface NavItem {
  name: string;
  link?: string;
  hasSubmenu?: boolean;
  submenu?: SubmenuItem[];
  contacts?: { name: string; link: string; icon: string }[];
  map?: React.ReactNode;
  extra?: {
    image: string;
    title: string;
    desc: string;
    link?: string;
  };
}

export default function Navbar() {
  const [menuKey, setMenuKey] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenuNav, setActiveSubmenuNav] = useState<NavItem | null>(
    null,
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Remounting the NavigationMenu resets ALL internal Radix state reliably
  const closeDesktopDropdown = useCallback(() => {
    setMenuKey((k) => k + 1);
    setIsDropdownOpen(false);
  }, []);

  const closeMobileMenus = () => {
    setActiveSubmenuNav(null);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Backdrop overlay when dropdown is open */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={closeDesktopDropdown}
        />
      )}

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMobileMenus}
        />
      )}

      {/* Mobile primary menu */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-[min(92vw,360px)] bg-white z-99 border-l border-gray-200 shadow-xl transform transition-transform duration-300 lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMobileMenus}
            aria-label="Close mobile menu"
          >
            <Icon icon="lucide:x" width={20} height={20} />
          </Button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)] px-2 py-3">
          {(navItems as NavItem[]).map((nav) => (
            <div
              key={nav.name}
              className="border-b border-gray-100 last:border-b-0"
            >
              {nav.hasSubmenu ? (
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-3 py-3 text-left text-base"
                  onClick={() => setActiveSubmenuNav(nav)}
                >
                  <span>{nav.name}</span>
                  <Icon icon="lucide:chevron-right" width={18} height={18} />
                </button>
              ) : (
                <Link
                  href={nav.link || "#"}
                  className="block px-3 py-3 text-base"
                  onClick={closeMobileMenus}
                >
                  {nav.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Mobile submenu */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-[min(92vw,360px)] bg-white z-999 border-l border-gray-200 shadow-2xl transform transition-transform duration-300 lg:hidden",
          isMobileMenuOpen && activeSubmenuNav
            ? "translate-x-0"
            : "translate-x-full",
        )}
        aria-hidden={!activeSubmenuNav}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <button
            type="button"
            className="inline-flex items-center gap-1 text-sm font-medium"
            onClick={() => setActiveSubmenuNav(null)}
          >
            <Icon icon="lucide:chevron-left" width={18} height={18} />
            Back
          </button>
          <span className="text-sm font-semibold truncate">
            {activeSubmenuNav?.name}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMobileMenus}
            aria-label="Close submenu"
          >
            <Icon icon="lucide:x" width={20} height={20} />
          </Button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)] px-2 py-3">
          {activeSubmenuNav?.submenu?.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={closeMobileMenus}
              className="block rounded-md p-3 hover:bg-gray-50"
            >
              <div className="flex items-start gap-3">
                <div className="border rounded-sm p-2 bg-primary text-white">
                  <Icon icon={item.icon} width={16} height={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      <div className="flex relative top-0 w-full bg-white items-center h-16 justify-between transition-border duration-300">
        <div className="flex items-center justify-between w-full mx-auto container container-py-none">
          <div className="flex w-full h-14 justify-center">
            <Link
              href="/"
              className="flex justify-start items-center z-50 gap-2"
            >
              <Image
                src={"/animated-logo.svg"}
                alt="Babal Host Logo"
                width={400}
                height={400}
                className="h-7 sm:h-9 w-fit"
              />
            </Link>

            <div className="flex-1 justify-center z-99 items-center flex">
              <NavigationMenu
                key={menuKey}
                className="ml-8 hidden lg:flex"
                viewport={true}
                onValueChange={(value) => {
                  setIsDropdownOpen(!!value);
                }}
              >
                <NavigationMenuList>
                  {(navItems as NavItem[]).map((nav) => (
                    <NavigationMenuItem key={nav.name} value={nav.name}>
                      {nav.hasSubmenu ? (
                        <>
                          <NavigationMenuTrigger
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "rounded-sm h-7.5 text-base text-muted-foreground",
                            )}
                          >
                            {nav.name}
                          </NavigationMenuTrigger>

                          {nav.name.toLocaleLowerCase() === "support" ? (
                            <NavigationMenuContent className="bg-white min-w-250 max-w-7xl">
                              <div className="flex w-full min-w-250 flex-row gap-6 p-4 items-stretch">
                                <div
                                  className={`grid w-full min-w-250 h-full ${
                                    nav?.submenu && nav?.submenu?.length > 1
                                      ? "grid-cols-5"
                                      : "grid-cols-1"
                                  } gap-8 items-stretch md:w-200`}
                                >
                                  <div className="space-y-2 col-span-2 h-full min-w-0">
                                    {nav.submenu?.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.link}
                                        onClick={closeDesktopDropdown}
                                        className="group flex h-fit min-h-0 items-start navcard rounded-lg border border-gray-200 bg-[#F5F7F5] p-4 transition-all hover:border-gray-300 hover:shadow-md"
                                      >
                                        <div className="flex w-full gap-3 items-start">
                                          <div className="rounded-sm border p-2 bg-primary text-white transition-all group-hover:bg-white group-hover:text-primary">
                                            <Icon
                                              icon={item.icon}
                                              width={18}
                                              height={18}
                                            />
                                          </div>
                                          <div className="flex-1">
                                            <div className="text-sm font-medium leading-none transition-colors">
                                              {item.name}
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-snug mt-1 group-hover:text-white">
                                              {item.desc}
                                            </p>
                                          </div>
                                          <div>
                                            <Icon
                                              icon={"tabler:arrow-up-right"}
                                              className="size-5 group-hover:rotate-45 transition-all duration-300"
                                            />
                                          </div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                  <div className="flex col-span-1 h-full min-h-0 flex-col">
                                    <h3 className="text-lg font-semibold">
                                      Contact Details
                                    </h3>
                                    <ul className="mt-3 space-y-2">
                                      {nav.contacts?.map((contact) => {
                                        if (contact.link.startsWith("tel:")) {
                                          return (
                                            <li key={contact.name}>
                                              <h3 className="mt-5 text-lg font-semibold">
                                                Number
                                              </h3>
                                              <p className="mt-2 text-muted-foreground">
                                                +977 9865856455
                                              </p>
                                            </li>
                                          );
                                        }
                                        return (
                                          <li key={contact.name}>
                                            <a
                                              href={contact.link}
                                              onClick={closeDesktopDropdown}
                                              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                                            >
                                              <Icon
                                                icon={contact.icon}
                                                width={16}
                                                height={16}
                                              />
                                              {contact.name}
                                            </a>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                    <div className="mt-auto">
                                      <Button
                                        onClick={closeDesktopDropdown}
                                        className="w-full py-2!"
                                      >
                                        Contact Us <ArrowRight />
                                      </Button>
                                    </div>
                                  </div>
                                  <div className="h-full col-span-2 min-h-0 w-full">
                                    {nav.map}
                                  </div>
                                </div>
                                {nav.extra && (
                                  <div className="flex h-full w-full max-w-84 flex-col self-stretch">
                                    <div className="relative h-47.5 w-full overflow-hidden rounded-lg">
                                      <Image
                                        src={nav.extra.image}
                                        fill
                                        alt="babal host"
                                      />
                                    </div>
                                    <div className="mt-3">
                                      <h2 className="text-lg font-semibold">
                                        {nav.extra.title}
                                      </h2>
                                      <p>{nav.extra.desc}</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </NavigationMenuContent>
                          ) : (
                            <NavigationMenuContent className="bg-white max-w-7xl">
                              <div className="flex flex-row gap-6 p-4">
                                <div
                                  className={`grid ${
                                    nav?.submenu && nav?.submenu?.length > 1
                                      ? "grid-cols-2 w-100"
                                      : "grid-cols-1 w-100!"
                                  } gap-3 md:w-200`}
                                >
                                  {nav.submenu?.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.link}
                                      onClick={closeDesktopDropdown}
                                      className="group block navcard rounded-lg bg-[#F5F7F5] border-gray-200 p-4 hover:border-gray-300 hover:shadow-md transition-all"
                                    >
                                      <div className="flex gap-3 items-start">
                                        <div className="border rounded-sm p-2 bg-primary text-white group-hover:bg-white group-hover:text-primary transition-all">
                                          <Icon
                                            icon={item.icon}
                                            width={18}
                                            height={18}
                                          />
                                        </div>
                                        <div className="flex-1">
                                          <div className="text-sm font-medium leading-none transition-colors">
                                            {item.name}
                                          </div>
                                          <p className="text-muted-foreground text-sm leading-snug mt-1 group-hover:text-white">
                                            {item.desc}
                                          </p>
                                        </div>
                                        <div>
                                          <Icon
                                            icon={"tabler:arrow-up-right"}
                                            className="size-5 group-hover:rotate-45 transition-all duration-300"
                                          />
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                                {nav.extra && (
                                  <div className="flex rounded-xl max-w-75 flex-col max-[300px] bg-[#F5F6F7] h-fit p-6">
                                    <div className="space-y-2">
                                      <h2 className="text-xl font-semibold">
                                        {nav.extra.title}
                                      </h2>
                                      <p className="text-[14px]">
                                        {nav.extra.desc}
                                      </p>
                                      {nav.extra.link && (
                                        <Link
                                          href={nav.extra.link}
                                          target="_blank"
                                          onClick={closeDesktopDropdown}
                                          className="text-green-500 bg-green-200 font-medium gap-3 p-2 mt-4 w-fit rounded-full px-4 pr-6 border border-green-500 flex items-center"
                                        >
                                          <Icon
                                            icon={"logos:whatsapp-icon"}
                                            className="size-6 lg:size-7"
                                          />
                                          Contact Sales
                                        </Link>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </NavigationMenuContent>
                          )}
                        </>
                      ) : (
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "rounded-sm h-7.5 text-base text-muted-foreground",
                          )}
                        >
                          <Link href={nav.link || "#"}>{nav.name}</Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Link href={"https://clients.babal.host/clientarea.php"}>
              <Button
                variant={"default"}
                className="px-3 sm:px-5 py-2 sm:py-2.5 text-sm lg:text-[16px] rounded-[10px] sm:rounded-md sm:text-base text-foreground cursor-pointer transition-transform duration-500 hover:scale-103"
              >
                Client Area
                <Icon icon="lucide:arrow-right" width={18} height={18} />
              </Button>
            </Link>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu width={20} height={20} className="size-7" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
