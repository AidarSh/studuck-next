import Menu from "@/components/menu/Menu";
import Meta from "@/components/meta/Meta";
import Filter from "@/components/ratingPage/Filter";
import Specialties from "@/components/universityPage/secondSection/specialties/specialties";
import { filterData } from "@/data";

export default function SpecialtiesPage() {
  return (
    <div className="flex">
      <Meta title="Studuck" />
      <Menu className=" w-52" />
      <Specialties className="w-3/5 mx-5" />
      <Filter data={filterData} className="w-1/5" />
    </div>
  );
}
