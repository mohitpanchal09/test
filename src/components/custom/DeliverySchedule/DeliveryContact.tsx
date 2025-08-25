import React from "react";

type Props = {};

function DeliveryContact({}: Props) {
  return (
    <div className="py-20 font-semibold">
      <div className="text-center">
        *<span className="text-[#009245]">Double Slot Delivery available </span>
        only at selected locations.
      </div>
      <div className="text-center">
        Kindly WhatsApp us at
        <span className="text-[#009245] underline p-1"> +91 9560702561 </span> to know your
        exact delivery slot and timings.
      </div>
    </div>
  );
}

export default DeliveryContact;
