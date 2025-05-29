//!================================== Our Journy & Our Mission Section Data ==============================
import Filter1RoundedIcon from "@mui/icons-material/Filter1Rounded";
import Filter2RoundedIcon from "@mui/icons-material/Filter2Rounded";
import Filter3RoundedIcon from "@mui/icons-material/Filter3Rounded";
import Filter4RoundedIcon from "@mui/icons-material/Filter4Rounded";

interface titleOurJourny_MissionProps {
  titleJourny: string;
  paraghraphJourny: string;
  titleMission: string;
  paraghraphMission: string;
}

export const titlrOurJourny_Mission: titleOurJourny_MissionProps = {
  titleJourny: "Our Journey",
  paraghraphJourny:
    "Our journey at FastCart began with a simple goal: to provide seamless, reliable, and affordable online shopping services. Driven by customer satisfaction, we've grown into a trusted name, offering exceptional products and experiences for every purchase.",
  titleMission: "Our Mission",
  paraghraphMission:
    "Our mission at FastCart is to make online shopping effortless, affordable, and accessible for everyone. We strive to deliver exceptional service, a diverse range of quality products, and a seamless experience that puts our customers first."
};

interface imagesOurJourny_MissionProps {
  id: number;
  src: string;
  alt: string;
  imgTitle: string;
  icon: React.ReactNode;
  classNameIcon: string;
  classNameOuterIcon: string;
}

export const imagesOurJourny_Mission: imagesOurJourny_MissionProps[] = [
  {
    id: 1,
    src: "/About Photos/Our Journey Photos/1- Order Packing Photo.png",
    alt: "Order Packing Photo",
    imgTitle: "Order Packing",
    icon: <Filter1RoundedIcon fontSize="small" />,
    classNameIcon: "group-hover:translate-y-[-100%]",
    classNameOuterIcon: "left-3 top-3"
  },
  {
    id: 2,
    src: "/About Photos/Our Journey Photos/2- Order Delivery Photo.png",
    alt: "Order Delivery Photo",
    imgTitle: "Order Delivery",
    icon: <Filter2RoundedIcon fontSize="small" />,
    classNameIcon: "group-hover:-translate-x-[-100%]",
    classNameOuterIcon: "right-3 top-3"
  },
  {
    id: 3,
    src: "/About Photos/Our Journey Photos/4- Customer Holding the Shipment.png",
    alt: "Customer Holding the Shipment",
    imgTitle: "Shipment Received",
    icon: <Filter4RoundedIcon fontSize="small" />,
    classNameIcon: "group-hover:translate-x-[-100%]",
    classNameOuterIcon: "left-3 top-3"
  },
  {
    id: 4,
    src: "/About Photos/Our Journey Photos/3- Customer Receiving Order.png",
    alt: "Customer Receiving Order",
    imgTitle: "Delivery Confirmation",
    icon: <Filter3RoundedIcon fontSize="small" />,
    classNameIcon: "group-hover:-translate-y-[-100%]",
    classNameOuterIcon: "right-3 top-3"
  }
];

//!==================================== Our Expertise Section Data =====================================

interface titleOurExpertiseProps {
  title: string;
}

export const titleOurExpertise: titleOurExpertiseProps = {
  title: "Our Expertise"
};

interface ourExpertiseProps {
  idOurExpertise: number;
  numberHead: string;
  title: string;
  description: string;
}

export const ourExpertise: ourExpertiseProps[] = [
  {
    idOurExpertise: 1,
    numberHead: "10+",
    title: "Years of Experience",
    description: "Extensive industry knowledge for your needs."
  },
  {
    idOurExpertise: 2,
    numberHead: "1000+",
    title: "Happy Clients",
    description: "Relied on by thousands for outstanding service."
  },
  {
    idOurExpertise: 3,
    numberHead: "50+",
    title: "Vehicles",
    description: "A variety of options available, wherever you need."
  },
  {
    idOurExpertise: 4,
    numberHead: "6+",
    title: "Locations",
    description: "Conveniently serving multiple areas across regions."
  }
];

