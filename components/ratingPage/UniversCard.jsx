import ImageHint from "@/ui/image/ImageHint";
import ImageLike from "@/ui/image/ImageLike";
import Image from "next/image";
import Link from "next/link";

export default function UniversCard({ data }) {
  return (
    <Link
      href={`/university/${data?.link}`}
      className="flex gap-3 px-4 py-3 w-full border border-gray-light rounded-lg mb-2  transition-all hover:border-gray"
    >
      <div className="w-11 m-auto text-center">{data?.rating}</div>
      <div>
        <Image src={data?.img} width={50} height={50} alt={data?.link} />
      </div>
      <div className="w-full">
        <div className="flex items-start justify-between w-full">
          <div className="flex items-start w-full">
            <div className=" font-semibold mr-2 text-base leading-6">
              {data?.title}
            </div>
            <div className="leading-6 mr-2 text-sm text-gray">
              г. {data?.city}
            </div>
            {data?.state ? (
              <ImageHint name="russia" hint="Госсударствееный ВУЗ" />
            ) : (
              <ImageHint name="scholarship" hint="Частный ВУЗ" />
            )}
            {data?.arm && <ImageHint name="medal" hint="Военная кафедра" />}
            {data?.hostel && <ImageHint name="apartment" hint="Общежитие" />}
          </div>

          <ImageLike onClick={(e) => e.preventDefault()} className=" bg-gray" />
        </div>
        <div className=" text-gray text-sm">{data?.desc}</div>
      </div>
    </Link>
  );
}
