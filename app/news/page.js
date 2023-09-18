import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import React from "react";
import { fetcher } from "@/lib/api";
import Banner from "@/components/blocks/banner";
import Entry from "./entry";

const News = async () => {
  const currentURL = "/news";
  const data = await fetcher(
    "/blogs?fields[0]=title&fields[1]=publishedAt&fields[3]=summary&populate[thumbnail][fields][1]=url"
  );
  const banner = await fetcher("/news-page?populate[banner][fields]=url");
  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx
        paths={[
          { label: "Home", url: "/" },
          { label: "News", url: currentURL },
        ]}
      />
      <Banner
        label={"News"}
        image={banner?.attributes.banner?.data.attributes.url}
      />
      <div className="responsive relative">
        <div className="2xl:mt-24 md:mt-16 mt-12  2xl:mb-48 md:mb-24 mb-16 2xl:px-20 md:px-12 px-6 flex justify-center">
          <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-4 md:gap-4 gap-0 w-full relative">
            {data?.map((temp) => {
              return (
                <div key={temp.id}>
                  <Entry href={`${currentURL}/${temp.id}`} temp={temp}/>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
