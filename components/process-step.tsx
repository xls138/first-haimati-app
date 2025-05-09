"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

interface ProcessStepProps {
  step: {
    number: number;
    title: string;
    description: string;
    imageSrc: string;
  };
  index: number;
}

export default function ProcessStep({ step, index }: ProcessStepProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.2,
          },
        },
      }}
      className="flex flex-col items-center"
    >
      <div className="relative w-full max-w-[280px] mb-6 transform transition-transform duration-500 hover:scale-105">
        <Image
          src={step.imageSrc || "/placeholder.svg"}
          alt={`Step ${step.number}: ${step.title}`}
          width={280}
          height={560}
        />
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold mb-1">Step{step.number}</h3>
        <h4 className="text-lg font-medium mb-2">{step.title}</h4>
        <div className="w-12 h-0.5 bg-gray-300 mx-auto mb-2"></div>
        <p className="text-sm text-gray-500">{step.description}</p>
      </div>
    </motion.div>
  );
}
