import Link from "next/link";

export default function NavList({ data }) {
  return (
    <>
      {data.map((item, id) => (
        <Link key={id} href={item.link} className="text-gray text-sm">
          {item.name}
        </Link>
      ))}
    </>
  );
}
