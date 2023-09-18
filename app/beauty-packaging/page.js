import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import React from "react";
import CatalogLogo from "./catalogLogo";
import Banner from "@/components/blocks/banner";
import PageHeaderLine from "@/components/shared/pageHeaderLine";
import { fetcher } from "@/lib/api";

const BeautyPackaging = async () => {
  const currentURL = "/beauty-packaging";
  const data = await fetcher(
    "/beauty-packaging-page/?populate[product_sub_categories][fields]=name,slugs&populate[product_sub_categories][populate][icon][fields]=url"
  );
  const banner = await fetcher(
    "/beauty-packaging-page?populate[banner][fields]=url"
  );

  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx
        paths={[
          { label: "Home", url: "/" },
          { label: "Beauty Packaging", url: "/beauty-packaging" },
        ]}
      />
      <Banner
        label={data?.attributes.pagename}
        image={banner?.attributes.banner.data?.attributes.url}
      />
      <div className="responsive relative">
        <PageHeaderLine
          header={data?.attributes.title}
          desc={data?.attributes.titledesc}
        />
        <div className="flex flex-row flex-wrap items-center justify-center 2xl:gap-20 md:gap-12 gap-6 2xl:mt-32 md:mt-20 mt-12 2xl:mb-32 md:mb-24 mb-16  w-full 2xl:px-20 md:px-8 px-4">
          {data?.attributes.product_sub_categories.data?.map((category) => {
            return (
              <CatalogLogo
                key={category.attributes.slug}
                label={category.attributes.name}
                href={
                  currentURL +
                  "/" +
                  category.attributes.slug
                }
                img={category.attributes.icon.data?.attributes.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BeautyPackaging;
