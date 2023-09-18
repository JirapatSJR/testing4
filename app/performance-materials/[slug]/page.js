import Banner from "@/components/blocks/banner";
import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import RawMaterialRows from "@/components/shared/rawmaterialRow";
import RawMaterialRow from "@/components/shared/rawmaterialRow";
import { fetcher } from "@/lib/api";
import Image from "next/image";
import React from "react";
const Page = async ({ params }) => {
  const currentURL = `/performance-materials/${params.slug}`;
  const category = await fetcher(
    `/rm-categories?filters[slug]=${params.slug}&populate[0]=certificateList `
  );
  const rawMaterials = await fetcher(
    `/raw-materials?filters[rm_category][slug][$eq]=${params.slug}&populate[certificates][populate]=*&populate[applications]=*`
  );
  const banner = await fetcher(
    "/performance-materials-page?populate[banner][fields]=url"
  );
  const thCertificate = category[0].attributes.certificateList.data;
  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx
        paths={[
          { label: "Home", url: "/" },
          { label: "Performance Materials", url: "/performance-materials" },
          { label: category[0].attributes.name, url: currentURL },
        ]}
      />
      <Banner
        image={banner?.attributes.banner.data?.attributes.url}
        label={`${category[0].attributes.name}`}
      />
      <div className="responsive relative 2xl:px-6 md:px-4 px-2">
        {/* <h1 className="text-center font-extrabold 2xl:text-4xl text-2xl 2xl:mt-12 mt-4 ">
          {category[0].attributes.name}
        </h1> */}
        {/* <div className="border-t-4 border-green4wd 2xl:mt-4 mt-2 2xl:mb-12 mb-4"></div> */}
        <div className=" 2xl:mt-24 md:mt-12 mt-8 table2 2xl:text-base text-xs 2xl:mb-40 md:mb-24 mb-12 overflow-x-scroll">
          <table className="w-full bg-white bg-opacity-0" id="product">
            <thead className="bg-green4wd text-white ">
              <tr>
                <th rowSpan={2} className="th-bottom">
                  Name
                </th>
                <th rowSpan={2} className="th-bottom">
                  Product Code
                </th>
                <th rowSpan={2} className="th-bottom">
                  INCI
                </th>
                <th rowSpan={2} className="th-bottom">
                  CAS No.
                </th>
                <th colSpan={thCertificate.length}>Certifications</th>
                <th rowSpan={4} colSpan={4} className="th-bottom">
                  Applications
                </th>
              </tr>
              <tr>
                {thCertificate?.map((certificate) => {
                  return <th>{certificate.attributes.name}</th>;
                })}
              </tr>
            </thead>
            <RawMaterialRows
              thCertificate={thCertificate}
              rawMaterials={rawMaterials}
              currentURL={currentURL}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
