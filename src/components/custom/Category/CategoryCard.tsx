import { CategoryCardProps } from "@/types";
import Link from "next/link";

const CategoryCard: React.FC<CategoryCardProps> = ({
  bgImage,
  title,
  href,
  overlayColor = "bg-yellow-500/60",
}) => {
  return (
    <Link
      href={href}
      className="w-[180px] h-[237px] rounded-[100px] relative flex items-center justify-center overflow-hidden shadow-lg hover:scale-105 transition-transform"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Overlay Color */}
      <div className={`absolute inset-0 ${overlayColor}`} />
      {/* Title Text */}
      <h2 className="relative z-10 text-white text-2xl font-semibold text-center px-4">
        {title}
      </h2>
    </Link>
  );
};

export default CategoryCard;
