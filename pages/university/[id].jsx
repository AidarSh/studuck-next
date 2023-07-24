import Menu from "@/components/menu/Menu";
import Meta from "@/components/meta/Meta";
import UniversityPage from "@/components/universityPage";
import { getUniversityByLink } from "@/service/university/getUniversity";
import { useRouter } from "next/router";

export default function University() {
  const router = useRouter();
  const { isLoading, data, error, isFetching } = getUniversityByLink(
    router.query.id
  );

  return (
    <div className="flex">
      <Meta title="Studuck" />
      <Menu className=" w-52" />
      {isLoading || isFetching ? (
        <div>Loading...</div>
      ) : (
        <UniversityPage data={data[0]} className="w-3/5 mx-5" />
      )}
    </div>
  );
}
