import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <Carousel interval={5000} fade>
      <Carousel.Item>
        <div
          style={{
            height: 700,
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/adults-talking.jpeg?alt=media&token=26f2d806-2499-4c1b-aba0-9db60734df99)",
          }}
          className="w-full bg-cover bg-center bg-no-repeat "
        />
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            height: 700,
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/imghands.png?alt=media&token=aa45cf74-2cb4-43b6-b6cf-4aef737dafb1)",
          }}
          className="w-full bg-cover bg-center bg-no-repeat "
        />
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            height: 700,
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/Business-men-slider.jpeg?alt=media&token=1c71b6dd-ebe9-4508-8892-019b9ba158f9)",
          }}
          className="w-full bg-cover bg-center bg-no-repeat "
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
