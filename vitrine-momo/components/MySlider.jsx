import React from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


export default () => {
  const photos = ["https://img.itch.zone/aW1nLzEzNDI2NTA3LnBuZw==/315x250%23c/rFdj2T.png", "https://img.itch.zone/aW1nLzEzNDI2NTA3LnBuZw==/315x250%23c/rFdj2T.png", "https://img.itch.zone/aW1nLzEzNDI2NTA3LnBuZw==/315x250%23c/rFdj2T.png"];
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider ">
      {photos.map((photo, index) => {
        return (
          <div className="keen-slider__slide number-slide" key={index}>
             <img src={photo} alt={`Image ${index}`} />
          </div>
        );
      })}
    </div>
  );
};
