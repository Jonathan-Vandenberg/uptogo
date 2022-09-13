import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Course1 from "../../public/courseIcons/computer.png";
import Course2 from "../../public/courseIcons/web-design.png";
import Course3 from "../../public/courseIcons/management.png";
import Course4 from "../../public/courseIcons/competence.png";
import Course5 from "../../public/courseIcons/healthcare.png";
import Course6 from "../../public/courseIcons/hospitality.png";

const Courses = [
  { image: Course1, title: "IT", link: "/courses/information-technology" },
  { image: Course2, title: "Design", link: "/courses/design" },
  { image: Course3, title: "Management", link: "/courses/management" },
  { image: Course4, title: "Trades", link: "/courses/trades" },
  { image: Course5, title: "Health", link: "/courses/health" },
  { image: Course6, title: "Hospitality", link: "/courses/hopitality" },
];

const CourseSlider = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  const renderSlides = () =>
    Courses.map((el, i) => (
      <motion.div
        key={i}
        whileHover={{
          scale: 1.03,
          y: -10,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.97 }}
        className="flex cursor-pointer flex-col items-center justify-center p-4"
      >
        <div className="flex items-center justify-center rounded-2xl hover:drop-shadow-md">
          <Image src={el.image} width={60} height={60} alt="Courses" />
        </div>
        <p className="pt-2 text-center  text-slate-600 xl:text-lg">
          {el.title}
        </p>
      </motion.div>
    ));

  return (
    <Slider
      slidesToShow={width < 768 ? 3 : width < 1024 ? 6 : width < 1440 ? 8 : 10}
      slidesToScroll={width < 768 ? 3 : 2}
      autoplay={false}
      autoplaySpeed={3000}
      arrows={true}
      dots={false}
      dotsClass="slick-dots"
      lazyLoad={"anticipated"}
      className="mx-auto w-3/4"
      infinite={false}
    >
      {renderSlides()}
    </Slider>
  );
};

export default CourseSlider;
