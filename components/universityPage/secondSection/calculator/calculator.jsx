import Button from "@/ui/button/Button";
import SpecialtiesCardDetail from "@/ui/direction/directionCard";
import InputDropdown from "@/ui/input/inputDropdown";
import { paidOrStateData, subjectsData } from "@/data";
import clsx from "clsx";

const data = [
  {
    name: "Физика",
    code: "03.03.01",
    budget: {
      point: 231,
      place: 24,
    },
    paid: {
      point: 125,
      price: 231152,
      place: 124,
    },
  },
  {
    name: "Математика",
    code: "05.05.04",
    budget: {
      point: 251,
      place: 114,
    },
    paid: {
      point: 525,
      price: 131152,
      place: 1554,
    },
  },
  {
    name: "Физика",
    code: "03.03.01",
    budget: {
      point: 231,
      place: 24,
    },
    paid: {
      point: 125,
      price: 231152,
      place: 124,
    },
  },
  {
    name: "Математика",
    code: "05.05.04",
    budget: {
      point: 251,
      place: 114,
    },
    paid: {
      point: 525,
      price: 131152,
      place: 1554,
    },
  },
];

export default function Calculator({ className }) {
  return (
    <div className={clsx(className)}>
      <div className="mb-3 flex flex-wrap">
        <div className="flex items-center mb-2 w-1/2">
          <InputDropdown data={subjectsData} select="Выбрать предмет" />
          <input
            type="number"
            name=""
            id=""
            max="100"
            min="0"
            className=" outline-none border border-gray-light rounded-lg px-2 py-1 text-sm w-20"
          />
        </div>
        <div className="flex items-center mb-2 w-1/2">
          <InputDropdown data={subjectsData} select="Выбрать предмет" />
          <input
            type="number"
            name=""
            id=""
            max="100"
            min="0"
            className=" outline-none border border-gray-light rounded-lg px-2 py-1 text-sm w-20"
          />
        </div>
        <div className="flex items-center mb-2 w-1/2">
          <InputDropdown data={subjectsData} select="Выбрать предмет" />
          <input
            type="number"
            name=""
            id=""
            max="100"
            min="0"
            className=" outline-none border border-gray-light rounded-lg px-2 py-1 text-sm w-20"
          />
        </div>
        <div className="flex items-center mb-2 w-1/2">
          <InputDropdown data={subjectsData} select="Выбрать предмет" />
          <input
            type="number"
            name=""
            id=""
            max="100"
            min="0"
            className=" outline-none border border-gray-light rounded-lg px-2 py-1 text-sm w-20"
          />
        </div>
        <div className="flex items-center mb-2 w-1/2">
          <InputDropdown data={subjectsData} select="Выбрать предмет" />
          <input
            type="number"
            name=""
            id=""
            max="100"
            min="0"
            className=" outline-none border border-gray-light rounded-lg px-2 py-1 text-sm w-20"
          />
        </div>
        <div className="flex items-center mb-2 w-1/2">
          <InputDropdown data={paidOrStateData} select="none" />
        </div>
        <div className="w-full text-center">
          <Button
            text="Калькулировать"
            theme="light"
            className="text-sm px-2 py-1"
          />
        </div>
      </div>

      {data.map((item, id) => (
        <SpecialtiesCardDetail data={item} key={id} order={2} />
      ))}
    </div>
  );
}
