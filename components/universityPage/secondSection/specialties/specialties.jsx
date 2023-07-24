import { SpecialtiesData } from "@/data";
import SpecialtiesCard from "./specialtiesCard";
import clsx from "clsx";

export default function Specialties({ className }) {
  return (
    <div className={clsx(className)}>
      {SpecialtiesData.map((item, id) => (
        <SpecialtiesCard key={id} data={item} />
      ))}
    </div>
  );
}
