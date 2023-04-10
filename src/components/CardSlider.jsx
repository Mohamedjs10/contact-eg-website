import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { styles } from "./bottom_card";
import { Box } from "@mui/material";
import { colors } from "../utils/const";
import Link from "next/link";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Card from "./Card.jsx";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function BottomCard({}) {
  const [state, setState] = useState(0);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const arr = ["", "", "", "", "", "", "", "", "", ""];

  return (
    <Box
      sx={{
        py: 30,
        "& .swiper-slide-active": {
          transition: ".5s",
          scale: { xs: "1", md: "1.2" },
          overflow: "visible",
        },
        "& .swiper": {
          overflow: { xs: "hidden", md: "visible" },
        },
      }}
    >
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            // spaceBetween: 20,
          },
          900: {
            slidesPerView: 2.7,
            // spaceBetween: 25,
          },
          1200: {
            slidesPerView: 3.7,
            // spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        className="mySwiper"
      >
        {arr.map((item, index) => (
          <SwiperSlide>
            <Card
              state={state}
              index={index}
              title={"النقل الجديد النظام العادي"}
              bodyList={[
                "٪٢٠ نم أدبي مدقم",
                "التأمين أجباري",
                "فترات سداد تصل الي 3 سنوات",
              ]}
              color="#1169A8"
            ></Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
