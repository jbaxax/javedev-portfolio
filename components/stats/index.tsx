import { itemsStats } from "./data";

export default function Stats() {
  return (
    <div className="w-full gap-5 lg:gap-0 lg:flex flex-col lg:flex-row md:grid md:grid-cols-2 md:gap-x-0 justify-center md:justify-around text-center  mt-12">
        {itemsStats.map((item)=>(
            <div key={item.id} className={`flex gap-2 justify-center ${item.hoverBg}`}>
                <p className="font-bold text-7xl leading-none w-26 md:w-fit text-end  md:text-start">{item.value}</p>
                <p className="font-medium  mt-1 w-50 md:w-27 md:text-start text-2xl">{item.title}</p>
            </div>
        ))}
    </div>
  )
}
