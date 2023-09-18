import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import countryRegionData from "country-region-data/dist/data-umd";
import { fetcher } from "@/lib/api";
import Image from "next/image";
import React from "react";
import ContactUs from "@/components/blocks/contactus";
import Banner from "@/components/blocks/banner";
import Information from "./information";
const Page = async ({ params }) => {
  const currentURL = `/performance-materials/${params.slug}/${params.rmslug}`;

  const category = await fetcher(
    `/rm-categories?filters[slug]=${params.slug}&populate[0]=certificateList `
  );
  const rawMaterials = await fetcher(
    `/raw-materials?sort[0]=productCode&filters[rm_category][slug][$eq]=${params.slug}&populate[certificates][populate]=*&populate[applications]=*`
  );

  const thCertificate = category[0].attributes.certificateList.data;

  const testRM = await fetcher(
    `/raw-materials?filters[slug]=${params.rmslug}&populate[applications]=*`
  );
  const banner = await fetcher(
    "/performance-materials-page?populate[banner][fields]=url"
  );

  const RMcountry = countryRegionData.find(
    (country) =>
      country.countryShortCode === testRM[0]?.attributes.countryOfOrigin
  );
  // console.log(testRM);
  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx
        paths={[
          { label: "Home", url: "/" },
          { label: "Performance Materials", url: "/performance-materials/" },
          {
            label: category[0].attributes.name,
            url: `/performance-materials/${params.slug}`,
          },
          {
            label: testRM[0].attributes.name,
            url: `/performance-materials/${params.slug}/${params.rmslug}`,
          },
        ]}
      />
      <Banner
        image={banner?.attributes.banner.data?.attributes.url}
        label={`${testRM[0].attributes.name}`}
      />
      <div className="responsive relative 2xl:px-6 md:px-4 px-2">
        {/* <h1 className="text-center font-extrabold 2xl:text-4xl text-2xl 2xl:mt-12 mt-4 ">
          {category[0].attributes.name}
        </h1> */}
        {/* <div className="border-t-4 border-green4wd 2xl:mt-4 mt-2 2xl:mb-12 mb-4"></div> */}
        {/* <h2 className="font-bold text-8xl">{testRM[0].attributes.name}</h2> */}
        <div className="2xl:grid 2xl:grid-cols-2 flex flex-col 2xl:mx-24 md:mx-20 mx-6 2xl:mt-24 mt-12  2xl:mb-24 mb-10 2xl:gap-32 gap-16">
          <div className="flex flex-col w-full">
            <Information title={"NAME"} desc={testRM[0].attributes.name} />
            <Information title={"INCI"} desc={testRM[0].attributes.INCI} />
            <Information title={"COUNTRY"} desc={RMcountry?.countryName} />
            <Information
              title={"DESCRIPTION"}
              desc={testRM[0].attributes.description}
            />
            <Information
              title={"BENEFITS"}
              desc={testRM[0].attributes.benefits}
            />
            <Information
              title={"CAS NO."}
              desc={testRM[0].attributes.CASNumber}
            />
            {/* <div className="h-auto w-full py-5 border-white border-2 flex flex-row items-center">
              <span className="text-white4wd font-extrabold 2xl:text-xl text-base w-1/3 text-center inline-block">
                APPLICATIONS
              </span>
              <span className="text-white4wd  font-normal 2xl:text-xl text-base  w-2/3 pr-4">
                {testRM[0].attributes.applications.map((application) => {
                  return application.text + " ";
                })}
              </span>
            </div> */}
          </div>
          <ContactUs header={"REQUEST QUOTE"} />
        </div>
      </div>
    </div>
  );
};

export default Page;
