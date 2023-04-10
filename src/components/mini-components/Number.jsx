import React, { useRef, useEffect } from "react";
import { styles } from "./number";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
export default function Number({ n, state }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let leftOrRight = locale === "en" ? "left" : "right";
  return (
    <Box
      component="span"
      sx={{
        bgcolor: state == n ? colors.orange : "grey",
        borderRadius: "50%",
        width: { xs: "20px", sm: "30px", md: "35px" },
        height: { xs: "20px", sm: "30px", md: "35px" },
        fontSize: { xs: "15px", sm: "25px", md: "27px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      {n}
    </Box>
  );
}
