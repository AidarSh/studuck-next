import clsx from "clsx";
import UniversCard from "./UniversCard";
import { getUniversityAll } from "@/service/university/getUniversity";
import UniversitySkeleton from "@/ui/skeletons/universitySkeleton";

export default function UniversCardList({ className }) {
  const { isLoading, data, error, isFetching } = getUniversityAll();

  if (isLoading || isFetching)
    return (
      <div className={clsx(className)}>
        {[...Array(6)].map((_, id) => (
          <UniversitySkeleton key={id} />
        ))}
      </div>
    );

  return (
    <div className={clsx(className)}>
      {data.map((item, id) => (
        <UniversCard key={id} data={item} />
      ))}
    </div>
  );
}
