import React from "react";
import Image from "next/image";
import { styles } from "./pid-styles";
import { Box, Typography } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Pagination, Button } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const themeRtl = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
const themeLtr = createTheme({
  direction: "ltr", // Both here and <body dir="ltr">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let dir = locale === "en" ? "mr" : "ml";

  const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
    palette: {
      primary: {
        main: colors.blue,
      },
      secondary: {
        main: colors.orange,
      },
    },
  });
  const theme1 = createTheme({
    palette: {
      primary: {
        main: colors.blue,
      },
      secondary: {
        main: colors.orange,
      },
    },
  });

  return (
    <Box sx={{}} className="horizontal-safe-margin">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box
          sx={{
            flex: "1 1 50%",
          }}
        >
          <img src="/image.png" width="100%" />
          <Box sx={{ my: 2, fontWeight: "bold" }}>
            كونتكت تطلق منتج رقمي لتأمين السيارات
          </Box>
          <Box sx={{ mb: 2 }}>
            كونتكت المالية القابضة تعلن اليوم عن إطلاق منتج رقمي بالكامل للتأمين
            التكميلى للسيارات في مصر. يتوفر المنتج من خلال منصة كونتكت كارز دوت
            كوم وشركة ثروة للتأمين وشركة كونتكت ...
          </Box>
          <Box
            component={Button}
            sx={{
              color: colors.ratty,
              fontSize: "14px",
              fontWeight: "bold",
              mt: "auto",
            }}
          >
            إقرأ المزيد
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1 1 50%",
          }}
        >
          {/* ============ */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "160px",
            }}
          >
            <img src="/image.png" width="150px" height="100%" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                justifyContent: { xs: "center", sm: "space-between" },

                alignItems: "flex-start",
                fontSize: "14px",
              }}
            >
              <Box sx={{ fontWeight: "bold" }}>
                كونتكت تطلق منتج رقمي لتأمين السيارات
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                كونتكت المالية القابضة تعلن اليوم عن إطلاق منتج رقمي بالكامل
                للتأمين التكميلى للسيارات في مصر. يتوفر المنتج من خلال منصة
                كونتكت كارز دوت كوم وشركة ثروة للتأمين وشركة كونتكت ...
              </Box>
              <Box
                component={Button}
                sx={{
                  color: colors.ratty,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                إقرأ المزيد
              </Box>
            </Box>
          </Box>
          {/* ============ */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "160px",
              my: 2,
            }}
          >
            <img src="/image.png" width="150px" height="100%" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                justifyContent: { xs: "center", sm: "space-between" },

                alignItems: "flex-start",
                fontSize: "14px",
              }}
            >
              <Box sx={{ fontWeight: "bold" }}>
                كونتكت تطلق منتج رقمي لتأمين السيارات
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                كونتكت المالية القابضة تعلن اليوم عن إطلاق منتج رقمي بالكامل
                للتأمين التكميلى للسيارات في مصر. يتوفر المنتج من خلال منصة
                كونتكت كارز دوت كوم وشركة ثروة للتأمين وشركة كونتكت ...
              </Box>
              <Box
                component={Button}
                sx={{
                  color: colors.ratty,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                إقرأ المزيد
              </Box>
            </Box>
          </Box>
          {/* ============ */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "160px",
            }}
          >
            <img src="/image.png" width="150px" height="100%" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                justifyContent: { xs: "center", sm: "space-between" },
                alignItems: "flex-start",
                fontSize: "14px",
              }}
            >
              <Box sx={{ fontWeight: "bold" }}>
                كونتكت تطلق منتج رقمي لتأمين السيارات
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                كونتكت المالية القابضة تعلن اليوم عن إطلاق منتج رقمي بالكامل
                للتأمين التكميلى للسيارات في مصر. يتوفر المنتج من خلال منصة
                كونتكت كارز دوت كوم وشركة ثروة للتأمين وشركة كونتكت ...
              </Box>
              <Box
                component={Button}
                sx={{
                  color: colors.ratty,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                إقرأ المزيد
              </Box>
            </Box>
          </Box>
          {/* ================================================ */}
        </Box>
      </Box>
      {/*  ###################################### Body ########################################### */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <Box sx={{ width: "410px" }}>
          <Box component="img" src="/image.png" width="100%" />
          <Typography sx={{ fontWeight: "bold", my: 2, color: colors.blue }}>
            كونتكت توقع برنامج تمويل فريد من نوعه في مصر مع كابيتر
          </Typography>
          <Box sx={{ color: colors.v_dark_grey }}>
            وقعت كونتكت المالية القابضة (CNFN)، الشركة الرائدة في مجال الخدمات
            المالية غير مصرفية في مصر، من خلال شركة كونتكت للتخصيم، أحد ...
          </Box>
        </Box>
        <Box sx={{ width: "410px" }}>
          <Box component="img" src="/image.png" width="100%" />
          <Typography sx={{ fontWeight: "bold", my: 2, color: colors.blue }}>
            كونتكت توقع برنامج تمويل فريد من نوعه في مصر مع كابيتر
          </Typography>
          <Box sx={{ color: colors.v_dark_grey }}>
            وقعت كونتكت المالية القابضة (CNFN)، الشركة الرائدة في مجال الخدمات
            المالية غير مصرفية في مصر، من خلال شركة كونتكت للتخصيم، أحد ...
          </Box>
        </Box>
        <Box sx={{ width: "410px" }}>
          <Box component="img" src="/image.png" width="100%" />
          <Typography sx={{ fontWeight: "bold", my: 2, color: colors.blue }}>
            كونتكت توقع برنامج تمويل فريد من نوعه في مصر مع كابيتر
          </Typography>
          <Box sx={{ color: colors.v_dark_grey }}>
            وقعت كونتكت المالية القابضة (CNFN)، الشركة الرائدة في مجال الخدمات
            المالية غير مصرفية في مصر، من خلال شركة كونتكت للتخصيم، أحد ...
          </Box>
        </Box>
        <Box sx={{ width: "410px" }}>
          <Box component="img" src="/image.png" width="100%" />
          <Typography sx={{ fontWeight: "bold", my: 2, color: colors.blue }}>
            كونتكت توقع برنامج تمويل فريد من نوعه في مصر مع كابيتر
          </Typography>
          <Box sx={{ color: colors.v_dark_grey }}>
            وقعت كونتكت المالية القابضة (CNFN)، الشركة الرائدة في مجال الخدمات
            المالية غير مصرفية في مصر، من خلال شركة كونتكت للتخصيم، أحد ...
          </Box>
        </Box>
        <Box sx={{ width: "410px" }}>
          <Box component="img" src="/image.png" width="100%" />
          <Typography sx={{ fontWeight: "bold", my: 2, color: colors.blue }}>
            كونتكت توقع برنامج تمويل فريد من نوعه في مصر مع كابيتر
          </Typography>
          <Box sx={{ color: colors.v_dark_grey }}>
            وقعت كونتكت المالية القابضة (CNFN)، الشركة الرائدة في مجال الخدمات
            المالية غير مصرفية في مصر، من خلال شركة كونتكت للتخصيم، أحد ...
          </Box>
        </Box>
        <Box sx={{ width: "410px" }}>
          <Box component="img" src="/image.png" width="100%" />
          <Typography sx={{ fontWeight: "bold", my: 2, color: colors.blue }}>
            كونتكت توقع برنامج تمويل فريد من نوعه في مصر مع كابيتر
          </Typography>
          <Box sx={{ color: colors.v_dark_grey }}>
            وقعت كونتكت المالية القابضة (CNFN)، الشركة الرائدة في مجال الخدمات
            المالية غير مصرفية في مصر، من خلال شركة كونتكت للتخصيم، أحد ...
          </Box>
        </Box>
      </Box>

      <Box sx={{ pt: 3 }}>
        {locale === "en" && (
          <ThemeProvider theme={theme1}>
            <Pagination count={100} color="primary" />
          </ThemeProvider>
        )}

        {locale === "ar" && (
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
              <Pagination count={100} color="primary" />
            </ThemeProvider>
          </CacheProvider>
        )}
      </Box>
    </Box>
  );
}
