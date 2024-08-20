import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/image1.jpg', text: 'Image 1' },
  { src: '/image2.jpg', text: 'Image 2' },
  { src: '/image3.jpg', text: 'Image 3' },
];

const ImageSlider = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const imagesArray = imageRefs.current;
    const textsArray = textRefs.current;

    gsap.to(imagesArray, {
      xPercent: -100 * (images.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        //@ts-ignore
        end: () => `+=${container.offsetHeight}`,
      },
    });

    imagesArray.forEach((image, i) => {
      gsap.to(textsArray[i], {
        opacity: 0,
        scrollTrigger: {
          trigger: image,
          //@ts-ignore
          containerAnimation: imagesArray,
          start: 'center center',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="slider-image"
          //@ts-ignore
          ref={(el) => (imageRefs.current[index] = el)}
        >
          <img src={image.src} alt={`Slide ${index + 1}`} />
          <div
            className="slider-text"
            //@ts-ignore
            ref={(el) => (textRefs.current[index] = el)}
          >
            {image.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;