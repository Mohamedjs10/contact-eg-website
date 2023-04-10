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
        color={t.products_clubs.cover.color}
        img={t.products_clubs.cover.img}
        title1={t.products_clubs.cover.title1}
        title2={t.products_clubs.cover.title2}
        description={t.products_clubs.cover.description}
        formType="a"
      />
      <IconTileSection page="shopping"></IconTileSection>

      {/* =============================================================== */}
      <Box sx={{ px: { xs: 0, md: 45 } }} className="vertical-safe-padding">
        <Box
          sx={{
            textAlign: "center",
            fontSize: "56px",
            fontWeight: "bold",
            color: colors.orange,
            py: 2,
          }}
        >
          {t.products_clubs.clubs_title}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          {t.products_clubs.clubs.map((item) => (
            <Box>
              <Box
                component="img"
                src={item[1]}
                sx={{ width: "200px", height: "200px", mb: 2 }}
              />
              <Box sx={{ textAlign: "center" }}>{item[0]}</Box>
            </Box>
          ))}
        </Box>
      </Box>
      {/* =============================================================== */}
      <Calculator></Calculator>
    </Box>
  );
}
