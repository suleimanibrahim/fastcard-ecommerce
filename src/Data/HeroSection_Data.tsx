//!=========================================== Hero Component Data ============================================
interface HeroSectionDataProps {
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
  srcImage?: string;
  altImage?: string;
}

export const HeroSectionData: HeroSectionDataProps[] = [
  {
    title_h2_first: "Catch the Latest Deals First with",
    title_h2_center: "FastCart",
    title_h2_last: "Smarter Shopping — Starts Here!"
  },
  {
    title_h3_first: "Stay ahead with unbeatable",
    title_h3_center: "offers, exclusive discounts,",
    title_h3_last: "and a seamless shopping experience"
  },
  {
    title_h1_first: "FastCart",
    title_h1_seconed: "is your go-to destination",
    title_h1_third: "for variety, quality, and super-fast",
    title_h1_forth: "delivery all in one place. Don't miss out, be",
    title_h1_fifth: "the first to grab",
    title_h1_last: "what's new and hot!"
  },
  {
    title_button: "Shop Now",
    link_button: "/products",
    title_button_hovering: "Go To Shop"
  },
  {
    srcImage: "/Home Photos/Home/For another hero pages3.png",
    altImage: "Hero Image"
  }
];
