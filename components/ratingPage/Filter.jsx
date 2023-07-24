import clsx from "clsx";

export default function Filter({ data, className }) {
  return (
    <div className={clsx("", className)}>
      <h2 className=" font-medium text-base">Фильтры</h2>
      <ul className="">
        {data.map((item, id) => {
          return (
            <li
              key={id}
              className=" border-b last:border-b-0 border-b-gray-light py-2 font-medium  text-sm"
            >
              {item.title}
              <ul className=" font-normal">
                {item.items.map((data, id) => (
                  <li key={id} className="ml-3 my-1  text-sm">
                    {data}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
