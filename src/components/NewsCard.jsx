import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./news-card";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function Secondary_Navbar({ img, title, description }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box>
      <Box sx={styles.container}>
        <img src={img} height="120px" width="120px" />
        <Box sx={styles.text_container}>
          <Box sx={{ color: colors.blue, fontWeight: "bold" }}>{title}</Box>
          <Box
            sx={{
              color: colors.ratty,
              lineHeight: "1.5",
              display: { xs: "none", lg: "block" },
            }}
          >
            {description}
          </Box>
          <Box component={Link} href="/" sx={styles.link}>
            {t.home_page.news_button2}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
