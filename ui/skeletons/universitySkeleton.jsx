import ImageLike from "@/ui/image/ImageLike";

export default function UniversitySkeleton() {
  return (
    <div className="flex gap-3 px-4 py-3 w-full border border-gray-light rounded-lg h-[70px] mb-2 animate-pulse">
      <div className="w-11 m-auto bg-gray-light h-4 rounded"></div>
      <div className="w-12 h-12 bg-gray-light rounded"></div>
      <div className="w-full">
        <div className="flex items-start justify-between w-full">
          <div className="flex items-start w-full mb-3">
            <div className="w-12 h-5 bg-gray-light mr-2 rounded"></div>
            <div className="w-12 h-5 bg-gray-light mr-2 rounded"></div>
            <div className="w-5 h-5 bg-gray-light mr-2 rounded"></div>
            <div className="w-5 h-5 bg-gray-light rounded"></div>
          </div>

          <ImageLike onClick={(e) => e.preventDefault()} className=" bg-gray" />
        </div>
        <div className=" w-1/2 h-4 bg-gray-light rounded"></div>
      </div>
    </div>
  );
}
