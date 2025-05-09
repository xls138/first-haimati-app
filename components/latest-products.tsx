"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Photo categories with image and description
const categories = [
  {
    id: "id",
    label: "证件照",
    image: "/l1.webp?height=600&width=1200",
    description: "专业更致美，在方寸之间记录生活的仪式感和人生的重要时刻。",
  },
  {
    id: "occupation",
    label: "职业形象照",
    image: "/l2.webp?height=600&width=1200",
    description:
      "职场中，专业干练的职业形象展示，对您的事业至关重要。职业形象照，展现你的职业态度和专业气质。",
  },
  {
    id: "literary",
    label: "文艺照",
    image: "/l3.webp?height=600&width=1200",
    description: "用表情和神态表达你的个性，用镜头和照片定格下你张扬的宣言。",
  },
  {
    id: "flower-face",
    label: "花颜照",
    image: "/l4.webp?height=600&width=1200",
    description: "春回梦醒，潋滟一身花色。",
  },
  {
    id: "wedding",
    label: "轻婚纱",
    image: "/l5.webp?height=600&width=1200",
    description: "穿上婚纱，向你展示我一生最美的模样。",
  },
];

export default function LatestProducts() {
  const [activeTabIndex, setActiveTabIndex] = useState(0); // Start with first tab
  const activeCategory = categories[activeTabIndex];

  // Navigation handlers
  const handlePrev = () => {
    setActiveTabIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveTabIndex((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  // Handle tab click
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">最新产品</h2>
        <p className="text-sm text-gray-500">关注动态 改变自己</p>

        {/* Custom Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-2">
          {categories.map((_, idx) => (
            <motion.span
              key={idx}
              className="w-2 h-2 rounded-full"
              animate={{
                backgroundColor: activeTabIndex === idx ? "#000000" : "#E5E7EB",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="w-full mb-8 border-b border-gray-200">
        <div className="relative flex w-full">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleTabClick(index)}
              className="flex-1 truncate whitespace-nowrap overflow-hidden text-sm sm:text-base text-center px-2 sm:px-4 py-2"
            >
              {category.label}
            </button>
          ))}
          <motion.div
            layoutId="underline"
            className="absolute bottom-0 h-0.5 bg-black"
            style={{ width: `${100 / categories.length}%` }}
            animate={{ left: `${(100 / categories.length) * activeTabIndex}%` }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </div>
      </div>

      {/* Photo Display with Navigation */}
      <div className="relative max-w-5xl mx-auto">
        {/* Custom Navigation Arrows */}
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md"
          aria-label="Previous category"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md"
          aria-label="Next category"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Single Composite Image */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={activeCategory.image}
                alt={activeCategory.label}
                width={1200}
                height={600}
                className="w-full h-auto max-h-[500px] object-contain mx-auto"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Category Description */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold mb-4">{activeCategory.label}</h3>
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTabIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 max-w-3xl mx-auto mb-6"
          >
            {activeCategory.description}
          </motion.p>
        </AnimatePresence>
        <Button
          variant="outline"
          className="rounded-full px-12 py-2 md:px-32 md:py-6 border-black hover:bg-black hover:text-white transition-colors"
        >
          查看详情
        </Button>
      </div>
    </div>
  );
}
