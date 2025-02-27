"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./nav-links";

export default function NavToggle() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full md:w-64 pt-12">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold">Jave<span className="text-amber-500">Dev</span></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <NavLinks />
        </SheetContent>
      </Sheet>
    </div>
  );
}
