import { Link } from "react-router-dom";
import { scrollToTop } from "../ui/utils";

interface categoryProps {
  id: number;
  link: string;
  title: string;
  src: string;
  alt: string;
  categoryName: string;
}

export default function CategorySection({
  categories
}: {
  categories: categoryProps[];
}) {
  return (
    <>
      {categories?.map((category) => (
        <div key={category.id}>
          <div className="relative overflow-hidden rounded-3xl group/text transition-all duration-500 ease-in-out cursor-pointer">
            <Link
              to={`categories/${category.categoryName}`}
              title={category.title}
              onClick={() => scrollToTop()}>
              <img
                className="w-full h-64 object-contain"
                src={category.src}
                alt={category.alt}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/15 hover:bg-black/0 transition-all duration-500 ease-in-out">
                <div className="absolute left-5 top-5">
                  <h2 className="text-xl text-white border-b-[3px] bg-black/45 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover/text:-translate-y-16 border-[var(--primary-color)] rounded-md p-1 pb-0">
                    {category.categoryName}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
