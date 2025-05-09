"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface Service {
  title: string;
  image: string;
  description: string[];
}

const standardServices: Service[] = [
  {
    title: "美学空间",
    image: "/h1.webp?height=211&width=211",
    description: [
      "门店采用一店一设计概念，以城市特色为元素，将城市生活方式融入其中，打造一个新型城市美学空间",
      "家居店、摄影店各具特色的主题门店设计和配套设施，给您最沉浸的拍摄体验和最极致的仪式感",
    ],
  },
  {
    title: "造型服务",
    image: "/h2.webp?height=211&width=211",
    description: [
      "店内化妆品均选用迪奥、TF、YSL等一线大牌，塑造高级妆容",
      "造型师通过专业化的形象设计，为您量身打造符合个人气质的个性妆容和服装搭配",
    ],
  },
  {
    title: "拍摄服务",
    image: "/h3.webp?height=211&width=211",
    description: [
      "相机使用CANON的5D3/4+24-70的组合，绝佳的镜头解析力为你展现最美肤色质感（其他产品应用设备以门店实际情况为准）",
      "我们将根据您的个性化需求，提供专业建议及线上1v1修片服务",
    ],
  },
  {
    title: "图像处理",
    image: "/h4.webp?height=211&width=211",
    description: [
      "由行业领先的“德国云端”图像处理中心提供高标准高效率的修片支持",
      "全系采用iMac看片、修图，呈现最佳色彩体验",
    ],
  },
  {
    title: "图像输出",
    image: "/h5.webp?height=211&width=211",
    description: [
      "门店使用DNP专业数码影像打印机",
      "使用原装进口的高品质防水耐划擦相纸，保护相片长时间保考验",
      "运用专业色彩管理系统，还原肉眼可见真实色彩",
    ],
  },
];

const masterServices: Service[] = [
  {
    title: "高端定制",
    image: "/d1.webp?height=211&width=211",
    description: [
      "由资深摄影师一对一服务，提供个性化拍摄方案",
      "专属造型师全程跟进，打造独一无二的个人形象",
    ],
  },
  {
    title: "奢华体验",
    image: "/d2.webp?height=211&width=211",
    description: [
      "VIP专属摄影棚，私密舒适的拍摄环境",
      "高端化妆品和服装搭配，呈现明星级质感",
    ],
  },
  {
    title: "艺术创作",
    image: "/d3.webp?height=211&width=211",
    description: [
      "艺术总监全程指导，打造艺术级摄影作品",
      "独特的创意构思和场景设计，展现个人魅力",
    ],
  },
  {
    title: "精致修图",
    image: "/d4.webp?height=211&width=211",
    description: [
      "资深修图师精心修饰，呈现完美肤质和光影",
      "多轮修图确认，满足您对每一个细节的要求",
    ],
  },
  {
    title: "高端输出",
    image: "/d5.webp?height=211&width=211",
    description: [
      "进口艺术纸张打印，色彩持久鲜艳",
      "提供精美相册定制和装裱服务，永久珍藏美好瞬间",
    ],
  },
];

const tabLabels = ["海马体标准服务", "大师店标准服务"];

export default function HimoServices() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const services = activeTab === 0 ? standardServices : masterServices;

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-screen-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">HIMO标准服务</h2>
        <p className="text-gray-500 mb-4">极致服务 最好的你</p>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>
      </div>

      {/* 服务标签切换 */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="grid grid-cols-2 border border-gray-200 rounded-md overflow-hidden">
          {tabLabels.map((label, idx) => {
            const isActive = idx === activeTab;
            const bgClass = isActive
              ? idx === 0
                ? "bg-black text-white"
                : "bg-amber-600 text-white"
              : "bg-white text-gray-800";
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`py-3 px-4 text-center relative transition-colors duration-211 ${bgClass}`}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0"
                    initial={false}
                    transition={{ type: "spring", stiffness: 211, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 服务卡片网格 */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-5 gap-6 px-4 lg:px-8 justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={activeTab}
      >
        {services.map((service: Service, index: number) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            isMaster={activeTab === 1}
          />
        ))}
      </motion.div>
    </div>
  );
}

type ServiceCardProps = {
  service: Service;
  index: number;
  isMaster: boolean;
};

function ServiceCard({ service, index, isMaster }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const titleColor = isMaster ? "text-amber-600" : "text-black";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="flex flex-col items-center "
    >
      <div className="relative w-full max-w-[211px] aspect-square p-2 mb-4 overflow-hidden rounded-lg mx-auto">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h3 className={`text-xl font-medium mb-3 ${titleColor}`}>
        {service.title}
      </h3>
      <ul className="text-xs text-gray-600 space-y-2">
        {service.description.map((desc: string, i: number) => (
          <li key={i} className="flex items-start">
            <span
              className={`mr-1 ${isMaster ? "text-amber-500" : "text-black"}`}
            >
              •
            </span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
