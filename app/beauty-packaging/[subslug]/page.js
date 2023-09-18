import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import React from "react";
import Banner from "@/components/blocks/banner";
import { fetcher, metafetcher } from "@/lib/api";
import ProductThumbnail from "./productThumbnail";
import { Filter } from "./filters";
import Categories from "./categories";
import { Pagination } from "./pagination";

const makeFetcherString = ({
  isSortAsc = true,
  isSortPriority = true,
  isSortID = true,
  pageLimit = 12,
  subslug = null,
  searchParams = null
}) => {
  //Make base String
  var string = `/products?populate=thumbnail,product_sub_category`;
  //Add Sorting Priority
  string = string + `${isSortPriority ? `&sort[0]=priority:desc` : ""}`;
  //Add Sorting ID or Name
  string =
    string +
    `&sort[1]=${isSortID ? "id" : "name"}${isSortAsc ? ":asc" : ":desc"}`;
  //Add Current Page
  string =
    string +
    `&pagination[limit]=${pageLimit}&pagination[start]=${searchParams['page'] ? searchParams['page']*pageLimit : 0}&pagination[withCount]=true`;
  //remove page from params
  delete searchParams['page'];

  //Add Category
  string =
    string +
    `${subslug ? `&filters[product_sub_category][slug][$eq]=${subslug}` : ``}`;
  
  //Add Filters from Search Params
  Object.keys(searchParams).forEach((query,i)=>{
    string= string + `&filters[$and][${i}][productFilters][filters][id][$in]=${searchParams[query]}`
  })
  return string;
};


const BeautyPackaging = async ({ params, searchParams }) => {
  const currentURL = `/beauty-packaging/${params.subslug}`;
  const banner = await fetcher(
    "/beauty-packaging-page?populate[banner][fields]=url"
  );

  const fetch = await metafetcher(makeFetcherString({
    subslug: params.subslug,
    isSortPriority: true,
    searchParams: searchParams
  }));
  const meta = fetch.meta;
  const products = fetch.data;
  const productCategories = await fetcher(`/product-sub-categories`);
  const beautyPackagingPage = await fetcher(
    "/beauty-packaging-page?populate[0]=filter_types&populate[1]=filter_types.filters"
  );
  const filterTypes = beautyPackagingPage.attributes.filter_types.data;
  const currentCategoryIndex = productCategories.findIndex((object) => {
    return object.attributes.slug === params.subslug;
  });
  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx
        paths={[
          { label: "Home", url: "/" },
          { label: "Beauty Packaging", url: "/beauty-packaging" },
          {
            label: productCategories[currentCategoryIndex]?.attributes.name,
            url: currentURL,
          },
        ]}
      />
      <Banner
        image={banner?.attributes.banner.data?.attributes.url}
        label={productCategories[currentCategoryIndex]?.attributes.name}
      />
      <div className="responsive relative">
        <div className="2xl:my-12 my-2 md:px-8 px-2 md:min-h-[900px] min-h-[600px] h-full">
          <div className="flex relative w-full 2xl:flex-row flex-col">
            <div className="2xl:w-[420px] w-full flex 2xl:flex-col md:flex-row flex-col 2xl:border-r-2 2xl:border-b-0 border-r-0 border-b-2 border-dashed border-green4wd 2xl:pb-24 pb-0 2xl:py-0 md:py-4 ">
                <Categories
                  productCategories={productCategories}
                  subslug={params.subslug}
                />
                <Filter filters={filterTypes} />
            </div>
            <div className="w-full flex flex-col justify-between md:px-6 px-1 py-8">
              <div className="grid grid-cols-3 w-auto justify-items-center">
                {products?.map((product) => {
                  return (
                    <div key={product.attributes.slug}>
                      <ProductThumbnail product={product} url={currentURL} />
                    </div>
                  );
                })}
              </div>
                <Pagination meta={meta}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyPackaging;
