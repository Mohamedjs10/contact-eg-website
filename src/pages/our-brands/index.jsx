import React from "react";
import Image from "next/image";
import { styles } from "./styles";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import ContentCard from "../../components/our-brands/ContentCard";
export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box sx={styles.container}>
      <Box
        sx={{ fontSize: "40px", fontWeight: "bold", color: colors.orange }}
        className="section-safe-padding-top"
      >
        {t.our_brand_page.title}
      </Box>
      <Box
        className="vertical-safe-margin"
        sx={styles.img}
        component="img"
        src="/our-brands/cover.png"
        alt="Picture of the author"
      />
      <Box sx={styles.body} className="section-safe-padding-bottom">
        {t.our_brand_page.body.map((item, index) => (
          <ContentCard
            img={item.img}
            content={item.content}
            link={item.link}
            key={index}
          ></ContentCard>
        ))}
      </Box>
    </Box>
  );
}
