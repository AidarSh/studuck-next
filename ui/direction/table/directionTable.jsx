export default function DirectionTable() {
  return (
    <>
      <div>
        <div className="mb-2 text-sm font-medium">Бюджет за 2022 г</div>
        <div className=" mb-1">
          <div className=" text-sm text-gray">Баллы ЕГЭ за 2022 год</div>
          <div className=" text-sm  font-medium">от {data.budget.point}</div>
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
    </>
  );
}
