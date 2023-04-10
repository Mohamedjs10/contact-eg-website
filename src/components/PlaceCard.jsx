import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./place_card";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function MemberCard({ img, name }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box
      sx={{
        "&:hover": { cursor: "grab" },
        "&:active": { cursor: "grabbing" },
        width: "280px", // change me
        height: "320px", //change me
        color: colors.black,
        bgcolor: colors.white,
        boxShadow:
          "0px 2px 10px rgba(4, 9, 33, 0.05), 0px 2px 0px rgba(4, 9, 33, 0.05), 0px 0px 5px rgba(4, 9, 33, 0.03)",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          mt: 2,
          height: "240px",
          width: "240px",
        }}
      />

      <Box
        sx={{
          mb: 2,
          [locale === "en" ? "ml" : "mr"]: 3,
          fontSize: "20px",
          fontWeight: "bold",
          alignSelf: "flex-start",
        }}
      >
        {name}
      </Box>
    </Box>
  );
}
