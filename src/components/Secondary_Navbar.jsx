import React, { useState } from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colors } from "../utils/const";
import { styles } from "./secondary_navbar";
import { useSelector, useDispatch } from "react-redux";
import { secTabActions } from "../Redux/store";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function Secondary_Navbar({ setIsOPen, setType }) {
  const secTab = useSelector((state) => state.secTab.secTab);

  const dispatch = useDispatch();

  const [arrDirA, setArrDirA] = useState("down");
  const [arrDirB, setArrDirB] = useState("down");
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <>
      {/* Desktop */}

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box sx={styles.container} className="horizontal-safe-padding">
          <Link href="/">
            <Image
              src={t.logo}
              alt="Picture of the author"
              width={80}
              height={30}
            />
          </Link>

          <Box
            onClick={() => {
              setArrDirA((prev) => (prev == "up" ? "down" : "up"));
              setIsOPen((prev) => !prev);
              setType("a");
              dispatch(secTabActions.update("B-sec"));
            }}
            sx={{
              "&:hover": { cursor: "pointer" },
              "& svg": {
                transition: "1s",
                transform: `rotate(${arrDirA === "up" ? "-180deg" : "0deg"})`,
              },
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: colors.navy_blue,
              fontSize: 15,
              textDecoration: "none",
              transition: "1s",
            }}
          >
            {t.secondary_nav.financial_services}
            <KeyboardArrowDownIcon />
          </Box>
          <Box
            onClick={() => {
              setArrDirB((prev) => (prev == "up" ? "down" : "up"));
              setIsOPen((prev) => !prev);
              setType("b");
              dispatch(secTabActions.update("B-sec"));
            }}
            sx={{
              "&:hover": { cursor: "pointer" },
              "& svg": {
                transition: "1s",
                transform: `rotate(${arrDirB === "up" ? "-180deg" : "0deg"})`,
              },
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: colors.navy_blue,
              fontSize: 15,
              textDecoration: "none",
              transition: "1s",
            }}
          >
            {t.secondary_nav.clients_program}
            <KeyboardArrowDownIcon />
          </Box>
          <Box component={Link} href="/" onClick={() => {}} sx={styles.tab}>
            {t.secondary_nav.insurance_services}
          </Box>
          <Box component={Link} href="/" onClick={() => {}} sx={styles.tab}>
            {t.secondary_nav.e_payments}
          </Box>
          <Box component={Link} href="/" onClick={() => {}} sx={styles.tab}>
            {t.secondary_nav.investment_and_savings}
          </Box>
          <Box component={Link} href="/" onClick={() => {}} sx={styles.tab}>
            {t.secondary_nav.branches_location}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mr: { xs: 0, md: locale === "en" ? 0 : "auto" },
              ml: { xs: 0, md: locale === "en" ? "auto" : 0 },
            }}
          >
            <Button
              variant="outlined"
              sx={styles.loginBtn}
              style={{
                marginRight: locale === "en" ? 20 : 0,
                marginLeft: locale === "en" ? 0 : 20,
              }}
            >
              {t.secondary_nav.login}
            </Button>
            <Button variant="contained" sx={styles.downloadBtn}>
              {t.secondary_nav.download_app}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
