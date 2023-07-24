import clsx from "clsx";

export default function DirectionCard({ data, order }) {
  return (
    <div
      className={clsx(
        " border-t  border-t-gray-light px-3 py-2 first:border-t-white",
        order % 2 != 0 && "bg-gray-light"
      )}
    >
      <div className="">
        <div className="flex mb-2">
          <div className="text-gray text-sm leading-6 mr-2">{data.code}</div>
          <div className=" w-3/4">{data.name}</div>
        </div>
        <div className="flex gap-9 mx-3">
          <div>
            <div className="mb-2 text-sm font-medium">Бюджет за 2022 г</div>
            <div className=" mb-1">
              <div className=" text-sm text-gray">Баллы ЕГЭ за 2022 год</div>
              <div className=" text-sm  font-medium">
                от {data.budget.point}
              </div>
            </div>
            <div>
              <div className=" text-sm text-gray">Кол-во мест</div>
              <div className=" text-sm  font-medium">{data.budget.place}</div>
            </div>
          </div>
          <div>
            <div className="mb-2 text-sm font-medium">Контракт за 2022 г</div>
            <div className="mb-1">
              <div className=" text-sm text-gray">Стоимость за 2022 год</div>
              <div className=" text-sm  font-medium">
                {data.paid.price} руб (от {data.paid.point} баллов)
              </div>
            </div>
            <div>
              <div className=" text-sm text-gray">Кол-во мест</div>
              <div className=" text-sm  font-medium">{data.paid.place}</div>
            </div>
          </div>
          <div>
            <div className="mb-2 text-sm  font-medium">Предметы ЕГЭ</div>
            <div>
              <div className=" text-sm  font-medium">Математика (Проф)</div>
              <div className=" text-sm  font-medium">Русский язык</div>
              <div className=" text-sm  font-medium">Информатика</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
