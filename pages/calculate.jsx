import Menu from "@/components/menu/Menu";
import Meta from "@/components/meta/Meta";
import Filter from "@/components/ratingPage/Filter";
import Calculator from "@/components/universityPage/secondSection/calculator/calculator";
import { filterData } from "@/data";

export default function CalculatePage() {
  return (
    <div className="flex">
      <Meta title="Studuck" />
      <Menu className=" w-52" />
      <Calculator className="w-3/5 mx-5" />
      <Filter data={filterData} className="w-1/5" />
    </div>
  );
}
