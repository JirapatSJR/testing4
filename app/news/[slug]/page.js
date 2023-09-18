import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { fetcher } from "@/lib/api";
import Banner from "@/components/blocks/banner";
import PageHeaderLine from "@/components/shared/pageHeaderLine";
import { DateStrapi } from "@/components/date";
import CKposter from "@/components/shared2/CKposter";

const BeautyPackaging = async ({ params }) => {
  const currentURL = `/news/${params.slug}`;
  const data = await fetcher(`/blogs/${params.slug}?populate=*`);
  const banner = await fetcher("/news-page?populate[banner][fields]=url");

  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx
        paths={[
          { label: "Home", url: "/" },
          { label: "News", url: "/news" },
          { label: data.attributes.title, url: currentURL },
        ]}
      />
      <Banner
        label={"News"}
        image={banner?.attributes.banner?.data.attributes.url}
      />
      <div className="responsive relative">
        {/* <PageHeaderLine
          header={"List of Segments"}
          desc={`Harness the potential of our performance materials. Elevate your beauty products with our superior ingredients. Transform your formulations now.`}
        /> */}
        <div className="mt-32 mb-48 px-24 flex-col justify-center">
          <h1 className="font-extrabold text-4xl text-white4wd mb-8">
            {data.attributes.title}
          </h1>
          {/* <div
            className="w-full relative text-white4wd"
            dangerouslySetInnerHTML={{
              __html: data.attributes.ckeditor_content,
            }}
          ></div> */}
          <div className="text-white">
            <CKposter content={data.attributes.ckeditor_content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyPackaging;
