import React from "react";
import SupportServicesCarousel from "./SupportServicesCarousel";
import SectionTitle from "../Titles/SectionTitle";

type Props = {};

function SupportServices({}: Props) {
  return (
    <div>
      <SectionTitle name="Support Services" />
      <div className="flex justify-center">
        <h2>Support Services</h2>
      </div>
      <SupportServicesCarousel />
    </div>
  );
}

export default SupportServices;
