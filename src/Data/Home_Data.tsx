//!=========================================== Home Section Data ============================================
interface HomeSectionDataProps {
  title_h2_first?: string;
  title_h2_center?: string;
  title_h2_last?: string;
  title_h3_first?: string;
  title_h3_center?: string;
  title_h3_last?: string;
  title_h1_first?: string;
  title_h1_seconed?: string;
  title_h1_third?: string;
  title_h1_forth?: string;
  title_h1_fifth?: string;
  title_h1_last?: string;
  title_button?: string;
  link_button?: string;
  title_button_hovering?: string;
}

export const HomeSectionData: HomeSectionDataProps[] = [
  {
    title_h2_first: "Shop Smarter with",
    title_h2_center: "FastCart",
    title_h2_last: "— Anytime, Anywhere!"
  },
  {
    title_h3_first: "SMART SHOPPING WITH",
    title_h3_center: "FastCart",
    title_h3_last: "— EXCLUSIVE DEALS & LOW PRICES"
  },
  {
    title_h1_first: "Shop smarter with",
    title_h1_seconed: "FastCart E-Commerce",
    title_h1_third: " — your destination for",
    title_h1_forth: "exclusive deals",
    title_h1_fifth: ", seamless checkout, ",
    title_h1_last: "and fast delivery — all in one place."
  },
  {
    title_button: "Shop Now",
    link_button: "/products",
    title_button_hovering: "Go To Shop"
  }
];

//!======================================== Top Products Section Data =======================================

interface titleTopProductProps {
  title: string;
  title_button: string;
  title_button_hovering: string;
  link_button: string;
}

export const titleTopProduct: titleTopProductProps = {
  title: "Top Products",
  title_button: "View All",
  title_button_hovering: "View All Products",
  link_button: "/products"
};

interface topProductType {
  id: number;
  name: string;
  Desc: string;
  category: string;
  img: string;
  availableColors: string[];
  After_Discount: number;
  Pre_Discount: number | null;
  quantity: string | null;
  imgHover: string;
  video: string;
}

