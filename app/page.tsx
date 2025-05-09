// app/page.tsx
import BookingProcess from "@/components/booking-process";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import HimoServices from "@/components/himo-services";
import LatestProducts from "@/components/latest-products";
import ProductShowcase from "@/components/product-showcase";

const carouselData = [
  { id: 1, image: "/banner1.webp" },
  { id: 2, image: "/banner2.webp" },
  { id: 3, image: "/banner3.webp" },
];

export default function HomePage() {
  return (
    <main>
      {/* 你可以传更多配置，如 autoplayDelay、className */}
      <Carousel data={carouselData} autoplayDelay={5000} />
      <LatestProducts />
      <BookingProcess />
      <HimoServices />
      <ProductShowcase />
      <Footer />
    </main>
  );
}
