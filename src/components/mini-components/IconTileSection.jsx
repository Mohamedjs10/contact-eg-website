import { styles } from "./icon_title_section";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import { textAlign } from "@mui/system";
export default function Text({ title, img, page }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const pageLocale =
    page === "shopping" ? "products_shopping_page" : "products_shopping_page";
  return (
    <Box
      sx={styles.sectionContainer}
      className="horizontal-safe-padding vertical-safe-padding"
    >
      {t.general.icon_title[pageLocale].map((item, index) => (
        <Box sx={styles.container} key={index}>
          <Box sx={styles.imgContainer}>
            <img
              src={item.img}
              style={{ margin: "15px" }}
              width="30px"
              alt="img"
            />
          </Box>
          <Box sx={{ ...styles.title(), textAlign: t.textAlign }}>
            {item.title}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
