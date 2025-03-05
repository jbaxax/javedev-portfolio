import React from "react";

import Link from "next/link";
import { dataGoals } from "../../data";

export default function Goals() {
  return (
    <div className="flex flex-col gap-3 ">
      {dataGoals.map((data) => (
        <div key={data.id} className="border border-primary py-2 px-4 rounded-lg shadow-lg">
          <Link href={data.link} className="space-y-2">
            <p className="font-bold text-xl">{data.title}</p>
            <p>{data.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
