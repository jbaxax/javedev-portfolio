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
import { useEffect, useState } from "react";
import useBreakpointer from "@/hooks/useBreakpointer";

export default function NavToggle() {
  const [open, setOpen] = useState(false);

  const width = useBreakpointer();

  useEffect(() => {
    if (width > 1024) {
      setOpen(false);
    }
  }, [width]);

  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:w-64 pt-12" onClick={()=>setOpen(false) }>
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold">
              Jave<span className="text-amber-500">Dev</span>
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
        <div className="flex flex-col justify-center px-5">
        <NavLinks/>
        </div>
          
        </SheetContent>
      </Sheet>
    </div>
  );
}
