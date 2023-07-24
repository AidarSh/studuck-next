import { clsx } from "clsx";

export default function Button({ theme, text, className }) {
  return (
    <button
      className={clsx(
        "rounded-lg font-medium",
        theme == "dark" && " bg-black text-white px-3",
        theme == "light" && " border border-gray text-black px-3",
        className
      )}
    >
      {text}
    </button>
  );
}
