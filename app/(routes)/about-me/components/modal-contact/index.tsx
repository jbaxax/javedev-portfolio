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


export default function ModalContact() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
      <Button className=" hover:bg-white mt-4 p-7 text-xl w-40 hover:text-black  hover:shadow-lg cursor-pointer  transition-colors duration-400">
            Contactame
          </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl w-full h-auto">

        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">Ponte en contacto conmigo</AlertDialogTitle>
         <FormContact/>
            
        <AlertDialogDescription>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}
