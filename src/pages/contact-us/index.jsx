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
import Form from "../../components/contact-us/Form.jsx";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box
      sx={styles.container}
      className="horizontal-safe-margin vertical-safe-margin"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "space-between",
          p: 5,
        }}
      >
        <Box
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "25px", md: "40px" },
            mx: { xs: "auto", md: 0 },
            color: colors.blue,
            pb: 2,
          }}
        >
          نود أن نستمع إليك
        </Box>
        <Box sx={{ mb: 2, mx: { xs: "auto", md: 0 } }}>
          <EmailIcon />
          <Box component="spa" sx={{ mx: 2 }}>
            Info@contact.eg
          </Box>
        </Box>
        <Box sx={{ mb: 2, mx: { xs: "auto", md: 0 } }}>
          <LocalPhoneIcon />
          <Box component="spa" sx={{ mx: 2 }}>
            16177
          </Box>
        </Box>
        <Box
          component="img"
          src="/contact-us/cover.png"
          sx={{
            width: { xs: "200px", sm: "300px", sm: "400px" },
            mt: { xs: 3, md: "auto" },
          }}
        />
      </Box>
      <Form color={colors.blue}></Form>
    </Box>
  );
}
