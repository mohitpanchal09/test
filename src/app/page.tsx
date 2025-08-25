import Banner from "@/components/custom/Banners/Banner";
import FloatingDish from "@/components/custom/Banners/FloatingDish";
import Title from "@/components/custom/BoringDietTitle.tsx/Title";
import CircularGoals from "@/components/custom/CircularGoals/CircularGoals";
import CustomizedDiets from "@/components/custom/CustomizedDiets/CustomizedDiets";
import Delivery from "@/components/custom/Delivery/Delivery";
import Details from "@/components/custom/Details/Details";
import FaqSection from "@/components/custom/Faqs/FaqSection";
import FeaturedCarousel from "@/components/custom/Featured/Featured";
import FrozenMeals from "@/components/custom/FrozenMeals/FrozenMeals";
import Healthier from "@/components/custom/Healthier/Healthier";
import Parashop from "@/components/custom/HomePageParashop.tsx/Parashop";
import Transformations from "@/components/custom/Transformations/Transformations";
import WhyUs from "@/components/custom/WhyUs/WhyUs";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Details />
      <WhyUs />
      <Transformations title="#Transformations" />
      <Title />
      <CircularGoals />
      <CustomizedDiets />
      <Parashop />
      <FrozenMeals />
      <Delivery />
      <FeaturedCarousel />
      <FaqSection />
      <Healthier />
    </div>
  );
}
