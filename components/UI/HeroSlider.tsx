import React from "react";
import { Slide } from "react-slideshow-image";
import slide1 from "../../public/heroImages/biawweb.jpeg";
import slide2 from "../../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import slide3 from "../../public/heroImages/Gold-and-Blue-Trendy-New-Season-Boutique-Ads-Facebook-Cover-820-×-312-px-820-×-258-px.png";
import Image from "next/image";
const slideImages = [
  {
    url: slide1,
    caption: "Slide 1",
  },
  {
    url: slide2,
    caption: "Slide 2",
  },
  {
    url: slide3,
    caption: "Slide 3",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container mt-48">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <Image
              src={slideImage.url}
              alt="image"
              width={825}
              height={235}
              layout="responsive"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
