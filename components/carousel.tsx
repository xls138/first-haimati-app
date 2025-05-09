// components/carousel.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface SlideItem {
  id: number;
  image: string;
}

interface CarouselProps {
  data: SlideItem[];
  autoplayDelay?: number;
  className?: string;
}

export default function Carousel({
  data,
  autoplayDelay = 5000,
  className = "",
}: CarouselProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      loop
      autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className={`w-full ${className}`}
    >
      {data.map(({ id, image }) => (
        <SwiperSlide key={id}>
          <div className="relative w-full pb-[40%] md:pb-[25%]">
            <Image
              src={image}
              alt={`轮播图 ${id}`}
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}