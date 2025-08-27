import { FoodStripeProps } from "@/types";

export const foodMenuStripeData: FoodStripeProps[] = [
    {
        title: "India’s 1st pizza base made of oats & Sweet Potato",
        bgColor: "bg-[#6A331C]",
        titleColor:"text-white",
        fontWeight:"font-[700]",
        leftImage: null,
        rightMainImage: "/assets/food-menu/pizza.png",
        rightTopRightImage: "/assets/food-menu/sweet-patato1.png",
        rightBottomLeftImage: "/assets/food-menu/sweet-patato2.png"
    },
    {
        title: "Zero Carb dimsums made of almond flour",
        titleColor:"text-white",
        bgColor: "bg-[#066834]",
        fontWeight:"font-[700]",
        leftImage: "/assets/food-menu/almond.png",
        rightMainImage: "/assets/food-menu/dimsums.png",
        rightTopRightImage: "/assets/food-menu/flying-vegies.png",
        rightBottomLeftImage: "/assets/food-menu/flying-vegies.png",
        highlightWords: ["dimsums"],
        highlightColor: "text-[#60F6A6]"
    },{
        title: "Low fat Butter Chicken without butter and cream, watermelon seeds instead of cashew paste",
        bgColor: "bg-[#E2DF25]",
        titleColor:"text-[#413C36] font-[400]",
        fontWeight:"font-[500]",
        leftImage: null,
        rightMainImage: "/assets/food-menu/chicken.svg",
        rightTopRightImage: "/assets/food-menu/cashew.svg",
        rightTopLeftImage: "/assets/food-menu/cashew.svg",
        rightBottomLeftImage: "/assets/food-menu/tomato.svg",
        stripeHeight:"md:h-[400px]",
        highlightColor:"text-white font-[700]",
        highlightWords:["butter","chicken"]
    }
    ,{
        title: "High Protein Burgers with Lean Chicken Breast and whole Wheat Buns",
        bgColor: "bg-[#E22525]",
        titleColor:"text-white",
        fontWeight:"font-[500]",
        leftImage: "/assets/transformations/mashroom.svg",
        rightMainImage: "/assets/food-menu/burger.svg",
        rightTopRightImage: "/assets/food-menu/flying-vegies.png",
        rightTopLeftImage: "/assets/food-menu/flying-vegies.png",
        rightBottomLeftImage: "/assets/food-menu/img1.svg",
        stripeHeight:"md:h-[400px]",
        stopSpin:true,
        highlightColor:"text-[#FFB9B9]",
        highlightWords:["burgers"]
        
    }
]