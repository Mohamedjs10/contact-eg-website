import React, { useState } from "react";
import { Box } from "@mui/material";

import Text from "../components/mini-components/text.jsx";
import { colors } from "../utils/const";
import { styles } from "./paragraph";
import { useRouter } from "next/router";

export default function Paragraph({
  img,
  title,
  body,
  bodyList,
  orientation,
  textStyle,
}) {
  const router = useRouter();
  const { locale } = router;
  const enArAlignment =
    locale == "en"
      ? textStyle.textAlign
      : textStyle.textAlign == "right"
      ? "left"
      : textStyle.textAlign == "left"
      ? "right"
      : "center";
  return (
    <Box
      sx={styles.container}
      style={{ justifyContent: img ? "space-between" : "center" }}
      className="horizontal-safe-margin"
    >
      {orientation == 1 ? (
        <>
          <Text
            title={title}
            body={body}
            textStyle={{ ...textStyle, textAlign: enArAlignment }}
          />
          <Box sx={{ width: "300px", display: img ? "block" : "none" }}>
            <img src={img} width="100%" />
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ width: "300px", display: img ? "block" : "none" }}>
            <img src={img} width="100%" />
          </Box>
          <Text
            title={title}
            body={body}
            textStyle={{ ...textStyle, textAlign: enArAlignment }}
          />
        </>
      )}
    </Box>
  );
}