export const topProduct: topProductType[] = [
  {
    id: 18,
    name: "QUIKSILVER Men's PORTER Snow Pants",
    Desc: "Stay warm and dry on the slopes with the QUIKSILVER Men's PORTER Snow Pants. Designed for comfort and performance, these snow pants feature waterproof fabric, lightweight insulation, and adjustable waist for the perfect fit. Great for skiing, snowboarding, or any winter adventure.",
    category: "Men's Pants",
    img: "/Home Photos/Top Products/Photos/QUIKSILVER Men's PORTER Snow Pants.png",
    availableColors: ["#7a9a79", "#000000"], //green-400, black
    After_Discount: 129,
    Pre_Discount: 219,
    quantity: "In Stock",
    imgHover: "https://i.ebayimg.com/images/g/CasAAOSwgJpiFT-u/s-l1600.webp",
    video:
      "/Home Photos/Top Products/Videos/QUIKSILVER Men's PORTER Snow Pants.mp4"
  },
  {
    id: 4,
    name: "Luxury PU Leather Handbag for Women",
    Desc: "Elegant and stylish PU leather handbag with a custom design — perfect for daily use or special occasions.",
    category: "Women's Bags",
    img: "/Home Photos/Top Products/Photos/Luxury PU Leather Handbag.png",
    availableColors: ["#FFFFFF", "#6B4F1F"], // white, brown-500
    After_Discount: 149,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover:
      "https://s.alicdn.com/@sc04/kf/H8ec2ebccffb44bd5bab4da7c1d4e1b55e.jpg_720x720q50.jpg",
    video: "/Home Photos/Top Products/Videos/Luxury PU Leather Handbag.mp4"
  },
  {
    id: 10,
    name: "Training Gym Shoes",
    Desc: "Breathable athletic shoes made for gym workouts and fitness training.",
    category: "Men's Shoes",
    img: "/Home Photos/Top Products/Photos/Training Gym Shoes.png",
    availableColors: ["#000000", "#FFFFFF", "#4A5568"], // black, white, gray-700
    After_Discount: 99,
    Pre_Discount: 130,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71SxQQwcqaL._AC_SY625_.jpg",
    video: "/Home Photos/Top Products/Videos/Training Gym Shoes.mp4"
  },
  {
    id: 14,
    name: "MacBook Air – Creative Edition",
    Desc: "Ultra-thin design with powerful performance for creatives and professionals.",
    category: "Electronic",
    img: "/Home Photos/Top Products/Photos/MacBook Air – Creative Edition.png",
    availableColors: ["#F5CBA7", "#B0B0B0"], // rose-300, gray-400
    After_Discount: 2999,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover:
      "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "/Home Photos/Top Products/Videos/MacBook Air - Creative Edition.mp4"
  },
  {
    id: 3,
    name: "Retro Cotton Linen Set — Plus Size",
    Desc: "Chic 2-piece set with a comfy shirt and high waist loose trousers in breathable cotton linen.",
    category: "Women's Tops",
    img: "/Home Photos/Top Products/Photos/Retro Cotton Linen Set – Plus Size.png",
    availableColors: ["#E4E4E7", "#93C5FD"], // stone-200, blue-200
    After_Discount: 319,
    Pre_Discount: 399,
    quantity: "In Stock",
    imgHover:
      "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/l/12/39824d4f-b33c-43a4-a39f-3116742033cd.jpg",
    video:
      "/Home Photos/Top Products/Videos/Retro Cotton Linen Set – Plus Size.mp4"
  },
  {
    id: 13,
    name: "Classic High-Top Shoes",
    Desc: "Classic high-top shoes combining style and ankle support.",
    category: "Men's Shoes",
    img: "/Home Photos/Top Products/Photos/Classic High-Top Shoes.png",
    availableColors: ["#000000", "#800000"], // black, red-900
    After_Discount: 799,
    Pre_Discount: null,
    quantity: "In Stock",
    imgHover:
      "https://www.mytheresa.com/media/1094/1238/100/15/P00436217_d1.jpg",
    video: "/Home Photos/Top Products/Videos/Classic High - Top Shoes.mp4"
  },
  {
    id: 2,
    name: "Red Compact Single Door Mini Fridge",
    Desc: "20L AC/DC Mini Fridge Dual Core Fridge for Bedroom Hotel Cooler & Warmer Portable Fridge Small Fridge Refrigerator",
    category: "Home Appliances",
    img: "/Home Photos/Top Products/Photos/Compact Single Door Mini Fridge.png",
    availableColors: ["#F56565", "#000000", "#6B7280"], // red-500, black, gray-500
    After_Discount: 699,
    Pre_Discount: 849,
    quantity: "In Stock",
    imgHover:
      "https://p.globalsources.com/IMAGES/PDT/B5791164633/mini-fridge.jpg",
    video:
      "/Home Photos/Top Products/Videos/Compact Single Door Mini Fridge.mp4"
  },
  {
    id: 5,
    name: "Dark Green Women's Top Shoes",
    Desc: "Step up your style with these dark green women's shoes — sleek, comfortable, and perfect for adding a bold touch to any outfit.",
    category: "Women's Shoes",
    img: "/Home Photos/Top Products/Photos/Dark Green Women's Top Shoes.png",
    availableColors: ["#22543D"], // green-900
    After_Discount: 799,
    Pre_Discount: 859,
    quantity: "In Stock",
    imgHover:
      "http://www.emmylondon.com/cdn/shop/files/Rebecca-Court-Shoes-1.jpg",
    video: "/Home Photos/Top Products/Videos/Dark Green Women's Top Shoes.mp4"
  },
  {
    id: 15,
    name: "Baby Milton Quilted Baby Sweatshirt",
    Desc: "Relaxed and roomy fit to ensure maximum comfort. Not easy to wrinkle, shrink or fade in washing. Soft, lightweight but durable, skin-friendly and breathable. Ensures unrestricted body movement. Suitable for daily use.",
    category: "Kids Clothing",
    img: "/Home Photos/Top Products/Photos/Baby Milton Quilted Baby Sweatshirt.png",
    availableColors: ["#60A5FA", "#A67B5B"], // blue-400, yellow-700
    After_Discount: 99,
    Pre_Discount: 119,
    quantity: "In Stock",
    imgHover: "https://m.media-amazon.com/images/I/71slm3l5fxL._AC_SX569_.jpg",
    video:
      "/Home Photos/Top Products/Videos/Baby Milton Quilted Baby Sweatshirt.mp4"
  },
  {
    id: 16,
    name: "Straight-Leg Couture Cotton Trousers",
    Desc: "Elevate your wardrobe with these straight-leg couture trousers, crafted from premium cotton for a tailored yet comfortable fit — ideal for both casual and chic looks.",
    category: "Women's Pants",
    img: "/Home Photos/Top Products/Photos/Straight-Leg Couture Cotton Trousers.png",
    availableColors: ["#004d00", "#4A5568"], // green-900, gray-700
    After_Discount: 559,
    Pre_Discount: 649,
    quantity: "In Stock",
    imgHover:
      "https://images.pexels.com/photos/7205905/pexels-photo-7205905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    video:
      "/Home Photos/Top Products/Videos/Straight-Leg Couture Cotton Trousers.mp4"
  },
  {
    id: 19,
    name: "Hugo Boss T-shirt For mens",
    Desc: "Step up your casual style with the Hugo Boss T-shirt for Men. Crafted from soft, breathable cotton, this tee combines comfort with a sleek, modern look. Featuring the iconic BOSS logo, it's perfect for everyday wear or dressing up a laid-back outfit.",
    category: "Men's T-shirts",
    img: "/Home Photos/Top Products/Photos/Hugo Boss T-shirt For mens.png",
    availableColors: ["#000000", "#FFFFFF", "#D1D5DB"], // black, white, gray-400
    After_Discount: 49,
    Pre_Discount: 69,
    quantity: "In Stock",
    imgHover: "https://i.ebayimg.com/images/g/FAcAAOSwXGln9SiC/s-l1600.webp",
    video: "/Home Photos/Top Products/Videos/Hugo Boss T-shirt For mens.mp4"
  }
];

