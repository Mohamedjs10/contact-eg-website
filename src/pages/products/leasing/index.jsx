import React, { useState } from "react";

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
import Number from "../../../components/mini-components/Number.jsx";

// ================================================================
export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const [state, setState] = useState("");

  return (
    <Box sx={styles.container}>
      <PageCover
        color={t.products_leasing.cover.color}
        img={t.products_leasing.cover.img}
        title1={t.products_leasing.cover.title1}
        title2={t.products_leasing.cover.title2}
        description={t.products_leasing.cover.description}
        formType="a"
      />
      {/* ============================ Section A ============================= */}
      <Box
        className="horizontal-safe-padding vertical-safe-padding"
        sx={{
          bgcolor: "white",
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
            {t.products_leasing.section_a.title}
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
            {t.products_leasing.section_a.body.map((item, index) => (
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
      <Box className="horizontal-safe-padding vertical-safe-padding">
        <Box sx={{ mb: 2 }}>
          <Box
            sx={{ fontSize: "42px", color: colors.orange, fontWeight: "bold" }}
          >
            {t.products_leasing.section_b.title}
          </Box>
          <Box>{t.products_leasing.section_b.description}</Box>
        </Box>
        <Box sx={styles.sectionContainer}>
          <Box
            component="img"
            src="/img-list.png"
            sx={{ width: { xs: "200px", sm: "350px", md: "600px" } }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontSize: "30px",
              gap: 2,
            }}
          >
            {t.products_leasing.section_b.list.map((item) => (
              <>
                <Box
                  sx={{ display: "flex", gap: 2 }}
                  onMouseEnter={() => setState(item[2])}
                  onMouseLeave={() => setState("")}
                >
                  <Number n={item[2]} state={state} />
                  <Box
                    component="span"
                    sx={{
                      width: { xs: "300px", sm: "650px" },
                      fontSize: { xs: "15px", sm: "20px" },
                    }}
                  >
                    {item[0]}
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: { xs: "300px", sm: "650px" },
                    fontSize: { xs: "12px", sm: "15px" },
                  }}
                >
                  {item[1]}
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Box>
      {/* =============================================================== */}
      <Calculator />
    </Box>
  );
}
