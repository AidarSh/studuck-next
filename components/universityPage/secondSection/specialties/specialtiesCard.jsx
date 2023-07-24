import SpecialtiesCardDetail from "@/ui/direction/directionCard";
import { useState } from "react";

export default function SpecialtiesCard({ data }) {
  const [openWindow, setOpenWindow] = useState(false);
  return (
    <div
      className="border border-gray-light rounded-lg mb-2 cursor-pointer"
      onClick={() => setOpenWindow(!openWindow)}
    >
      <div className="flex justify-between px-3 py-2">
        <div className="flex">
          <div className="text-gray text-sm leading-6 mr-2">{data.code}</div>
          <div className=" w-3/4">{data.name}</div>
        </div>
        <div>{">"}</div>
      </div>
      {data.items &&
        openWindow &&
        data.items.map((item, id) => (
          <SpecialtiesCardDetail key={id} order={id} data={item} />
        ))}
    </div>
  );
}
