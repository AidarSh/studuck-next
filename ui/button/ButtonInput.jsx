export default function ButtonInput({ shortcut, text, className }) {
  return (
    <button className=" flex items-center justify-between w-52 h-8 rounded-lg bg-gray-light text-gray px-2">
      <div className="text-gray text-sm">{text}</div>
      <div className=" text-sm  px-1 rounded bg-white">{shortcut}</div>
    </button>
  );
}
