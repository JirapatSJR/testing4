import Banner from "@/components/blocks/banner";
import BreadcrumbsEx from "@/components/shared/materialTailwind/breadcrumbs";
import React from "react";
import GetInTouch from "./getintouch";
import Globe from "./globe";
import PageHeaderLine from "@/components/shared/pageHeaderLine";
import { fetcher } from "@/lib/api";

const ContactUs = async () => {
  const data = await fetcher(
    "/contact-us?populate[pinIcon][fields][0]=url&populate=pinlocation"
  );
  const banner = await fetcher("/contact-us?populate[banner][fields]=url");
  return (
    <div className="w-full flex justify-center items-center flex-col overflow-hidden">
      <BreadcrumbsEx
        paths={[
          { label: "Home", url: "/" },
          { label: "Contact Us", url: "/contact-us" },
        ]}
      />
      <Banner
        image={banner?.attributes.banner.data?.attributes.url}
        label={"Contact Us"}
      />
      <div className="responsive relative">
        <PageHeaderLine
          header={data?.attributes.title}
          desc={data?.attributes.titledesc}
        />
        <div className="2xl:mt-16 2xl:mb-44 md:mt-12 md:mb-36 mt-6 mb-14 flex flex-col 2xl:items-start items-center w-full">
          <GetInTouch />
          <Globe
            pinIcon={data.attributes.pinIcon.data}
            pinLocation={data.attributes.pinlocation}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
