import React from "react";
import Image from "next/image";
import { styles } from "./styles";
import { colors } from "../../../utils/const";
import Link from "next/link";

import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";
import ContentCard from "../../../components/our-brands/ContentCard";
import VerticalCarousel from "@/components/VerticalCarousel";
import PageCover from "@/components/PageCover";
import PlaceCard from "@/components/PlaceCard";
import IconTileSection from "../../../components/mini-components/IconTileSection.jsx";
import ImgListSection from "../../../components/mini-components/ImgListSection.jsx";
import { useFormik } from "formik";
// import { EnSchema } from "../utils/en_schema";
// import { ArSchema } from "../utils/ar_schema";
import { Box, TextField, InputLabel, MenuItem, Button } from "@mui/material";

// ================================================================
export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  // formik ==========================================================
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate delay
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      governorate: "",
      area: "",
      username: "",
      lastname: "",
      car_type: "",
      car_price: "",
    },
    // validationSchema: locale === "en" ? EnSchema : ArSchema,
    onSubmit,
  });
  return (
    <Box sx={styles.container}>
      <PageCover
        color={t.products_insurance_page.cover.color}
        img={t.products_insurance_page.cover.img}
        title1={t.products_insurance_page.cover.title1}
        title2={t.products_insurance_page.cover.title2}
        description={t.products_shopiing_page.cover.description}
        formType="b"
      />
      <Box
        className="horizontal-safe-padding vertical-safe-padding"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          bgcolor: colors.white,
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        <Box>
          <Box
            sx={{
              pb: 2,
              color: colors.orange,
              fontSize: "30px",
            }}
          >
            {t.products_insurance_page.section_a[0].title}
          </Box>
          <Box
            component="ul"
            sx={{
              listStylePosition: "inside",
              px: 2,
              color: colors.navy_blue,
              fontSize: "20px",
            }}
          >
            {t.products_insurance_page.section_a[0].points.map((item) => (
              <li>{item}</li>
            ))}
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              pb: 2,
              color: colors.orange,
              fontSize: "30px",
            }}
          >
            {t.products_insurance_page.section_a[0].title}
          </Box>
          <Box
            component="ul"
            sx={{
              listStylePosition: "inside",
              px: 2,
              color: colors.navy_blue,
              fontSize: "20px",
            }}
          >
            {t.products_insurance_page.section_a[0].points.map((item) => (
              <li>{item}</li>
            ))}
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              pb: 2,
              color: colors.orange,
              fontSize: "30px",
            }}
          >
            {t.products_insurance_page.section_a[0].title}
          </Box>
          <Box
            component="ul"
            sx={{
              listStylePosition: "inside",
              px: 2,
              color: colors.navy_blue,
              fontSize: "20px",
            }}
          >
            {t.products_insurance_page.section_a[0].points.map((item) => (
              <li>{item}</li>
            ))}
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              pb: 2,
              color: colors.orange,
              fontSize: "30px",
            }}
          >
            {t.products_insurance_page.section_a[0].title}
          </Box>
          <Box
            component="ul"
            sx={{
              listStylePosition: "inside",
              px: 2,
              color: colors.navy_blue,
              fontSize: "20px",
            }}
          >
            {t.products_insurance_page.section_a[0].points.map((item) => (
              <li>{item}</li>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
