import Link from "next/link";
import { itemsSocialNetworks } from "./data";

export default function SocialNetworks() {
  return (
    <div className="flex gap-2 justify-center">
      {itemsSocialNetworks.map((item) => (
        <div key={item.id} className={`rounded-full border p-2 border-primary transtion-color duration-300 ${item.hoverBg}`}>
          <Link href={item.link} target="_blank">{item.icon}</Link>
        </div>
      ))}
    </div>
  );
}
