import Image from "next/image";
import Link from "next/link";

export default function ButtonMenu({ name, link, image }) {
  return (
    <Link
      href={link}
      className=" flex items-center transition-all hover:bg-gray-light px-3 py-2 rounded-md mb-1 last:mb-0 text-sm"
    >
      {image != "no-image" && (
        <Image
          src={image}
          height={20}
          width={20}
          alt={image}
          className="mr-3"
        />
      )}
      {name}
    </Link>
  );
}
