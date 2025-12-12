import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const sections = [
    { title: "企业连接", items: ["海马体集团官网", "海马体企业"] },
    {
      title: "热门城市",
      items: ["成都", "上海", "北京", "武汉", "重庆", "南京", "杭州", "深圳"],
      gridCols: 2,
    },
    {
      title: "关于HIMO",
      items: ["常见问题", "门店信息", "企业合作", "人才招聘"],
    },
  ];
  const socialIcons = [
    { href: "#", label: "微博", src: "/f2.webp" },
    { href: "#", label: "小红书", src: "/f3.webp" },
    { href: "#", label: "抖音", src: "/f4.webp" },
  ];
  return (
    <footer className="w-full bg-white py-8 border-t max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-sm">
              <Image
                src="/f1.webp?height=40&width=40"
                alt="海马体Logo"
                width={40}
                height={40}
              />
            </div>
          </div>
          {/* Dynamic Sections */}
          {sections.map(({ title, items, gridCols }) => (
            <div key={title} className="space-y-4">
              <h3 className="font-medium text-lg">{title}</h3>
              {gridCols ? (
                <div
                  className={`grid grid-cols-${gridCols} gap-2 text-sm text-gray-600`}
                >
                  {items.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="hover:underline transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2 text-sm text-gray-600">
                  {items.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:underline transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">联系海马体</h3>
            <p className="text-xl font-bold">400-068-5666</p>
            <div className="flex space-x-4 items-center">
              {socialIcons.map(({ href, label, src }) => (
                <Link key={label} href={href} aria-label={label}>
                  <Image src={src} alt={label} width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
          {/* QR Code */}
          <div className="space-y-2 flex flex-col items-center">
            <div className="border p-2 bg-white rounded-lg shadow-sm">
              <Image
                src="/f5.webp"
                alt="扫码预约拍摄"
                width={120}
                height={120}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">扫码预约拍摄</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
