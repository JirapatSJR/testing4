import { fetcher } from "@/lib/api";
import React from "react";
import FooterColumns from "./footerColumns";

const Footer = async () => {
  const data = await fetcher(
    "/global?populate[footerColumns][populate]=*&populate[socialNetworks][populate]=*"
  );
  // console.log(data.attributes.socialNetworks[1].logo.data.attributes);
  return (
    <div className="h-52 w-full bg-black4wd text-green4wd 2xl:border-t-4 border-t-2 border-green4wd  flex justify-center ">
      <div className="responsive w-full">
        <div className=" flex flex-wrap px-12 pt-8 2xl:text-base text-sm ">
          <FooterColumns
            footerColumns={data?.attributes.footerColumns}
            socialNetworks={data?.attributes.socialNetworks}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
