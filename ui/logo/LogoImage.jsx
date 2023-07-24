import Image from "next/image";

export default function LogoImage({ className }) {
  return (
    <div className={className}>
      <Image src="/img/logo.svg" width={30} height={30} alt="Logo" />
    </div>
  );
}
