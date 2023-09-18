import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import { fetcher } from "@/lib/api";
import React from "react";
import Link from "next/link";
import Banner from "@/components/blocks/banner";

const page = async () => {
  const currentURL = "/careers";
  const data = await fetcher("/about-us?populate[aboutusBlock][populate]");
  const banner = await fetcher("/about-us?populate[banner][fields]=url");
  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx paths={[{ label: "Home", url: "/"}, { label: "Careers", url: currentURL }]} />
      <Banner
        label={"Careers"}
        image={banner?.attributes.banner.data?.attributes.url}
      />
      {/* <SubTitle title={"About us"} /> */}
      <div className="relative responsive">
        <div className=" text-green4wd mt-24 mb-24 px-32">
          <div className="">
            <h3 className="font-extrabold text-4xl">
              {data?.attributes.teamTitle}
            </h3>
            <div className="mt-8 grid-cols-2 grid gap-8">
              <div className="text-xl text-white4wd w-full leading-8 whitespace-pre-wrap">
                {data?.attributes.teamDesc}
                <Link className="mt-32" href={"/contact-us"}>
                  <div className="w-60 h-16 rounded-lg bg-green4wd text-white flex items-center justify-center text-xl font-bold mt-24">
                    GET IN TOUCH
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
