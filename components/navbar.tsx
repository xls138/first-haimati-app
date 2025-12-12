"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "首页", href: "/" },
  { name: "集团介绍", href: "/about" },
  { name: "门店信息", href: "/stores" },
  { name: "企业合作", href: "/cooperation" },
  { name: "人才招聘", href: "/careers" },
];

const baseLink =
  "block font-medium transition-colors text-gray-800 hover:bg-gray-100 px-2 py-3 text-lg md:px-6 md:py-6 md:text-sm";
const activeLink = "bg-black text-white";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="h-10 w-40">
          <Image src="/logo.webp" alt="Logo" width={195} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${baseLink} ${
                    pathname === item.href ? activeLink : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">切换菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-62.5 sm:w-75">
              <SheetTitle className="sr-only">导航菜单</SheetTitle>
              <nav className="flex flex-col gap-4 pt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${baseLink} ${
                      pathname === item.href ? activeLink : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
