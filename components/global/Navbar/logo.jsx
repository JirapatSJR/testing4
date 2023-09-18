import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({
  logoButton = undefined,
  logoImage = undefined,
}) {
  return (
    <Link href={"/"} className="2xl:w-[86px] sm:w-[62px] w-[50px] ">
      <Image
        key={3}
        src={logoImage?.data.attributes.formats.thumbnail.url}
        width={86}
        height={86}
        alt="logo"
        priority={false}
      />
    </Link>
  );
}
