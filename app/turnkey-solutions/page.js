import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import { fetcher } from "@/lib/api";
import React from "react";
import TurnkeyBlock from "../../components/blocks/turnkeyBlocks";
import FormulaOptions from "../../components/blocks/formulaOptions";
import Banner from "@/components/blocks/banner";
import EnquireButton from "@/components/blocks/enquire";

const page = async () => {
  var data = await fetcher("/turnkey-page?populate=deep,4");
  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx
        paths={[{ label: "Home", url: "/"}, { label: "Turnkey Solutions", url: "/turnkey-solutions" }]}
      />
      {data?.attributes.banner.data && (
        <Banner image={data?.attributes.banner?.data.attributes.url} />
      )}
      <div className="responsive relative">
        <div className="flex items-center justify-center">
          <div className="absolute 2xl:w-1/2 w-2/3 bg-black bg-opacity-80">
            <div className=" 2xl:my-20 md:my-12 my-6 2xl:px-12 md:px-6 px-2 flex flex-col items-center whitespace-pre-wrap">
              <div className="font-bold 2xl:text-4xl md:text-xl text-base text-center tracking-widest uppercase">
                {data?.attributes.title}
              </div>
              <div className="2xl:px-24 md:px-12 px-4 2xl:text-xl md:text-base text-xs 2xl:mt-8 md:mt-4 mt-2 text-center text-white4wd">
                {data?.attributes.titleDesc}
              </div>
            </div>
          </div>
          <video width="100%" autoPlay loop={true} muted>
            <source
              src={data?.attributes.video?.data.attributes.url}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="" />
      <TurnkeyBlock blocks={data?.attributes.turnkeysBlocks} />
      <FormulaOptions
        header={data?.attributes.bottomText}
        formulaOptions={data?.attributes.formulaOptions}
      />
      <div className="md:mt-16 mt-8 md:mb-16 mb-4 w-full">
        <EnquireButton text="GET IN TOUCH"/>
      </div>
    </div>
  );
};

export default page;
