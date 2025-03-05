"use client"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import FormContact from "../form-contact"
import { useState } from "react";
import { X } from "lucide-react";


export default function ModalContact() {
  
  const [open, setOpen] = useState(false);
  
  return (
    <AlertDialog open={open} onOpenChange={setOpen} >
      <AlertDialogTrigger asChild>
      <Button className=" hover:bg-white mt-4 p-7 text-xl w-30 md:w-40 hover:text-black  hover:shadow-lg cursor-pointer  transition-colors duration-400">
            Contactame
          </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl w-full h-auto">
          <Button className="absolute top-1 right-4 text-gray-500 hover:text-white transition bg-transparent hover:bg-transparent" onClick={()=>setOpen(false)}>
            <X size={24}/>
          </Button>
        <AlertDialogHeader> 
          <AlertDialogTitle className="text-center mb-4">Ponte en contacto conmigo</AlertDialogTitle>
         <FormContact closeModal={()=>setOpen(false)}/>
            
        <AlertDialogDescription>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}
