import React from "react";
import Image from "next/image";
import { styles } from "./styles";
import { colors } from "../../../utils/const";
import Link from "next/link";

import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";
import ContentCard from "../../../components/our-brands/ContentCard";
import VerticalCarousel from "@/components/VerticalCarousel";
import PageCover from "@/components/PageCover";
import PlaceCard from "@/components/PlaceCard";
import IconTileSection from "../../../components/mini-components/IconTileSection.jsx";
import ImgListSection from "../../../components/mini-components/ImgListSection.jsx";
import { useFormik } from "formik";
// import { EnSchema } from "../utils/en_schema";
// import { ArSchema } from "../utils/ar_schema";
import { Box, TextField, InputLabel, MenuItem, Button } from "@mui/material";
import Calculator from "../../../components/Calculator.jsx";

// ================================================================
export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  console.log(t.general.reviews);

  return (
    <Box sx={styles.container}>
      <PageCover
        color={t.products_education.cover.color}
        img={t.products_education.cover.img}
        title1={t.products_education.cover.title1}
        title2={t.products_education.cover.title2}
        description={t.products_education.cover.description}
        formType="a"
      />
      <IconTileSection page="shopping"></IconTileSection>

      {/* =============================================================== */}
      <Calculator></Calculator>
    </Box>
  );
}
