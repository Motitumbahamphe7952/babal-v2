"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface IFAQ {
  question: string;
  answer: string;
}

export const FAQ_DATA: IFAQ[] = [
  {
    question: "What is web hosting?",
    answer:
      "Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet. It involves storing website files on a server and providing the necessary infrastructure for users to access those files through a web browser.",
  },
  {
    question: "What types of hosting plans do you offer?",
    answer:
      "We offer a variety of hosting plans including shared hosting, VPS hosting, dedicated hosting, and cloud hosting. Each plan is designed to meet different needs and budgets.",
  },
  {
    question: "How do I choose the right hosting plan for my website?",
    answer:
      "Choosing the right hosting plan depends on factors such as the size of your website, expected traffic, and specific requirements. If you're unsure, our support team can help you select the best plan for your needs.",
  },
  {
    question: "Do you offer domain registration services?",
    answer:
      "Yes, we offer domain registration services. You can register a new domain or transfer an existing one to our platform.",
  },
  {
    question: "What is the uptime guarantee for your hosting services?",
    answer:
      "We guarantee a 99.9% uptime for our hosting services, ensuring that your website remains accessible to visitors at all times.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes, we provide 24/7 customer support through various channels including live chat, email, and phone. Our support team is always ready to assist you with any issues or questions you may have.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-16 container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 flex justify-start">
          <h2 className="">
            Frequently Asked <br /> Questions (FAQs)
          </h2>
        </div>

        {/* Accordion List */}
        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="w-full space-y-2"
        >
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border-b border-gray-100"
            >
              <AccordionTrigger className="text-left text-xl md:text-xl font-semibold text-[#121212] hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#121212] font-regular text-base md:text-lg leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Explore More Button */}
        <div className="mt-12 flex justify-start">
          <Button
            variant="outline"
            className="rounded-md border-gray-300 px-8 py-6 text-sm font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Explore More
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