//!======================================== Top Categories Section Data ======================================

interface titleTopCategoriesProps {
  title: string;
  title_button: string;
  title_button_hovering: string;
  link_button: string;
}

export const titleTopCategories: titleTopCategoriesProps = {
  title: "Top Categories",
  title_button: "View All",
  title_button_hovering: "View All Categories",
  link_button: "/categories"
};

interface categoryProps {
  id: number;
  link: string;
  title: string;
  src: string;
  alt: string;
  categoryName: string;
}

export const topCategories: categoryProps[] = [
  {
    id: 1,
    link: "/category",
    title: "Men's Shoes Collection",
    src: "/Home Photos/Top Categories/Men's shoes.png",
    alt: "Men's Shoes Category",
    categoryName: "Men's Shoes"
  },
  {
    id: 2,
    link: "/category",
    title: "Electronics Collection",
    src: "/Home Photos/Top Categories/Electronic.png",
    alt: "Electronics Category",
    categoryName: "Electronics"
  },
  {
    id: 3,
    link: "/category",
    title: "Men's T-shirts Collection",
    src: "/Home Photos/Top Categories/Men's T-shirts.png",
    alt: "Men's T-shirts Category",
    categoryName: "Men's T-shirts"
  },
  {
    id: 4,
    link: "/category",
    title: "Men's Pants Collection",
    src: "/Home Photos/Top Categories/Men's pants.png",
    alt: "Men's Pants Collection",
    categoryName: "Men's Pants"
  },
  {
    id: 5,
    link: "/category",
    title: "Women's bags Collection",
    src: "/Home Photos/Top Categories/Women's Bags.png",
    alt: "Women's bags Collection Collection",
    categoryName: "Women's Bags"
  },
  {
    id: 6,
    link: "/category",
    title: "Home Appliances Collection",
    src: "/Home Photos/Top Categories/Home Appliances.png",
    alt: "Home Appliances Collection",
    categoryName: "Home Appliances"
  },
  {
    id: 7,
    link: "/categories",
    title: "Kids Clothing Collection",
    src: "/Home Photos/Top Categories/Kids Clothing.png",
    alt: "Kids Clothing Collection",
    categoryName: "Kids Clothing"
  },
  {
    id: 8,
    link: "/categories",
    title: "Women's Tops Collection",
    src: "/Home Photos/Top Categories/Women's Top.png",
    alt: "Women's Tops Collection",
    categoryName: "Women's Tops"
  }
];

