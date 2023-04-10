import React, { useState } from "react";
import { styles } from "./img-list-section";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import Number from "./Number.jsx";
export default function ImgListSection({ title, img }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const [state, setState] = useState("");
  return (
    <Box
      sx={styles.sectionContainer}
      className="horizontal-safe-padding vertical-safe-padding"
    >
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
          gap: 3,
        }}
      >
        <Box
          sx={{ display: "flex", gap: 2 }}
          onMouseEnter={() => setState("1")}
          onMouseLeave={() => setState("")}
        >
          <Number n="1" state={state} />
          <Box
            component="span"
            sx={{
              width: { xs: "300px", sm: "650px" },
              fontSize: { xs: "15px", sm: "20px" },
            }}
          >
            أكبر عدد من المحلات والمعارض ومنافذ البيع والتحصيارض ومنافذ البيع
            والتحصيل أكبر عدد من المحلات والمعارض ومنافذ البيع والتحصيارض ومنافذ
            البيع والتحصيل
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", gap: 2 }}
          onMouseEnter={() => setState("2")}
          onMouseLeave={() => setState("")}
        >
          <Number n="2" state={state} />
          <Box
            component="span"
            sx={{
              width: { xs: "300px", sm: "650px" },
              fontSize: { xs: "15px", sm: "20px" },
            }}
          >
            أكبر عدد من المحلات والمعارض ومنافذ البيع والتحصيارض ومنافذ البيع
            والتحصيل أكبر عدد من المحلات والمعارض ومنافذ البيع والتحصيارض ومنافذ
            البيع والتحصيل
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", gap: 2 }}
          onMouseEnter={() => setState("3")}
          onMouseLeave={() => setState("")}
        >
          <Number n="3" state={state} />
          <Box
            component="span"
            sx={{
              width: { xs: "300px", sm: "650px" },
              fontSize: { xs: "15px", sm: "20px" },
            }}
          >
            أكبر عدد من المحلات والمعارض ومنافذ البيع والتحصيارض ومنافذ البيع
            والتحصيل أكبر عدد من المحلات والمعارض ومنافذ البيع والتحصيارض ومنافذ
            البيع والتحصيل
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", gap: 2 }}
          onMouseEnter={() => setState("4")}
          onMouseLeave={() => setState("")}
        >
          <Number n="4" state={state} />
          <Box
            component="span"
            sx={{
              width: { xs: "300px", sm: "650px" },
              fontSize: { xs: "15px", sm: "20px" },
            }}
          >
            أكبر عدد من المحلات والمعارض ومنافذ البيع والتحصيارض ومنافذ البيع
            والتحصيل أكبر عدد من المحلات والمعارض ومنافذ البيع والتحصيارض ومنافذ
            البيع والتحصيل
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", gap: 2 }}
          onMouseEnter={() => setState("5")}
          onMouseLeave={() => setState("")}
        >
          <Number n="5" state={state} />
          <Box
            component="span"
            sx={{
              width: { xs: "300px", sm: "650px" },
              fontSize: { xs: "15px", sm: "20px" },
            }}
          >
            أكبر عدد من المحلات والمعارض ومنافذ البيع والتحصيارض ومنافذ البيع
            والتحصيل أكبر عدد من المحلات والمعارض ومنافذ البيع والتحصيارض ومنافذ
            البيع والتحصيل
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
