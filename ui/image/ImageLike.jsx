import Image from "next/image";
import { useState } from "react";

export default function ImageLike() {
  const [like, setLike] = useState(false);

  const btnClick = (e) => {
    setLike(!like);
    e.preventDefault();
  };

  return (
    <Image
      src={like ? "/img/like.png" : "/img/likeEmpty.png"}
      height={20}
      width={20}
      alt="arm"
      className=""
      onClick={(e) => btnClick(e)}
    />
  );
}
