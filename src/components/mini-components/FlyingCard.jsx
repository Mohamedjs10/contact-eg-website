import React, { useRef, useEffect } from "react";
import { styles } from "./flying_card";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import { useSelector, useDispatch } from "react-redux";
import { updateMenu } from "../../Redux/store";

export default function FlyingCard({
  setLeftOrRightValue,
  // leftOrRightValue,
  children,
  // wrapperRef,
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let leftOrRight = locale === "en" ? "left" : "right";

  const leftOrRightValue = useSelector((state) => state.menu.leftOrRightVal);
  const dispatch = useDispatch();
  return (
    <>
      <Box
        // ref={wrapperRef}
        className="horizontal-safe-margin"
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "5px",
          bgcolor: colors.white,
          transition: "1s",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        style={{
          position: "absolute",
          top: "55px",
          [leftOrRight]: leftOrRightValue,
          width: leftOrRightValue == -500 ? 0 : "250px",
          height: "250px",
          overflow: "hidden",
        }}
      >
        <img src="/line.png" alt="Picture of the author" width="100%" />
        <Box
          sx={{
            p: 2,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            component={Link}
            href="/"
            onClick={() => {
              dispatch(updateMenu(-500));
            }}
            sx={styles.tab}
            style={{}}
          >
            نبذة عن
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              dispatch(updateMenu(-500));
            }}
            sx={styles.tab}
            style={{}}
          >
            ميديا
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              dispatch(updateMenu(-500));
            }}
            sx={styles.tab}
            style={{}}
          >
            وظائف
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              dispatch(updateMenu(-500));
            }}
            sx={styles.tab}
            style={{}}
          >
            شركاتنا
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              dispatch(updateMenu(-500));
            }}
            sx={styles.tab}
            style={{}}
          >
            اتصل بنا
          </Box>
          <Box sx={styles.line}></Box>
        </Box>
      </Box>
    </>
  );
}
