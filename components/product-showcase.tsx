"use client";

import React, { JSX, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";

type Product = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  size: "normal" | "large";
};

export default function ProductShowcase(): JSX.Element {
  // 产品数据
  const products: Product[] = [
    {
      id: 1,
      title: "证件照",
      subtitle: "海马体照相馆",
      image: "/p1.webp?width=405&height=270",
      size: "normal",
    },
    {
      id: 2,
      title: "VERA WANG合作秋冬婚纱",
      subtitle: "海马体大师店",
      image: "/p2.webp?width=405&height=270",
      size: "normal",
    },
    {
      id: 3,
      title: "国风照",
      subtitle: "海马体照相馆",
      image: "/p3.webp?width=405&height=270",
      size: "normal",
    },
    {
      id: 4,
      title: "文艺照",
      subtitle: "海马体照相馆",
      image: "/p4.webp?width=405&height=270",
      size: "normal",
    },
    {
      id: 5,
      title: "结婚登记照",
      subtitle: "海马体照相馆",
      image: "/p5.webp?width=564&height=405",
      size: "large",
    },
    {
      id: 6,
      title: "全家福",
      subtitle: "海马体照相馆",
      image: "/p6.webp?width=564&height=405",
      size: "large",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">精选产品</h2>
        <p className="text-gray-500 mb-4">生活需要仪式感</p>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          className="rounded-full px-12 py-2 md:px-32 md:py-6 border-black hover:bg-black hover:text-white transition-colors"
        >
          查看更多
        </Button>
      </div>
    </div>
  );
}

// 产品卡片组件
function ProductCard({ product }: { product: Product }): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const colSpan = product.size === "large" ? "col-span-2" : "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: product.id * 0.1 }}
      className={`group ${colSpan}`}
    >
      <div className="overflow-hidden bg-white box-border border-2 border-transparent p-4 transition-shadow duration-300 hover:shadow-2xl">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          width={product.size === "large" ? 564 : 405}
          height={product.size === "large" ? 405 : 270}
          priority={product.id === 1}
          loading={product.id === 1 ? "eager" : "lazy"}
          className="block mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <div className="mt-4">
          <h3 className="text-lg font-medium">{product.title}</h3>
          <p className="text-sm text-gray-500">{product.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}
