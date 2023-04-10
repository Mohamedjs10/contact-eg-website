import { styles } from "./content_card";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
export default function BottomCard({ img, content, link }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box sx={styles.container} className="horizontal-safe-margin">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            backgroundClip: "content-box",
            bgcolor: colors.orange,
            border: `5px solid ${colors.white}`,
            outline: `4px ${colors.orange} solid`,
            width: "30px",
            minHeight: "30px",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            bgcolor: colors.orange,
            width: "2px",
            height: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "space-between",
        }}
      >
        <img src={img} width="100px"></img>
        <Box sx={{ fontSize: "15px" }}>{content}</Box>
        <Box component={Link} target="_blank" href={link} sx={styles.link}>
          {t.our_brand_page.link}
        </Box>
      </Box>
    </Box>
  );
}
