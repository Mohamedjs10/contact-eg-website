import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "../sections/home/image_section";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";

export default function ImageCard({ img, title1, title2 }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <Box
      component={Link}
      href="/"
      sx={{
        width: "282px",
        height: "154px",
        color: colors.white,
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${img})`,
        backgroundSize: "cover",
        borderRadius: 5,
        textAlign: t.textAlign,
        // lineHeight: "1",
        display: "flex",

        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "1.5s",
        textDecoration: "none",

        "&:hover": {
          transform: "scale(1.1)",
          color: colors.white,
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ fontSize: "25px" }}>{title1}</Box>
        <Box sx={{ fontWeight: "bold", fontSize: "32px" }}>{title2}</Box>
      </Box>
    </Box>
  );
}
