import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./service";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { Swiper, SwiperSlide } from "swiper/react";
import MemberCard from "@/components/MemberCard";
import PlaceCard from "@/components/PlaceCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "url(forward-arrow.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "url(back-arrow.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

// ======================
export default function VerticalCarousel({
  itemsArray,
  Component,
  slidesPerView,
  bg = colors.bg_grey,
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let dir = locale === "en" ? "left" : "right";

  return (
    <Box
      className={`vertical-safe-padding section-safe-padding-${dir}`}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        bgcolor: bg,
      }}
    >
      <Box
        sx={{
          width: "100%", // change me
          "& .swiper-pagination": {
            bottom: "22px !important",
            textAlign: dir,
          },
          "& .swiper-pagination-bullet": {
            bgcolor: "#000",
          },
          "& .swiper-button-next": {
            zIndex: "100",
            backgroundImage:
              locale === "en"
                ? "url('/forward1-arrow.png')"
                : "url('/back1-arrow.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            backgroundPosition: "center",
            [dir]: {
              xs: "280px !important",
              sm: "500px !important",
              md: "700px !important",
              lg: "1300px !important",
            },
            top: "90%",
            width: "40px !important",
            height: "40px !important",
          },

          "& .swiper-button-prev": {
            zIndex: "100",
            backgroundImage:
              locale === "en"
                ? "url('/back1-arrow.png')"
                : "url('/forward1-arrow.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            backgroundPosition: "center",
            [dir]: {
              xs: "230px !important",
              sm: "450px !important",
              md: "650px !important",
              lg: "1250px !important",
            },
            top: "90%",
            width: "40px !important",
            height: "40px !important",
          },

          "& .swiper-button-next::after": {
            display: "none",
          },
          "& .swiper-button-prev::after": {
            display: "none",
          },
        }}
      >
        <Swiper
          style={{ paddingBottom: "80px" }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1.3}
          spaceBetween={10}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            600: {
              slidesPerView: slidesPerView - 3,
              // spaceBetween: 20,
            },
            900: {
              slidesPerView: slidesPerView - 2,
              // spaceBetween: 25,
            },
            1200: {
              slidesPerView: slidesPerView,
              // spaceBetween: 30,
            },
          }}
        >
          {itemsArray.map(
            ({ avatar, name, role, rating, review, img }, index) => (
              <SwiperSlide key={index}>
                <Component
                  // ReviewCard
                  avatar={avatar}
                  name={name}
                  role={role}
                  rating={rating}
                  review={review}
                  // MemberCard
                  img={img}
                ></Component>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Box>
    </Box>
  );
}
