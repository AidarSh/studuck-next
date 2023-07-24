import clsx from "clsx";
import LogoImage from "./LogoImage";

export default function Logo({ className }) {
  return (
    <div className={clsx("flex items-center", className)}>
      <LogoImage className="mr-2" />
      <div className=" font-semibold text-2xl tracking-tighter	">STUDUCK</div>
    </div>
  );
}
