import React from "react";
import { dataPortfolio } from "../../data";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function PortfolioBox() {
  return (
    <div className="grid md:mt-0 mx-auto gap-6 md:grid-cols-3 lg:grid-cols-4">
      {dataPortfolio.map((data) => (
        <Card
          key={data.id}
          className="flex flex-col justify-center items-center h-auto"
        >
          <Image
            src={data.image}
            alt="image"
            width={100}
            height={100}
            className="w-24 h-24 rounded-sm"
          />
          <CardHeader>
            <CardTitle className="text-center mb-2">{data.title}</CardTitle>
            <CardDescription className="flex gap-4">
              <Link
                href={data.urlDemo}
                className={buttonVariants({ variant: "outline" })}
              >
                Demo
              </Link>
              <Link
                href={data.urlGithub}
                className={buttonVariants({ variant: "outline" })}
              >
                GitHub
              </Link>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