//!================================= Our Founder & Leadership Section Data ============================

interface OurFounder_LeadershipProps {
  titleFounder: string;
  paraghraphFounder: string;
  titleLeadership: string;
  paraghraphLeadership: string;
  src: string;
  alt: string;
  imgTitle: string;
}

export const OurFounder_Leadership: OurFounder_LeadershipProps = {
  titleFounder: "Meet Our Founder",
  paraghraphFounder:
    'Discover the visionary behind FastCart, whose passion drives our success. In "Innovation & Growth," our dedicated team blends industry expertise with strategic insight to deliver seamless service and remarkable experiences for every customer.',
  titleLeadership: "Leadership & Expertise",
  paraghraphLeadership:
    "Leadership and Expertise highlight the talented professionals behind FastCart. Their extensive industry knowledge and strategic vision fuel innovation, ensuring exceptional service and seamless operations for our expanding customer base.",
  src: "/About Photos/Leadership Photo/Leadership & Expertise Photo.png",
  alt: "Leadership & Expertise Picture",
  imgTitle: "Leadership & Expertise"
};

//!======================================= Why Choose Us Section Data ==================================

interface titleWhyChooseUsProps {
  title: string;
}

export const titleWhyChooseUs: titleWhyChooseUsProps = {
  title: "Why Choose Us"
};

interface chooseUsProps {
  idUseFastCart: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const chooseUs: chooseUsProps[] = [
  {
    idUseFastCart: 1,
    src: "/About Photos/Why Choose Us Photos/Excellence Photo.png",
    alt: "Exellence Photo",
    title: "Excellence",
    description: "Striving for the best in every aspect."
  },
  {
    idUseFastCart: 2,
    src: "/About Photos/Why Choose Us Photos/Affordability Photo.png",
    alt: "Affordability Photo",
    title: "Affordability",
    description: "Offering competitive prices without compromising quality."
  },
  {
    idUseFastCart: 3,
    src: "/About Photos/Why Choose Us Photos/Reliability Photo.png",
    alt: "Reliability Photo",
    title: "Reliability",
    description: "Dependable and consistent in all we do."
  },
  {
    idUseFastCart: 4,
    src: "/About Photos/Why Choose Us Photos/Loyalty Photo.png",
    alt: "Loyalty Photo",
    title: "Loyalty",
    description:
      "Dedicated to building long-lasting relationships with our clients."
  }
];

//!======================================== Our Locations Section Data ==================================

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
    src: "/About Photos/Our Locations/Egypt Photo.png",
    alt: "Egypt Branch",
    countryName: "Egypt"
  },
  {
    id: 2,
    linkMaps:
      "https://www.google.com/maps/place/Dubai+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5f43496ad9c645:0xbde66e5084295162?sa=X&ved=1t:242&ictx=111",
    title: "Dubai Branch",
    src: "/About Photos/Our Locations/Dubai Photo.png",
    alt: "Dubai Branch",
    countryName: "Dubai"
  },
  {
    id: 3,
    linkMaps:
      "https://www.google.com/maps/place/Canada/data=!4m2!3m1!1s0x4b0d03d337cc6ad9:0x9968b72aa2438fa5?sa=X&ved=1t:242&ictx=111",
    title: "Canada Branch",
    src: "/About Photos/Our Locations/Canada Photo.png",
    alt: "Canada Branch",
    countryName: "Canada"
  },
  {
    id: 4,
    linkMaps:
      "https://www.google.com/maps/place/Saudi+Arabia/data=!4m2!3m1!1s0x15e7b33fe7952a41:0x5960504bc21ab69b?sa=X&ved=1t:242&ictx=111",
    title: "Saudi Arabia Branch",
    src: "/About Photos/Our Locations/Saudi Arabia Photo.jpg",
    alt: "Saudi Arabia Branch",
    countryName: "Saudi Arabia"
  },
  {
    id: 5,
    linkMaps:
      "https://www.google.com/maps/place/United+States/data=!4m2!3m1!1s0x54eab584e432360b:0x1c3bb99243deb742?sa=X&ved=1t:242&ictx=111",
    title: "United States Branch",
    src: "/About Photos/Our Locations/United States Photo.png",
    alt: "United States Branch",
    countryName: "United States"
  },
  {
    id: 6,
    linkMaps:
      "https://www.google.com/maps/place/Qatar/data=!4m2!3m1!1s0x3e45c534ffdce87f:0x1cfa88cf812b4032?sa=X&ved=1t:242&ictx=111",
    title: "Qatar Branch",
    src: "/About Photos/Our Locations/Qatar Photo.png",
    alt: "Qatar Branch",
    countryName: "Qatar"
  }
];

