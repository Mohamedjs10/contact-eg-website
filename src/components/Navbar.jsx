import { styles } from "./navbar";
import Main_Navbar from "../components/Main_Navbar.jsx";
import Secondary_Navbar from "../components/Secondary_Navbar.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Drawer } from "@mui/material";
import { colors } from "../utils/const";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import SideDrawer from "../components/SideDrawer.jsx";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar({
  leftOrRightValue,
  setLeftOrRightValue,
  setIsOPen,
  state,
  setState,
  setType,
}) {
  const matches = useMediaQuery("(max-width:900px)");
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const toAr = () => {
    const locale = "ar";
    router.push(router.pathname, router.asPath, { locale });
  };
  const toEn = () => {
    const locale = "en";
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <>
      {/* large screens ---------------------------------------------------------------------- */}

      {!matches && (
        <>
          <Main_Navbar
            setLeftOrRightValue={setLeftOrRightValue}
            leftOrRightValue={leftOrRightValue}
          ></Main_Navbar>
          <Secondary_Navbar
            setIsOPen={setIsOPen}
            setType={setType}
          ></Secondary_Navbar>
        </>
      )}

      {/* small screens ---------------------------------------------------------------------- */}
      {matches && (
        <>
          <Box
            className="horizontal-safe-padding vertical-safe-padding"
            sx={{
              bgcolor: colors.dark_grey,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ color: colors.blue }}
              onClick={() => {
                setState((prev) => !prev);
              }}
            >
              <MenuIcon sx={{}} />
            </IconButton>
            <img src={t.logo} width="50px" height="20px" />
            <Box
              onClick={locale === "en" ? toAr : toEn}
              component={Button}
              sx={{
                color: colors.blue,
                fontWeight: "bold",
              }}
            >
              {t.main_nav.lang}
            </Box>
          </Box>
          <SideDrawer state={state} setState={setState} />
        </>
      )}
    </>
  );
}
