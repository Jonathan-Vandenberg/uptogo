import { motion } from "framer-motion";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import slide1 from "../../public/heroImages/biawweb.jpeg";
import slide2 from "../../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import slide3 from "../../public/heroImages/Gold-and-Blue-Trendy-New-Season-Boutique-Ads-Facebook-Cover-820-×-312-px-820-×-258-px.png";

interface Props {
  /**Array of image links or imports */
  imageData: StaticImageData[] | string[];
  /**Width of the image */
  width: number;
  /**Height of the image */
  height: number;
  /**Scales image to 1.05 on hover if true */
  scaleOnHover: boolean;
}

const images = [slide3];

const HeroSlideshow = () => {
  const renderSlides = () =>
    images.map((img, i) => (
      <div key={i}>
        <div key={img.toString()}>
          <Image
            src={img}
            alt="uptogo hero image"
            width={820}
            height={258}
            className="object-cover"
            layout="responsive"
          />
        </div>
      </div>
    ));
  return (
    <div>
      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        arrows={false}
        dots={false}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default HeroSlideshow;
