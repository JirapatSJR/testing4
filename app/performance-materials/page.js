import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import Image from "next/image";
import React from "react";
import Segment from "./segment";
import Link from "next/link";
import { fetcher } from "@/lib/api";
import Banner from "@/components/blocks/banner";
import PageHeaderLine from "@/components/shared/pageHeaderLine";
import EnquireButton from "@/components/blocks/enquire";

const BeautyPackaging = async () => {
  const currentURL = "/performance-materials";
  const data = await fetcher(
    "/performance-materials-page?populate[rm_categories]=name,slug&populate[banner][fields]=url"
  );
  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx
        paths={[
          { label: "Home", url: "/" },
          { label: "Performance Materials", url: "/performance-materials" },
        ]}
      />
      <Banner
        label={data?.attributes.pagename}
        image={data?.attributes.banner.data?.attributes.url}
      />
      <div className="responsive relative">
        <PageHeaderLine
          header={data?.attributes.title}
          desc={data?.attributes.titledesc}
        />
        <div className="grid 2xl:grid-cols-6 md:grid-cols-4 grid-cols-2 2xl:mt-32 md:mt-24 mt-10 2x:px-24 md:px-14 px-8">
          {data?.attributes.rm_categories.data?.map((rmcategory) => {
            return (
              <Segment
                href={currentURL + "/" + rmcategory.attributes.slug}
                label={rmcategory.attributes.name}
              />
            );
          })}
        </div>
        <div className="2xl:mt-40 md:mt-20 mt-8 2xl:mb-24 md:mb-8 mb-2 ">
           <EnquireButton />
        </div>
      </div>
    </div>
  );
};

export default BeautyPackaging;
