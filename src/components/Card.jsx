import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./card";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";

import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function Card({ title, bodyList, color, scaled }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box
      sx={{
        bgcolor: color,
        color: "white",
        width: { xs: "250px", md: "370px" },
        height: "200px",
        borderRadius: "30px",
        p: 2,
        cursor: "default",
        transition: "1s",
        "&:hover": { scale: scaled ? "1.1" : "1" },
      }}
    >
      <Box
        sx={{ fontSize: { xs: "20px", md: "25px" }, fontWeight: "bold", mb: 2 }}
      >
        {title}
      </Box>
      <Box
        component="ul"
        sx={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          fontSize: { xs: "15px", md: "17px" },
        }}
      >
        {bodyList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Box>
    </Box>
  );
}
