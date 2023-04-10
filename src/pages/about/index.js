import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { colors } from "../../utils/const";
//
import { styles } from "../../components/secondary_navbar";
//
import AboutSection from "../../components/aboutSec/about";
import AboutCardVal from "../../components/aboutCard/aboutCard";
import Statistics from "../../components/statistics/statistics";
import Carousal from "../../components/VerticalCarousel";
import MemberItem from "../../components/MemberCard";

//
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";

export default function About() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  const [active, setActive] = useState("1");

  const handleActiveChange = (idx) => {
    setActive(idx);
  };

  return (
    <Box>
      <AboutSection />
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
        {t.about.statistic.map((item) => (
          <Statistics
            key={item.id}
            type="about"
            num={item.count}
            suffix={item.sufTheous}
            text={item.text}
          />
        ))}
      </Box>
      <Box
        sx={{
          my: {
            xs: 6,
            md: 12,
          },
          py: 8,
          bgcolor: "#F9FAFB",
          textAlign: "center",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ display: "block", color: colors.blue, fontWeight: "600" }}
        >
          {t.about.card.valueTitle}
        </Typography>
        <Typography sx={{ color: colors.blue, my: 2 }} variant="h5">
          {t.about.title}
        </Typography>
        <Typography variant="subtitle2" sx={{ mb: 4 }}>
          {t.about.text}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
              justifyContent: "space-around",
            },
          }}
        >
          {t.about.card.vision_mission.map((item) => (
            <AboutCardVal
              key={item.id}
              icon={item.img}
              heading={item.title}
              textArr={item.text}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          my: {
            xs: 6,
            md: 12,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              md: "space-between",
            },
            alignItems: "center",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            mx: {
              xs: 6,
              md: 12,
            },
          }}
        >
          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: locale === "en" ? "left" : "right",
              },
            }}
          >
            <Typography variant="h5">{t.about.members.title}</Typography>
            <Typography sx={{ mt: 1, color: "#667085" }} variant="subtitle2">
              {t.about.members.subtitle}
            </Typography>
          </Box>
          <Box
            sx={{
              my: {
                xs: 2,
                md: 0,
              },
            }}
          >
            <Button
              className="mx-2 mt-1"
              onClick={() => handleActiveChange("1")}
              sx={active == "1" ? styles.downloadBtn : styles.loginBtn}
              variant="outlined"
            >
              {t.about.members.directors}
            </Button>
            <Button
              className="mx-2 mt-1"
              onClick={() => handleActiveChange("2")}
              sx={active === "2" ? styles.downloadBtn : styles.loginBtn}
            >
              {t.about.members.mangers}
            </Button>
          </Box>
        </Box>
        <Box>
          <Carousal
            bg="transparent"
            Component={MemberItem}
            slidesPerView={5.5}
            itemsArray={
              active === "1" ? t.general.directors : t.general.mangers
            }
          />
        </Box>
      </Box>
    </Box>
  );
}
