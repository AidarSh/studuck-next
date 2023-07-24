export default function Rating() {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-1/2 mb-2">
          <div className=" text-sm">Место в рейтинге (Россия):</div>
          <div className=" font-medium">124</div>
        </div>
        <div className="w-1/2 mb-2">
          <div className="flex-1 text-sm">Место в регионе (Татарстан):</div>
          <div className=" font-medium">5</div>
        </div>
        <div className="w-1/2 mb-2">
          <div className=" text-sm">Всего баллов:</div>
          <div className=" font-medium">1245</div>
        </div>
      </div>
      <div className="border border-gray-light rounded-lg px-4 py-3 text-sm">
        Мы работаем над тем, чтобы сделать рейтинг понятным для вас. Позже будет
        подробная информация о подсчете баллов :)
        <div className=" text-end text-sm font-medium">Команда Studuck</div>
      </div>
    </div>
  );
}
