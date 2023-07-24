import Image from "next/image";

export default function ImageHint({ name, hint }) {
  return (
    <Image
      src={`/img/${name}.png`}
      height={20}
      width={20}
      title={hint}
      alt="arm"
      className="mr-1 "
    />
  );
}
