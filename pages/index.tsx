import CollapseMenus from "../components/Global/Footer/CollapseMenus";
import HomeMain from "../components/HomePage/HomeMain";
import image from "../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import Image from "next/image";
import Hero from "../components/HomePage/Hero";
import Popup from "../components/UI/Popup";
import BlogMain from "../components/Blog/BlogMain";
import { useBlogPostQuery } from "../types";
import BlogHeader from "../components/Blog/BlogHeader";
import CustomerReview from "../components/UI/CustomerReview";
import CourseSlider from "../components/UI/IconSlider";

const customer = [
  {
    name: "jon",
    review: "Uptogo has helped me achieve my dream of traveling and studying",
    image: "https://picsum.photos/32/32",
  },
  {
    name: "Mandy",
    review: "It's been so easy to go abroad with Uptogo",
    image: "https://picsum.photos/32/32",
  },
  {
    name: "Nancy",
    review:
      "I reccomement Uptogo to any wishing to travel abroad, they are professional.",
    image: "https://picsum.photos/32/32",
  },
];

export default function App() {
  const { data } = useBlogPostQuery({
    variables: {
      id: "6315d649d375ad6ee10f6670",
    },
  });

  const TypedBlogData = data?.blogPost;

  return (
    <>
      <div className="md:px-10 p-4 md:py-10 md:p-0 md:mb-6 bg-body">
        <Hero />
      </div>
      <h2 className="text-red-600 text-3xl text-center bg-red-100 py-5 logoFont">
        web đang xây dựng
      </h2>
      <CourseSlider />
      <div className="container mx-auto">
        <HomeMain />
        <BlogHeader data={TypedBlogData} />
        <div className="py-12 flex items-center justify-center">
          <Popup />
        </div>
        <CustomerReview customer={customer} />
        <Image
          src={image}
          alt="image"
          width={950}
          height={280}
          layout="responsive"
        />
      </div>
    </>
  );
}
