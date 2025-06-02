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
    src: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748674147/mgwaz6qicj6j3apylvxu.png",
    alt: "Electronics Collection",
    categoryName: "Electronics"
  },
  {
    id: 2,
    link: "/categories",
    title: "Home Appliances Collection",
    src: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748674096/gdy4tyeo61itosgnkdvw.png",
    alt: "Home Appliances Collection",
    categoryName: "Home Appliances"
  },
  {
    id: 3,
    link: "/categories",
    title: "Men's T-shirt Collection",
    src: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748674212/uq2uraojju1zitwccy4v.png",
    alt: "Men's T-shirts Collection",
    categoryName: "Men's T-shirts"
  },
  {
    id: 4,
    link: "/categories",
    title: "Women's Tops Collection",
    src: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748674269/muhbvvyupxvricks4sng.png",
    alt: "Women's Tops Collection",
    categoryName: "Women's Tops"
  },
  {
    id: 5,
    link: "/categories",
    title: "Men's Pants Collection",
    src: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748674229/vouwinngff3q0j6vjg8r.png",
    alt: "Men's Pants Collection",
    categoryName: "Men's Pants"
  },
  {
    id: 6,
    link: "/categories",
    title: "Women's pants Collection",
    src: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748674222/ge8pi6pnmckmjfscbpmj.png",
    alt: "Women's pants Collection",
    categoryName: "Women's Pants"
  },
  {
    id: 7,
    link: "/categories",
    title: "Women's Bags Collection",
    src: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748674256/ottc0o0ktqpg9fnktgy3.png",
    alt: "Women's Bags Collection",
    categoryName: "Women's Bags"
  },
  {
    id: 8,
    link: "/categories",
    title: "Men's Shoes Collection",
    src: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748674223/xahk5h0ylnmargqvbbjf.png",
    alt: "Men's Shoes Collection",
    categoryName: "Men's Shoes"
  },
  {
    id: 9,
    link: "/categories",
    title: "Women's Shoes Collection",
    src: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748674257/fqsknnojhkwvdfz9sgjx.png",
    alt: "Women's shoes Collection",
    categoryName: "Women's Shoes"
  },
  {
    id: 10,
    link: "/categories",
    title: "Kids Clothing Collection",
    src: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748674100/fnqvm00gy9plcyemna27.png",
    alt: "Kids Clothing Collection",
    categoryName: "Kids Clothing"
  },
  {
    id: 11,
    link: "/categories",
    title: "Kids Shoes Collection",
    src: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748674184/h1lahhbdoyj6bpsp6jtm.png",
    alt: "Kids Shoes Collection",
    categoryName: "Kids Shoes"
  }
];
