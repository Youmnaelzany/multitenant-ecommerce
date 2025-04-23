"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

interface NavbarItemsProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItems = ({ href, children, isActive }: NavbarItemsProps) => {
  return (
    <Button
      variant={isActive ? "noShadow" : "default"}
      className="text-lg hover:bg-transparent"
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex h-20 justify-between border-b bg-white font-medium">
      <Link href={"/"} className="flex items-center pl-6">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>
      <div className="hidden items-center gap-4 lg:flex">
        {navbarItems.map((item) => (
          <NavbarItems
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItems>
        ))}
      </div>
    </nav>
  );
};
