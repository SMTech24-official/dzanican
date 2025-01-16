import React from "react";
import BrandSelect from "./BrandSelect";
import ModelSelect from "./ModelSelect";
import SizeSelect from "./SizeSelect";

const SearchResultSidebar = () => {
  const watchBrands = [
    "Rolex",
    "Omega",
    "Tag Heuer",
    "Breitling",
    "Casio",
    "Citizen",
    "Seiko",
    "IWC",
    "IWC Schaffhausen",
    "Patek Philippe",
    "Audemars Piguet",
    "Longines",
    "Tudor",
    "Hamilton",
  ];
  return (
    <div>
      <div className="overflow-hidden h-[83vh] overflow-y-auto flex flex-col gap-5">
        <BrandSelect brands={watchBrands} />
        <ModelSelect models={watchBrands} />
        <SizeSelect sizes={watchBrands} />
      </div>
    </div>
  );
};

export default SearchResultSidebar;
