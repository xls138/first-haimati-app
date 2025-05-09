import ProcessStep from "./process-step";

export default function BookingProcess() {
  const steps = [
    {
      number: 1,
      title: "关注海马体",
      description: "关注海马体公众号了解最近上新产品",
      imageSrc: "/step1.webp",
    },
    {
      number: 2,
      title: "确认产品",
      description: "确认您想拍的产品和拍摄门店",
      imageSrc: "/step2.webp",
    },
    {
      number: 3,
      title: "预约时间",
      description: "提前预约避免排队更要时刻",
      imageSrc: "/step3.webp",
    },
    {
      number: 4,
      title: "确认下单",
      description: "下单后期待最美的自己",
      imageSrc: "/step4.webp",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-screen-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">预约流程</h2>
        <p className="text-gray-500">生活需要仪式感</p>
        <div className="flex items-center justify-center mt-4 space-x-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {steps.map((step, index) => (
          <ProcessStep key={step.number} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}
