import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../../utils/const";
import { styles } from "./image_section";
import ImageCard from "../../components/ImageCard.jsx";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import Title from "../../components/mini-components/Title.jsx";
export default function ImageSection({}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let leftOrRight = locale === "en" ? { right: "0px" } : { left: "0px" };
  let margin = locale === "en" ? "mr" : "ml";
  return (
    <Box
      sx={styles.container}
      className="horizontal-safe-padding vertical-safe-padding"
    >
      <Title title={t.home_page.products_title} lineWidth="300px" />
      <Box sx={styles.grid}>
        {t.home_page.products.map((item, index) => (
          <ImageCard
            key={index}
            title1={item.title1}
            title2={item.title2}
            img={item.img}
          />
        ))}
      </Box>
    </Box>
  );
}
