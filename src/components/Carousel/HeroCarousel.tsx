"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Button, Box, Typography } from "@mui/material";

import image1 from "@/assets/HeroCarouselImage1.jpg";
import image2 from "@/assets/HeroCarouselImage2.jpg";
import image3 from "@/assets/HeroCarouselImage3.png";
import image4 from "@/assets/HeroCarouselImage4.jpg";
import image5 from "@/assets/HeroCarouselImage5.jpg";
import image6 from "@/assets/HeroCarouselImage6.jpg";
import image7 from "@/assets/HeroCarouselImage7.jpg";
import styles from "./HeroCarousel.module.css";

const HeroCarousel = () => {
  const slidesData = [
    {
      imgSrc: image1,
      title: "A return to the Windy City",
      description:
        '"Got my headphones in and my songs on play, I\'ve been jamming some old school soul."',
      button1Label: 'Watch "L-TRAIN"',
      button2Label: "More Details",
      top: "15%",
      left: "20px",
      color: "#fff",
    },
    {
      imgSrc: image2,
      title: "Eddie Chacon - 'Lay Low'",
      description:
        "A new album from Eddie, produced by Nick Hakim, out January 31st.",
      button1Label: "Vinyl Pre-Order",
      button2Label: 'Listen to "Empire"',
      top: "15%",
      right: "10%",
    },
    {
      imgSrc: image3,
      title: "A New Album from Campus Christy",
      description:
        "A covers record inspired by private-press albums that influenced Stones Throw over the years.",
      button1Label: "Buy Vinyl",
      button2Label: "Watch \"Horizon\" Music Video",
      top: "10%",
      left: "5%",
      color: "#fff",
    },
    {
      imgSrc: image4,
      title: "Jerry Paper - 'INBETWEEZER'",
      description:
        "Jerry's new album is out now. Order bubblegum marbled vinyl today.",
      button1Label: "Listen",
      button2Label: "Buy Vinyl",
      top: "10%",
      right: "5%",
      color: "#fff",
    },
    {
      imgSrc: image5,
      title: "Celebrating 50 Years of 'Hosono House'",
      description:
        "Pre-order 'Hosono House Revisited' with reworks by Mac DeMarco, John Carroll Kirby, Pearl & The Oysters and more.",
      button1Label: "Vinyl Pre-Prder",
      button2Label: "More Details",
      top: "10%",
      left: "20px",
      color: "#fff",
    },
    {
      imgSrc: image6,
      title: "King Pari - 'There It Goes'",
      description: "The duo's debut album is out October 18th.",
      button1Label: "Watch \"Bag. Full. Of. Cash\"",
      button2Label: "More",
      top: "15%",
      right: "0",
      color: "#fff",
    },
    {
      imgSrc: image7,
      title: "Pearl & The Oysters - 'Planet Pearl'",
      description: "An interplanetary voyage soundtracked by jazz-pop joy and depressed disco.",
      button1Label: "Order Vinyl",
      button2Label: "More Details",
      top: "20%",
      left: "5%",
      color: "#fff",
    },
  ];

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 40000 }}
        loop
        spaceBetween={50}
        slidesPerView={1}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <Image
                src={slide.imgSrc}
                alt={slide.title}
                layout="responsive"
                objectFit="cover"
              />
              <div
                className={styles.overlay}
                style={{
                  top: slide.top,
                  left: slide.left,
                  right: slide.right,
                  color: slide.color,
                }}
              >
                <Typography variant="h3" className={styles.title}>
                  {slide.title}
                </Typography>
                <Typography variant="subtitle1" className={styles.description}>
                  {slide.description}
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    color="warning"
                    className={styles.buttons}
                  >
                    {slide.button1Label}
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    style={{ marginLeft: "16px" }}
                    className={styles.buttons}
                  >
                    {slide.button2Label}
                  </Button>
                </Box>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
