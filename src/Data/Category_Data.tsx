//!======================================== Categories Section Data ======================================

interface titleCategoriesProps {
  title: string;
}

export const titleCategories: titleCategoriesProps = {
  title: "Our Categories"
};

interface categoryProps {
  id: number;
  link: string;
  title: string;
  src: string;
  alt: string;
  categoryName: string;
}

export const categories: categoryProps[] = [
  {
    id: 1,
    link: "/categories",
    title: "Electronics Collection",
    src: "/Categories Photos/Electronic.png",
    alt: "Electronics Collection",
    categoryName: "Electronics"
  },
  {
    id: 2,
    link: "/categories",
    title: "Home Appliances Collection",
    src: "/Categories Photos/Home Appliances.png",
    alt: "Home Appliances Collection",
    categoryName: "Home Appliances"
  },
  {
    id: 3,
    link: "/categories",
    title: "Men's T-shirt Collection",
    src: "/Categories Photos/Men's T-shirt.png",
    alt: "Men's T-shirts Collection",
    categoryName: "Men's T-shirts"
  },
  {
    id: 4,
    link: "/categories",
    title: "Women's Tops Collection",
    src: "/Categories Photos/Women's Tops.png",
    alt: "Women's Tops Collection",
    categoryName: "Women's Tops"
  },
  {
    id: 5,
    link: "/categories",
    title: "Men's Pants Collection",
    src: "/Categories Photos/Men's Pants.png",
    alt: "Men's Pants Collection",
    categoryName: "Men's Pants"
  },
  {
    id: 6,
    link: "/categories",
    title: "Women's pants Collection",
    src: "/Categories Photos/Women's Pants.png",
    alt: "Women's pants Collection",
    categoryName: "Women's Pants"
  },
  {
    id: 7,
    link: "/categories",
    title: "Women's Bags Collection",
    src: "/Categories Photos/Women's Bags.png",
    alt: "Women's Bags Collection",
    categoryName: "Women's Bags"
  },
  {
    id: 8,
    link: "/categories",
    title: "Men's Shoes Collection",
    src: "/Categories Photos/Men's Shoes.png",
    alt: "Men's Shoes Collection",
    categoryName: "Men's Shoes"
  },
  {
    id: 9,
    link: "/categories",
    title: "Women's Shoes Collection",
    src: "/Categories Photos/Women's Shoes.png",
    alt: "Women's shoes Collection",
    categoryName: "Women's Shoes"
  },
  {
    id: 10,
    link: "/categories",
    title: "Kids Clothing Collection",
    src: "/Categories Photos/Kids Clothing.png",
    alt: "Kids Clothing Collection",
    categoryName: "Kids Clothing"
  },
  {
    id: 11,
    link: "/categories",
    title: "Kids Shoes Collection",
    src: "/Categories Photos/Kids Shoes.png",
    alt: "Kids Shoes Collection",
    categoryName: "Kids Shoes"
  }
];
