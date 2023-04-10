import React from "react";
import Image from "next/image";
import { styles } from "./styles";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import Button from "@mui/material/Button";
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
export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let dir = locale === "en" ? "mr" : "ml";
  return (
    <Box sx={{}} className="horizontal-safe-margin">
      {/* ================= */}
      {/* <Button
        variant="contained"
        component="label"
        sx={{
          width: "900px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-around",
          bgcolor: "white",
          boxShadow: "none",
          border: `1px solid grey`,
          color: "black",
          "&:hover": {
            bgcolor: "white",
            boxShadow: "none",
          },
        }}
      >
        <img src="/upload.svg"></img>

        <Box sx={{ fontWeight: "bold", fontSize: "20px" }}>
          انقر أو اسحب الملف إلى هذه المنطقة للتحميل
        </Box>
        <Box sx={{ color: "grey" }}>
          انقر أو اسحب الملف إلى هذه المنطقة للتحميل
        </Box>

        <input type="file" hidden />
      </Button> */}
      {/* ================= */}
      <Box
        sx={{
          color: colors.orange,
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        وظائف
      </Box>
      <Box sx={{ maxWidth: "600px", color: colors.blue, my: 2 }}>
        مع التوسعات التي تقوم بها الشركة، نتطلع دائماً لإضافة المزيد من القيادات
        البراقة لفريق العمل الذي يضم أكثر من 1300 موظفاُ. والشركة تتمتع بمعدل
        دوران منخفض جداً للعمالة مع استمرار العديد من مديريها في العمل منذ
        نشأتها. نحن نؤمن بأهمية تنمية وتطوير رأس المال البشري من أجل تحقيق نمونا
        المنشود كأفراد وكفريق عمل وكمؤسسة. إن كنت ترغب في الانضمام إلينا يرجى
        ملء النموذج
      </Box>

      <Box
        sx={{
          mx: "30px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            component="span"
            sx={{
              bgcolor: "#DFE0ED",
              color: colors.blue,
              "&:hover": { bgcolor: "#DFE0ED" },
            }}
          >
            الكل
          </Button>
          <Button
            component="span"
            sx={{
              bgcolor: "#DFE0ED",
              color: colors.blue,
              "&:hover": { bgcolor: "#DFE0ED" },
            }}
          >
            تكنولوجيا المعلومات
          </Button>
          <Button
            component="span"
            sx={{
              bgcolor: "#DFE0ED",
              color: colors.blue,
              "&:hover": { bgcolor: "#DFE0ED" },
            }}
          >
            التسويق
          </Button>
          <Button
            component="span"
            sx={{
              bgcolor: "#DFE0ED",
              color: colors.blue,
              "&:hover": { bgcolor: "#DFE0ED" },
            }}
          >
            المبيعات
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            border: `1px solid ${colors.blue}`,
            color: colors.blue,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box>مهندس برمجيات</Box>
            <Box sx={{ bgcolor: "#EAEAF3", borderRadius: "5px", p: 0.5 }}>
              تكنولوجيا المعلومات
            </Box>
            <Box sx={{ mr: "auto", color: colors.blue }} component={Button}>
              <span>التقديم</span>
              <KeyboardArrowLeftIcon />
            </Box>
          </Box>
          <Box sx={{ my: 1, fontSize: { xs: "12px", sm: "15px" } }}>
            نبحث عن مبرمج متميز للانضمام إلى فريقنا في تطوير وصيانة برامج
            الحاسوب. يجب أن يكون لديه خبرة سابقة في تطوير البرامج والتعامل مع
            لغات البرمجة المختلفة. سيعمل المبرمج في بيئة عمل مرنة ويجب أن يكون
            لديه القدرة على تحمل ضغط العمل والعمل بشكل فردي وفي فريق.
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              gap: 2,
              flexWrap: "wrap",
              fontSize: { xs: "12px", sm: "15px" },
            }}
          >
            <Box>
              <LocationOnIcon
                sx={{ fontSize: { xs: "18px", sm: "20px" }, [dir]: "5px" }}
              />
              <span>القاهره</span>
            </Box>
            <Box>
              <AccessTimeIcon
                sx={{ fontSize: { xs: "18px", sm: "20px" }, [dir]: "5px" }}
              />
              <span>18 نوفمبر 2022</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
