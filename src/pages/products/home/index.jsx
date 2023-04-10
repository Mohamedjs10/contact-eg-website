import React from "react";
import Image from "next/image";
import { styles } from "./styles";
import { colors } from "../../../utils/const";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";
import PageCover from "@/components/PageCover";
import Card from "@/components/Card.jsx";
import { Box } from "@mui/material";
import Calculator from "../../../components/Calculator.jsx";

// ================================================================
export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <Box sx={styles.container}>
      <PageCover
        color={t.products_home.cover.color}
        img={t.products_home.cover.img}
        title1={t.products_home.cover.title1}
        title2={t.products_home.cover.title2}
        description={t.products_home.cover.description}
        formType="a"
      />
      {/* ============================ Section A ============================= */}
      <Box
        className="horizontal-safe-padding vertical-safe-padding"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", lg: "space-between" },
          alignItems: "center",
          textAlign: { xs: "center", md: "initial" },
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
          }}
        >
          <Box sx={{ fontSize: "42px", color: colors.orange, mb: 1.5 }}>
            {t.products_home.section_a.title}
          </Box>
          <Box
            component="ul"
            sx={{
              listStylePosition: "inside",
              p: 0,
              mb: 3,
              textAlign: "initial",
            }}
          >
            {t.products_home.section_a.body.map((item, index) => (
              <li>{item}</li>
            ))}
          </Box>
        </Box>
        <Box
          component="img"
          src={t.products_finishing.section_b.img}
          sx={{ width: { xs: "200px", sm: "250px", md: "300px", lg: "400px" } }}
        />
      </Box>
      {/* ============================ Section B ============================= */}
      <Box
        className="horizontal-safe-padding vertical-safe-padding"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", lg: "space-between" },
          alignItems: "center",
          textAlign: { xs: "center", md: "initial" },
          bgcolor: "white",
        }}
      >
        <Box
          component="img"
          src={t.products_finishing.section_b.img}
          sx={{ width: { xs: "200px", sm: "250px", md: "300px", lg: "400px" } }}
        />
        <Box
          sx={{
            maxWidth: "700px",
          }}
        >
          <Box sx={{ fontSize: "42px", color: colors.orange, mb: 1.5 }}>
            {t.products_home.section_b.title}
          </Box>
          <Box
            component="ul"
            sx={{
              listStylePosition: "inside",
              p: 0,
              mb: 3,
              textAlign: "initial",
            }}
          >
            {t.products_home.section_b.body.map((item, index) => (
              <li>{item}</li>
            ))}
          </Box>
        </Box>
      </Box>
      {/* =============================================================== */}
      <Box className="horizontal-safe-padding vertical-safe-padding">
        <Box
          sx={{
            color: colors.orange,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "56px",
            mb: 4,
          }}
        >
          {t.products_home.card_section_title}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 4, lg: 20 },
          }}
        >
          {t.products_home.cards.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              bodyList={item.body}
              color="#2D9A8F"
            ></Card>
          ))}
        </Box>
      </Box>
      {/* =============================================================== */}
      <Calculator />
    </Box>
  );
}
