import React from "react";
import PlanCard from "./PlanCard";
import Link from "next/link";

type Props = {};

function OurPlans({}: Props) {
  return (
    <div className="flex flex-col items-center gap-y-10 w-full overflow-hidden">
      <h1 className="py-10 font-semibold text-3xl sm:text-4xli">Our Plans</h1>

      <div className="relative w-full flex justify-center items-center">
        {/* WAVE BACKGROUND */}
        <div className="absolute   top-36 left-1/2 -translate-x-1/2 z-0 hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1111"
            height="154"
            viewBox="0 0 1111 154"
            fill="none"
          >
            <path
              d="M1111 0.78984V78.3905C1070.58 73.6051 1046.64 107.594 1016.62 126.581C960.503 162.018 894.099 163.544 837.32 128.598C811.9 112.949 786.839 82.7103 756.248 78.5975C690.817 69.8286 672.769 119.234 621.264 140.937C581.381 157.724 531.77 157.957 491.579 141.713C439.255 120.605 420.772 69.7251 354.803 78.5975C324.187 82.7103 299.176 112.923 273.731 128.598C220.792 161.165 156.487 162.458 102.396 131.444C68.8871 112.276 43.16 73.7862 0 78.3905V0.78984C22.4248 -0.37417 45.6944 3.89387 66.5064 12.4817C119.138 34.184 139.848 88.1941 207.916 72.4929C240.759 64.9397 264.285 32.8648 294.287 17.474C344.41 -8.2377 407.205 -4.87501 455.459 22.9578C479.804 37.0035 503.227 65.0432 529.747 72.0531C599.582 90.5221 622.416 33.6408 677.71 11.7315C720 -5.03021 774.219 -3.68513 815.023 16.6204C844.693 31.3904 869.549 63.6981 901.011 72.0014C966.98 89.3839 988.048 39.2798 1037.56 15.8185C1060.24 5.08375 1085.86 -0.632839 1111 0.78984Z"
              fill="url(#paint0_linear_2002_1094)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2002_1094"
                x1="0"
                y1="77"
                x2="1111"
                y2="77"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B3FF00" />
                <stop offset="1" stopColor="#009245" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Plan Cards */}
        <div className="z-10 flex flex-col md:flex-row justify-center items-center gap-x-5">
          <Link href={`/plans/${1}`}>
            <PlanCard
              title="Therapeutic Diet"
              price="From: ₹ 1,500.00"
              svg={`/assets/phone1.svg`}
            />
          </Link>
          <Link href={`/plans/${2}`}>
            <PlanCard
              title="Customised Weight Loss/Muscle Gain Meal Plan"
              price="From: ₹ 1,500.00"
              svg={`/assets/phone2.svg`}
            />
          </Link>
          <Link href={`/plans/${3}`}>
            <PlanCard
              title="Customised Diet + Workout plan"
              price="From: ₹ 2,000.00"
              svg={`/assets/phone3.svg`}
              className="-left-14 bottom-0"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurPlans;
