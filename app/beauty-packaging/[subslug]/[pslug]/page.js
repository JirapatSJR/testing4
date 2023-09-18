import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import React from "react";
import Banner from "@/components/blocks/banner";
import { fetcher } from "@/lib/api";
import ProductImages from "./productImages";
import ContactUs from "@/components/blocks/contactus";
import CKposter from "@/components/shared2/CKposter";

const BeautyPackaging = async ({ params }) => {
  const currentURL = `/beauty-packaging/${params.subslug}/${params.pslug}`;
  const banner = await fetcher(
    "/beauty-packaging-page?populate[banner][fields]=url"
  );
  const product = await fetcher(`/products/${params.pslug}?populate=deep`);
  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx
        paths={[
          { label: "Home", url: "/" },
          { label: "Beauty Packaging", url: "/beauty-packaging" },
          {
            label:
              product?.attributes.product_sub_category.data.attributes.name,
            url: `/beauty-packaging/${params.subslug}`,
          },
          {
            label: product?.attributes.name,
            url: currentURL,
          },
        ]}
      />
      <Banner
        image={banner?.attributes.banner.data?.attributes.url}
        label={product?.attributes.name}
      />
      <div className="responsive relative">
        <div className="md:mt-12 mt-6 md:mb-14 mb-8 md:px-8 px-4  flex flex-col items-center  relative">
          <div className="flex  justify-center 2xl:max-w-[1200px] lg:max-w-[1000px] sm:max-w-[500px] max-w-[400px] w-full relative">
            <div className="grid lg:grid-cols-2 grid-cols-1 relative 2xl:gap-8 lg:gap-4 gap-3">
              <ProductImages images={product?.attributes.images.data} />
              <div className="flex justify-center 2xl:w-[500px] lg:w-[400px] sm:w-[500px] w-[350px] ">
                <div className="flex flex-col justify-start ">
                  <div className="lg:mt-0 mt-4">
                    <h3 className="font-extrabold 2xl:text-3xl text-lg uppercase">
                      PRODUCT DESCRIPTION
                    </h3>
                    <span className="text-white4wd 2xl:text-xl text-sm mt-4 relative">
                      <CKposter
                        content={product?.attributes.productDescription}
                      />
                    </span>
                  </div>
                  {product?.attributes.technicalFeatures[0] && (
                    <div className="2xl:mt-8 lg:mt-6 mt-4">
                      <h3 className="font-extrabold 2xl:text-3xl text-lg uppercase">
                        Technical Features
                      </h3>
                      <span>
                        {product?.attributes.technicalFeatures.map(
                          (additionalDesc) => {
                            return (
                              <div
                                className="2xl:mt-4 mt-1 lg:pl-4"
                                key={additionalDesc.title}
                              >
                                {additionalDesc.title && (
                                  <span className="text-white4wd 2xl:text-xl text-sm font-bold">
                                    {`${additionalDesc.title}: `}
                                  </span>
                                )}
                                <span className="text-white4wd 2xl:text-xl text-sm">
                                  {additionalDesc.desc}
                                </span>
                              </div>
                            );
                          }
                        )}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="relative w-full 2xl:mt-8 lg:mt-6 mt-4">
                <ContactUs header={"REQUEST MORE INFORMATION"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyPackaging;
