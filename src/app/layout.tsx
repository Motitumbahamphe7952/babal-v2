import type { Metadata } from "next";
import { Figtree, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LayoutWrapper from "@/components/wrappers/LayoutWrappers";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const FigTree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Babal Host - Reliable and Affordable Web Hosting Solutions",
  description:
    "Babal Host is a leading web hosting provider offering reliable and affordable hosting solutions for individuals and businesses. With a commitment to exceptional customer service and cutting-edge technology, Babal Host ensures your website is always up and running smoothly. Whether you're looking for shared hosting, VPS, or dedicated servers, Babal Host has the perfect hosting plan to meet your needs. Experience top-notch performance, security, and support with Babal Host today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", FigTree.variable, geist.variable)}
      suppressHydrationWarning
    >
      <body className="font-figtree min-h-screen" suppressHydrationWarning>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
