import ImageHint from "@/ui/image/ImageHint";
import ImageLike from "@/ui/image/ImageLike";
import Image from "next/image";

export default function MainSection({ data }) {
  return (
    <>
      <div className="border border-gray-light rounded-lg px-4 py-3 mb-2">
        <div className="flex gap-3 w-full mb-4">
          {/* <div className="w-11 m-auto text-center">{data?.rating}</div> */}
          <div>
            <Image src={data?.img} width={50} height={50} alt={data?.link} />
          </div>
          <div className="w-full">
            <div className="flex items-start justify-between w-full">
              <div className="flex items-start w-full">
                <div className=" font-semibold mr-2 text-lg">{data?.title}</div>
                <div className="leading-7 mr-2 text-sm text-gray">
                  г. {data?.city}
                </div>
                {data?.state ? (
                  <ImageHint name="russia" hint="Госсударствееный ВУЗ" />
                ) : (
                  <ImageHint name="scholarship" hint="Частный ВУЗ" />
                )}
                {data?.arm && <ImageHint name="medal" hint="Военная кафедра" />}
                {data?.hostel && (
                  <ImageHint name="apartment" hint="Общежитие" />
                )}
              </div>

              <ImageLike
                onClick={(e) => e.preventDefault()}
                className=" bg-gray"
              />
            </div>
            <div className=" text-sm text-gray">{data?.desc}</div>
          </div>
        </div>
        <div>
          <div className=" font-medium mb-1 text-sm">Общая информация</div>
          <div className="flex flex-col flex-wrap h-20 mx-3 gap-1">
            <div className="text-sm ">Место в рейтинге: 1</div>
            <div className="text-sm ">Госсударственный ВУЗ</div>
            <div className="text-sm ">Военная кафедра</div>
            <div className=" text-sm">Средний балл ЕГЭ: 195</div>
            <div className="text-sm ">Средняя стоимость: 195 000</div>
            <div className=" text-sm">Средняя стоимость: 195 000</div>
          </div>
        </div>
      </div>
    </>
  );
}
