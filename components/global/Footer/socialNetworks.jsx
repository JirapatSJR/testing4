import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialNetworks = ({ socialNetworks }) => {
  return (
    <div className="flex items-center gap-3 mt-2 pl-2">
      {socialNetworks.map((sns) => {
        return (
          <Link href={sns.href} key={sns.id}>
            <Image
              src={sns.logo.data.attributes.url}
              width={36}
              height={36}
              alt={sns.href}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialNetworks;
