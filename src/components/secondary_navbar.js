import { colors } from "../utils/const";

export const styles = {
  container: (theme) => ({
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    flexWrap: "wrap",
    gap: 2,
    color: colors.blue,
    pt: 2,
    pb: 2,
    bgcolor: colors.white,
    fontSize: 30,
  }),
  tab: (theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.navy_blue,
    fontSize: 15,
    textDecoration: "none",
    transition: "1s",
    "&:hover": {
      color: colors.navy_blue,
    },
  }),
  loginBtn: (theme) => ({
    color: colors.blue,
    border: `1px solid ${colors.blue}`,
    backgroundColor: colors.white,
    borderRadius: "8px",
    ml: 2,

    "&:hover": {
      border: `1px solid ${colors.blue}`,
      // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    "&:active": {
      // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    // "&:focus": {
    //   boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    // },
  }),
  downloadBtn: (theme) => ({
    color: colors.white,
    border: `1px solid ${colors.blue}`,
    backgroundColor: colors.blue,
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: colors.blue,
      // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    "&:active": {
      // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    // "&:focus": {

    //   boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    // },
  }),

  link: (theme) => ({
    pt: 2,
    color: colors.blue,
    // fontSize: "10px",
    // fontWeight: "normal",
    textDecoration: "none",
    "&:hover": {
      color: colors.blue,
    },
  }),
};
