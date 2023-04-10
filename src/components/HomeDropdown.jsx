import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./home_dropdown";
import Service from "./Service.jsx";
import NewsCard from "./NewsCard.jsx";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function HomeDropdown({ isOpen, type }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box
      className="horizontal-safe-padding"
      sx={{
        borderTop: `2px solid ${colors.light_grey}`,
        borderBottom: `2px solid ${colors.light_grey}`,
        bgcolor: colors.white,
        transition: "1s",
        opacity: isOpen ? "100" : "0",
        zIndex: isOpen ? "999999999" : "-1",
      }}
      style={{
        position: "absolute",
        top: "125px",
        width: "100%",
        // height: "620px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {type == "a" ? (
          <>
            <Box sx={{ overflow: "auto", height: "600px" }}>
              {t.home_page.services.A.map(
                ({ color, title, description, img }, index) => (
                  <Service
                    key={index}
                    color={color}
                    title={title}
                    description={description}
                    img={img}
                  />
                )
              )}
            </Box>
            <Box sx={{ overflow: "auto", height: "600px" }}>
              {t.home_page.services.B.map(
                ({ color, title, description, img }, index) => (
                  <Service
                    key={index}
                    color={color}
                    title={title}
                    description={description}
                    img={img}
                  />
                )
              )}
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ overflow: "auto", height: "600px" }}>
              {t.home_page.services.C.map(
                ({ color, title, description, img }, index) => (
                  <Service
                    key={index}
                    color={color}
                    title={title}
                    description={description}
                    img={img}
                  />
                )
              )}
            </Box>
            <Box sx={{ overflow: "auto", height: "600px" }}>
              {t.home_page.services.D.map(
                ({ color, title, description, img }, index) => (
                  <Service
                    key={index}
                    color={color}
                    title={title}
                    description={description}
                    img={img}
                  />
                )
              )}
            </Box>
          </>
        )}

        <Box sx={{ bgcolor: colors.light_grey, p: 3 }}>
          <Box
            sx={{
              color: colors.blue,
              fontSize: "20px",
              fontWeight: "bold",
              mb: 3,
            }}
          >
            {t.home_page.news_title}
          </Box>
          {t.home_page.news.map(({ title, description, img }, index) => (
            <NewsCard
              key={index}
              title={title}
              description={description}
              img={img}
              index={index}
            />
          ))}
          <Box
            component={Button}
            sx={{
              color: colors.ratty,
              fontSize: "20px",
              fontWeight: "bold",
              mt: 3,
            }}
          >
            {t.home_page.news_button2}
            {locale === "en" ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowLeftIcon />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
