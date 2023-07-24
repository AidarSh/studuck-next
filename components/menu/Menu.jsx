import { MenuBtn } from "@/data";
import ButtonMenu from "@/ui/button/ButtonMenu";
import clsx from "clsx";
import Image from "next/image";

export default function Menu({ className }) {
  return (
    <div className={clsx("flex flex-col", className)}>
      <div className="flex flex-col border-b border-gray-light pb-2">
        {MenuBtn.map((item) => (
          <ButtonMenu
            name={item.name}
            link={item.link}
            key={item.link}
            image={item.image}
          />
        ))}
      </div>
      <div className="py-2">
        <ButtonMenu name="Избранное >" image="no-image" link="/favotite" />
        <div className="">
          <ButtonMenu
            name="КФУ"
            image="https://kpfu.ru/docs/F18680852261/img425646072.jpg"
            link={"/kfu"}
          />
          <ButtonMenu
            name="КАИ"
            image="data:image/png;base64,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"
            link={"/kfu"}
          />
        </div>
      </div>
    </div>
  );
}
