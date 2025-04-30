import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface NavbarSidebarProps {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function NavbarSidebar({
  items,
  open,
  onOpenChange,
}: NavbarSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-a border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex h-full flex-col overflow-y-auto pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => onOpenChange(false)}
              className="flex w-full items-center p-4 text-left text-base font-medium hover:bg-black hover:text-white"
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              href="/sign-in"
              onClick={() => onOpenChange(false)}
              className="flex w-full items-center p-4 text-left text-base font-medium hover:bg-black hover:text-white"
            >
              Log In
            </Link>
            <Link
              href="/sign-up"
              onClick={() => onOpenChange(false)}
              className="flex w-full items-center p-4 text-left text-base font-medium hover:bg-black hover:text-white"
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
