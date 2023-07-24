import clsx from "clsx";
import Specialties from "./specialties/specialties";
import { useState } from "react";
import Rating from "./rating/rating";
import Calculator from "./calculator/calculator";

export default function SecondSection() {
  const [selectMenu, setSelectMenu] = useState(0);
  return (
    <>
      <div className="border border-gray-light rounded-lg px-4 py-3">
        <div className="flex gap-7 mb-3">
          <div
            className={clsx(
              selectMenu == 0 ? "text-black font-medium" : "text-gray",
              "text-sm cursor-pointer"
            )}
            onClick={() => setSelectMenu(0)}
          >
            Специальности
          </div>
          <div
            className={clsx(
              selectMenu == 1 ? "text-black font-medium" : "text-gray",
              "text-sm cursor-pointer"
            )}
            onClick={() => setSelectMenu(1)}
          >
            Калькулятор ЕГЭ
          </div>

          <div
            className={clsx(
              selectMenu == 2 ? "text-black font-medium" : "text-gray",
              "text-sm cursor-pointer"
            )}
            onClick={() => setSelectMenu(2)}
          >
            Рейтинг
          </div>
          <div
            className={clsx(
              selectMenu == 3 ? "text-black font-medium" : "text-gray",
              "text-sm cursor-pointer"
            )}
            onClick={() => setSelectMenu(3)}
          >
            Общежитие
          </div>
          <div
            className={clsx(
              selectMenu == 4 ? "text-black font-medium" : "text-gray",
              "text-sm cursor-pointer"
            )}
            onClick={() => setSelectMenu(4)}
          >
            Фотографии
          </div>
        </div>
        {selectMenu == 0 && <Specialties />}
        {selectMenu == 1 && <Calculator />}
        {selectMenu == 2 && <Rating />}
        {selectMenu == 3 && <div>2</div>}
        {selectMenu == 4 && <div>4</div>}
      </div>
    </>
  );
}
