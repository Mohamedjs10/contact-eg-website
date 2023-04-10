import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { colors } from "../../utils/const";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
export default function Rewards() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const cardGeneration = ({
    id,
    title,
    subTitle,
    headingKey,
    headingVal,
    purchaseKey,
    purchaseVal,
    firstTreatmentKey,
    firstTreatmentSubKey,
    firstTreatmentVal,
    lastTreatmentKey,
    lastTreatmentSubKey,
    lastTreatmentVal,
  }) => {
    return (
      <Box key={id} sx={{ mb: 5 }}>
        <Typography
          variant="h6"
          sx={{
            color: colors.blue,
            fontWeight: "600",
            textAlign: locale === "en" ? "left" : "right",
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: locale === "en" ? "left" : "right",
            mb: 3,
            width: {
              md: "40%",
              xs: "100%",
            },
          }}
        >
          {subTitle}
        </Typography>
        <Box
          sx={{
            border: "1px solid black",
            borderRight: locale === "en" ? "1px solid black" : "none",
            borderLeft: locale === "ar" ? "1px solid black" : "none",
          }}
        >
          <Box sx={{ display: "flex", borderBottom: "1px solid black", p: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "1.1rem",
                fontWeight: "600",
                width: "40%",
                textAlign: locale === "en" ? "left" : "right",
              }}
            >
              {headingKey}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "600", fontSize: "1.1rem", mx: 2 }}
            >
              {headingVal}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", borderBottom: "1px solid black", p: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{
                width: "40%",
                textAlign: locale === "en" ? "left" : "right",
              }}
            >
              {purchaseKey}
            </Typography>
            <Typography variant="subtitle2" sx={{ mx: 2 }}>
              {purchaseVal}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", p: 2, borderBottom: "1px solid black" }}>
            <Box
              sx={{
                width: "40%",
                textAlign: locale === "en" ? "left" : "right",
              }}
            >
              <Typography variant="subtitle2">{firstTreatmentKey}</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "300" }}>
                {firstTreatmentSubKey}
              </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ mx: 2 }}>
              {firstTreatmentVal}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", p: 2 }}>
            <Box
              sx={{
                width: "40%",
                textAlign: locale === "en" ? "left" : "right",
              }}
            >
              <Typography variant="subtitle2">{lastTreatmentKey}</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "300" }}>
                {lastTreatmentSubKey}
              </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ mx: 2 }}>
              {lastTreatmentVal}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <Box
      sx={{ flex: "1 1 0", p: 4, textAlign: "center" }}
      className="horizontal-safe-padding"
    >
      <Typography
        variant="h4"
        sx={{ color: colors.blue, fontWeight: "700", mb: 5 }}
      >
        {t.rewards.title}
      </Typography>
      {t.rewards.pointsCard.map(
        ({
          id,
          title,
          subTitle,
          headingKey,
          headingVal,
          purchaseKey,
          purchaseVal,
          firstTreatmentKey,
          firstTreatmentSubKey,
          firstTreatmentVal,
          lastTreatmentKey,
          lastTreatmentSubKey,
          lastTreatmentVal,
        }) =>
          cardGeneration({
            id,
            title,
            subTitle,
            headingKey,
            headingVal,
            purchaseKey,
            purchaseVal,
            firstTreatmentKey,
            firstTreatmentSubKey,
            firstTreatmentVal,
            lastTreatmentKey,
            lastTreatmentSubKey,
            lastTreatmentVal,
          })
      )}
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" sx={{ color: colors.orange }}>
          {t.rewards.note}
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: "1rem", mt: 1, mx: 1, color: colors.blue }}
        >
          {t.rewards.noteText}
        </Typography>
      </Box>
    </Box>
  );
}
