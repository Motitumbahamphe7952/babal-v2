"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";

interface Review {
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
  reviewLink: string;
}

interface ReviewSectionProps {
  title?: string;
  highlightedWord?: string;
  description?: string;
  reviews?: Review[];
}

const defaultReviews: Review[] = [
  {
    name: "Niranjan Dahal",
    role: "Babal Host Customer",
    image: "/images/Review/users/niranjan.png",
    rating: 5,
    comment:
      "I was stuck in problem, I was failing to access my cPanel. The babal host support team helped me with continuous focus in my problem, thank you for your best support. Highly Recommended for those who are searching for hosting provider in minimum charge and best support I have ever seen.",
    reviewLink: "https://maps.app.goo.gl/NfW8ikfFDVXR3cqC7",
  },
  {
    name: "Saugat Ghimire",
    role: "Babal Host Customer",
    image: "/images/Review/users/saugat.png",
    rating: 5,
    comment:
      "We are currently running 3 website in Babal host and we really appreciate their support. They reply any queries just in seconds even in midnight. The speed is also really amazing. I don't thing, there is a hosting company who provide such service in such price. Keep it up.",
    reviewLink: "https://maps.app.goo.gl/NaitaHX1SntmGmNJ8",
  },
  {
    name: "Anish Poudel",
    role: "Babal Host Customer",
    image: "/images/Review/users/anish.png",
    rating: 5,
    comment:
      "Exceptional customer service and great deals on hosting plans. Writing this review after  a full year with Babal host and receiving the best customer service even at odd hours. Also during this period we never had any issue regarding speed or downtime.",
    reviewLink: "https://maps.app.goo.gl/NH44dDRojcvVSakq6",
  },
  {
    name: "Rohan Dhungana",
    role: "Babal Host Customer",
    image: "/images/Review/users/rohan.png",
    rating: 4,
    comment:
      "Babal Host is a solid choice for beginners and small projects, offering affordable pricing and local support. Performance is generally reliable, though advanced users might find limitations in scalability and configuration flexibility compared to larger international providers.",
    reviewLink: "https://maps.app.goo.gl/ELFSLXPm3h1M7wvT6",
  },
  {
    name: "Vibek Regmi",
    role: "Babal Host Customer",
    image: "/images/Review/users/vibek.png",
    rating: 5,
    comment:
      "Probably the best Web Hosting Provider in Nepal. I have been using their service since 6-7 months and I have got no any issues in my website. The service is real good that I am now switching to their higher plans soon. You can just go blindly for their service. They won't let your expectations go down.",
    reviewLink: "https://maps.app.goo.gl/JSrrC8FKpy4ATUcj8",
  },
  {
    name: "Nayan Raj",
    role: "Babal Host Customer",
    image: "/images/Review/users/nayan.png",
    rating: 5,
    comment:
      "The best hosting Company. Services here are great and Customer Care is very Babal. I have taken their hosting packages where the servers response time is very fast. I have also suggested to peoples to use their service as the services provide excellent performance.",
    reviewLink: "https://maps.app.goo.gl/nCP8dJTz3jawtMba8",
  },
];

const Review: React.FC<ReviewSectionProps> = ({
  title = "See what our Customers Say about Babal.Host",
  description = "We pride ourselves to be called one of the best Web Hosting in Nepal by our customers.",
  reviews = defaultReviews,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className=" sm:px-4">
            <h2 className="text-3xl capitalize md:text-5xl font-semibold text-[#1a1a1a] leading-tight ">
              {title}
            </h2>
            <p className="text-[#1D2A3B] mt-4 text-xl font-normal">
              {description}
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4"
                >
                  <div className="bg-[#f9fafb] p-4 lg:p-8 rounded-xl min-h-[460px] lg:min-h-[430px] flex flex-col transition-all border border-transparent hover:shadow-md">
                    <div className="grow flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <Icon icon="logos:google-icon" width="32" height="32" />
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              icon={
                                i < review.rating
                                  ? "mdi:star"
                                  : "mdi:star-outline"
                              }
                              width="18"
                              height="18"
                              className={
                                i < review.rating
                                  ? "text-[#FFB800]"
                                  : "text-[#D1D5DB]"
                              }
                            />
                          ))}
                        </div>
                      </div>

                      <Link
                        href={review.reviewLink}
                        target="_blank"
                        className="grow group/link"
                      >
                        <p className="text-[#202020] text-lg leading-relaxed mb-8">
                          {review.comment}
                        </p>
                      </Link>
                    </div>

                    <div className="flex items-center gap-4 pt-6">
                      <div className="relative w-12 h-12 shrink-0">
                        <Image
                          src={review.image}
                          alt={`${review.name}'s profile picture`}
                          fill
                          sizes="(max-width: 768px) 48px, 48px"
                          className="rounded-full object-cover"
                          priority={false}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#202020]">
                          {review.name}
                        </h4>
                        <p className="text-[14px] text-foreground/60">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
