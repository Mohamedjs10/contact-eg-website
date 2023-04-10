import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { colors } from "../../utils/const";
//
import RewardsSection from "../../components/rewardsPoints/rewards";
import Statistics from "../../components/statistics/statistics";

//
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";

export default function About() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <Box sx={{ borderBottom: "1px solid lightgrey", bgcolor: "#f8f8f8" }}>
      <Box
        sx={{
          py: {
            xs: 6,
            md: 9,
          },
          bgcolor: "#f8f8f8",
        }}
      >
        <RewardsSection />
      </Box>
      <Box
        sx={{
          borderBottom: "2px solid lightgrey",
          mb: 3,
          mx: {
            md: 12,
            xs: 6,
          },
        }}
      />
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: colors.blue }}>
          {t.rewards.heading}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
          {t.rewards.subHeading}
        </Typography>
        <Box
          sx={{
            mx: {
              xs: 6,
              md: 12,
            },
            my: {
              xs: 6,
              md: 12,
            },
            bgcolor: "#F9FAFB",
            borderRadius: "15px",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
              justifyContent: "space-around",
            },
          }}
        >
          {t.rewards.card.map((item, idx) => {
            return (
              <Statistics
                type="rewards"
                key={idx}
                num={item.count}
                text={item.title}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
