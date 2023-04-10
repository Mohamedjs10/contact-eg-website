import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./service";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function MemberCard({ img, name, role }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box
      sx={{
        "&:hover": { cursor: "grab" },
        "&:active": { cursor: "grabbing" },
        position: "relative",
        color: colors.white,
        width: "230px", // change me
        height: "300px", //change me
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          height: "100%",
          width: "100%",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(12px)",
          height: "35%",
          width: "100%",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ m: 1, fontSize: "20px" }}>{name}</Box>
        <Box sx={{ m: 1, fontSize: "12px" }}>{role}</Box>
      </Box>
    </Box>
  );
}
