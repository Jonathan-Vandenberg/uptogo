import { motion } from "framer-motion";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import slide1 from "../../public/heroImages/biawweb.jpeg";

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

const HeroSlideshow: NextPage<Props> = ({
  imageData,
  width,
  height,
  scaleOnHover,
}) => {
  const renderSlides = () =>
    imageData.map((img, i) => (
      <div key={i}>
        <motion.div
          whileHover={{
            scale: scaleOnHover ? 1.02 : 1,
            transition: { duration: 0.3 },
          }}
          key={img.toString()}
        >
          <Image
            src={img}
            alt="uptogo hero image"
            width={width}
            height={height}
            className="object-cover"
            layout="responsive"
          />
        </motion.div>
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
        dotsClass="slick-dots"
        className="mx-auto"
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default HeroSlideshow;
