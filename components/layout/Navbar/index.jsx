import Logo from "@/ui/logo";
import Button from "@/ui/button/Button";
import { NavBtn } from "@/data";
import NavList from "./NavList";
import ButtonInput from "@/ui/button/ButtonInput";

export default function Navbar() {
  return (
    <>
      <header className=" border-b border-b-gray-light h-14 mb-4">
        <div className=" flex justify-between items-center max-w-7xl mx-auto h-full">
          <div className="flex items-center gap-5">
            <Logo className="mr-5" />
            <NavList data={NavBtn} />
          </div>
          <div className="flex items-center gap-2">
            <ButtonInput text="Search..." shortcut="Ctrl+F" />
            <Button text="Регистрация" theme="light" className="h-8 text-sm" />
            <Button text="Войти" theme="dark" className="h-8 text-sm " />
          </div>
        </div>
      </header>
    </>
  );
}
