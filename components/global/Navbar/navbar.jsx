import { fetcher } from "@/lib/api";
import React from "react";
import Logo from "./logo";
import NavLinks from "./navlink";
import SearchBar from "./searchbar";
import { headers } from "next/headers";

const NavBar = async () => {
  const headerList = headers();
  const data2 = await fetcher("/global?populate[navigation][populate]=*");
  const dataSearch = await fetcher(
    `/products?filters[name][$containsi]=${headerList}`
  );
  console.log(dataSearch);
  return (
    <nav className="2xl:h-32 md:h-24 h-20  w-full 2xl:border-b-4 border-b-2 border-green4wd flex justify-center md:px-8 px-6 ">
      <div className="responsive w-full flex items-center justify-between 2xl:text-base text-sm relative">
        <Logo
          logoButton={data2?.attributes.navigation.LogoButton}
          logoImage={data2?.attributes.navigation.LogoImage}
        />
        <NavLinks
          links={data2?.attributes.navigation.links}
          navIcon={data2?.attributes.navigation.navIcon}
        />
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