//!======================================= Clients Feedback Section Data ==================================

interface titleClientsFeedbackProps {
  title: string;
}

export const titleClientsFeedback: titleClientsFeedbackProps = {
  title: "Clients Feedback"
};

interface clientsFeedbackProps {
  commentId: number;
  comment: string;
  src: string;
  alt: string;
  name: string;
  title: string;
}

export const clientsFeedback: clientsFeedbackProps[] = [
  {
    commentId: 1,
    comment:
      "FastCart exceeded all my expectations. The shopping process was quick and hassle-free, allowing me to place my order in just a few minutes. The support team was friendly and made sure I had all the information I needed. The product was in excellent condition.",
    src: "/About Photos/Clients Feedback Photo/Client 1.png",
    alt: "Customer Feedback",
    name: "Mike Henderson",
    title: "Business Manager & CEO"
  },
  {
    commentId: 2,
    comment:
      "I had a fantastic experience with FastCart's service. From the moment I placed my order online to the point of receiving it, everything went smoothly. The variety of products to choose from was impressive, and the prices were very reasonable.",
    src: "/About Photos/Clients Feedback Photo/Client 2.png",
    alt: "Customer Feedback",
    name: "John Williams",
    title: "Content Writer"
  },
  {
    commentId: 3,
    comment:
      "My experience with FastCart was simply great. The product was clean, modern, and well-packaged. I was especially impressed with how easy it was to place the order and receive it. The pricing was clear with no hidden fees, and the staff was both professional and helpful.",
    src: "/About Photos/Clients Feedback Photo/Client 3.png",
    alt: "Customer Feedback",
    name: "Paul Harrison",
    title: "Director"
  },
  {
    commentId: 4,
    comment:
      "My experience with FastCart was simply great. The product was clean, modern, and well-packaged. I was especially impressed with how easy it was to place the order and receive it. The pricing was clear with no hidden fees, and the staff was both professional and helpful.",
    src: "/About Photos/Clients Feedback Photo/Client 1.png",
    alt: "Customer Feedback",
    name: "Paul Harrison",
    title: "Director"
  },
  {
    commentId: 5,
    comment:
      "My experience with FastCart was simply great. The product was clean, modern, and well-packaged. I was especially impressed with how easy it was to place the order and receive it. The pricing was clear with no hidden fees, and the staff was both professional and helpful.",
    src: "/About Photos/Clients Feedback Photo/Client 2.png",
    alt: "Customer Feedback",
    name: "Paul Harrison",
    title: "Director"
  },
  {
    commentId: 6,
    comment:
      "My experience with FastCart was simply great. The product was clean, modern, and well-packaged. I was especially impressed with how easy it was to place the order and receive it. The pricing was clear with no hidden fees, and the staff was both professional and helpful.",
    src: "/About Photos/Clients Feedback Photo/Client 3.png",
    alt: "Customer Feedback",
    name: "Paul Harrison",
    title: "Director"
  }
];
