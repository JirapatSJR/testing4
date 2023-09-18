import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import { fetcher } from "@/lib/api";
import React from "react";
import Blocks from "./components/blocks";
import Banner from "@/components/blocks/banner";
import PageHeaderLine from "@/components/shared/pageHeaderLine";
import EnquireButton from "@/components/blocks/enquire";

const page = async () => {
  const currentURL = "/about-us";
  const data = await fetcher("/about-us?populate[aboutusBlock][populate]");
  const banner = await fetcher("/about-us?populate[banner][fields]=url");
  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx
        paths={[
          { label: "Home", url: "/" },
          { label: "About us", url: "/about-us" },
        ]}
      />
      <Banner
        label={"About us"}
        image={banner?.attributes.banner.data?.attributes.url}
      />
      {/* <SubTitle title={"About us"} /> */}
      <div className="relative responsive">
        <PageHeaderLine
          header={data?.attributes.Title}
          desc={data?.attributes.titleDesc}
        />
        <div className=" text-green4wd 2xl:mt-24 md:mt-16 mt-8 2xl:mb-24 md:mb-16 mb-2 2xl:px-32 md:px-16 px-8">
          <h1 className="font-extrabold 2xl:text-5xl md:text-2xl text-sm md:mb-16 mb-4">
            {data?.attributes.blocktitle}
          </h1>
          <Blocks blocks={data?.attributes.aboutusBlock} />
          <div className="">
            <h3 className="font-extrabold 2xl:text-4xl md:text-2xl text-lg">
              {data?.attributes.teamTitle}
            </h3>
            <div className="md:mt-8 mt-3 2xl:grid-cols-2  grid-cols-1 grid md:gap-8 gap-4">
              <div className="md:text-xl text-sm text-white4wd w-full md:leading-8 leading-4 whitespace-pre-wrap">
                {data?.attributes.teamDesc}
              </div>
            </div>

            <div className="2xl:mt-40 md:mt-32 mt-14 2xl:mb-24 md:mb-8 mb-4 ">
              <EnquireButton text="GET IN TOUCH" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
