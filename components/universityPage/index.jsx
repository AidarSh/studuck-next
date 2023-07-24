import clsx from "clsx";
import MainSection from "./mainSection";
import SecondSection from "./secondSection/secondSection";

export default function UniversityPage({ data, className }) {
  return (
    <div className={clsx(className)}>
      <MainSection data={data} />
      <SecondSection />
    </div>
  );
}
