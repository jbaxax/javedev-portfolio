"use server";

import { z } from "zod";
import { formSchema } from "./schema";
import { Resend } from "resend";

import { ReactElement } from "react";
import { EmailTemplate } from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log(resend);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [emailFormData.email],
      subject: "Hello word",
      react: EmailTemplate({
        firstName: emailFormData.username,
        message: emailFormData.message,
        email: emailFormData.email,
      }) as ReactElement,
    });

    if(error){
        throw error;
    }
  } catch (error) {
    throw error;
  }
};