//!======================================= Our Locations Section Data ======================================

interface titleLocationProps {
  title: string;
}

export const titleLocation: titleLocationProps = {
  title: "Our Locations"
};

interface locationProps {
  id: number;
  linkMaps: string;
  title: string;
  src: string;
  alt: string;
  countryName: string;
}

export const locations: locationProps[] = [
  {
    id: 1,
    linkMaps:
      "https://www.google.com/maps/place/Egypt/data=!4m2!3m1!1s0x14368976c35c36e9:0x2c45a00925c4c444?sa=X&ved=1t:242&ictx=111",
    title: "Egypt Branch",
    src: "/Home Photos/Our Locations/Egypt Photo.png",
    alt: "Egypt Branch",
    countryName: "Egypt"
  },
  {
    id: 2,
    linkMaps:
      "https://www.google.com/maps/place/Dubai+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5f43496ad9c645:0xbde66e5084295162?sa=X&ved=1t:242&ictx=111",
    title: "Dubai Branch",
    src: "/Home Photos/Our Locations/Dubai Photo.png",
    alt: "Dubai Branch",
    countryName: "Dubai"
  },
  {
    id: 3,
    linkMaps:
      "https://www.google.com/maps/place/Canada/data=!4m2!3m1!1s0x4b0d03d337cc6ad9:0x9968b72aa2438fa5?sa=X&ved=1t:242&ictx=111",
    title: "Canada Branch",
    src: "/Home Photos/Our Locations/Canada Photo.png",
    alt: "Canada Branch",
    countryName: "Canada"
  },
  {
    id: 4,
    linkMaps:
      "https://www.google.com/maps/place/Saudi+Arabia/data=!4m2!3m1!1s0x15e7b33fe7952a41:0x5960504bc21ab69b?sa=X&ved=1t:242&ictx=111",
    title: "Saudi Arabia Branch",
    src: "/Home Photos/Our Locations/Saudi Arabia Photo.jpg",
    alt: "Saudi Arabia Branch",
    countryName: "Saudi Arabia"
  },
  {
    id: 5,
    linkMaps:
      "https://www.google.com/maps/place/United+States/data=!4m2!3m1!1s0x54eab584e432360b:0x1c3bb99243deb742?sa=X&ved=1t:242&ictx=111",
    title: "United States Branch",
    src: "/Home Photos/Our Locations/United States Photo.png",
    alt: "United States Branch",
    countryName: "United States"
  },
  {
    id: 6,
    linkMaps:
      "https://www.google.com/maps/place/Qatar/data=!4m2!3m1!1s0x3e45c534ffdce87f:0x1cfa88cf812b4032?sa=X&ved=1t:242&ictx=111",
    title: "Qatar Branch",
    src: "/Home Photos/Our Locations/Qatar Photo.png",
    alt: "Qatar Branch",
    countryName: "Qatar"
  }
];

//!====================================== How To Use FastCart Section Data ==================================

import { TbCategoryPlus } from "react-icons/tb";
import { MdScreenSearchDesktop } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

interface titleUsesFastCartProps {
  title: string;
}

export const titleUsesFastCart: titleUsesFastCartProps = {
  title: "How To Use FastCart"
};

interface usesFastCartProps {
  idUseFastCart: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const usesFastCart: usesFastCartProps[] = [
  {
    idUseFastCart: 1,
    icon: <TbCategoryPlus />,
    title: "Category",
    description: "Choose the section that suits you from various categories."
  },
  {
    idUseFastCart: 2,
    icon: <MdScreenSearchDesktop />,
    title: "Explore",
    description: "Search and explore top products with ease and clarity."
  },
  {
    idUseFastCart: 3,
    icon: <FaMoneyCheckDollar />,
    title: "Payment",
    description: "Pay securely and seamlessly using Stripe checkout."
  },
  {
    idUseFastCart: 4,
    icon: <TbTruckDelivery />,
    title: "Delivery",
    description: "Receive your order quickly and efficiently at your door."
  }
];
