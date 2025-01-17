import React from "react";
import BrandSelect from "./BrandSelect";
import ModelSelect from "./ModelSelect";
import SizeSelect from "./SizeSelect";
import { XIcon } from "lucide-react";

const SearchResultSidebar = ({
  setFilterOpen,
}: {
  setFilterOpen: (val: boolean) => void;
}) => {
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
      <div className="overflow-hidden md:h-[90vh] h-[88vh] relative overflow-y-auto">
        <div
          onClick={() => setFilterOpen(false)}
          className=" md:hidden absolute top-0 right-0 text-red-600"
        >
          <XIcon />
        </div>
        <div className=" flex flex-col gap-5 h-full mt-10 md:mt-0">
          <BrandSelect brands={watchBrands} />
          <ModelSelect models={watchBrands} />
          <SizeSelect sizes={watchBrands} />
        </div>
      </div>
    </div>
  );
};

export default SearchResultSidebar;
