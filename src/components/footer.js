import { colors } from "../utils/const";

export const styles = {
  a_container: (theme) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: { xs: "center", sm: "space-between" },
    gap: 2,
  }),
  container: (theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 3,
    color: colors.blue,
    fontSize: "15px",
    fontWeight: "bold",
  }),
  sub_container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    pb: 1,
    pt: 0,
  }),
  link: (theme) => ({
    pb: 1.5,
    color: "#667085",
    fontSize: "14px",
    // fontWeight: "normal",
    textDecoration: "none",
    "&:hover": {
      color: "#667085",
    },
  }),
  app_section: (theme) => ({
    display: "flex",
    justifyContent: { xs: "center", md: "flex-end" },
    alignItems: "center",
    gap: 2,
  }),
  app_container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", md: "flex-start" },
    gap: 2,
  }),
  app_icons: (theme) => ({
    display: "flex",
    justifyContent: "center",
    pt: 2,
    flexWrap: "wrap",
    gap: 2,
  }),
  copyright_section: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { xs: "center", md: "space-between" },
    alignItems: "center",
    gap: 2,
  }),
  accrodion_title: (theme) => ({
    color: colors.blue,
    fontSize: "15px",
    fontWeight: "bold",
  }),
  title: (theme) => ({
    pb: 2,
    color: "#98A2B3",
  }),
  input: (theme) => ({
    bgcolor: "white",
    width: "300px",
    "& .MuiInputBase-root": {
      height: "40px",
    },
    borderRadius: 2,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: 2,
        overflow: "hidden",
        borderColor: "lightgrey",
      },
      "&:hover fieldset": {
        borderColor: "lightgrey",
      },
      "&.Mui-focused fieldset": {
        borderColor: colors.blue,
      },
    },
  }),
  btn: (theme) => ({
    width: "100px",
    height: "40px",
    fontSize: 13,
    fontWeight: "bold",
    color: colors.white,
    border: `1px solid ${colors.blue}`,
    backgroundColor: colors.blue,
    borderRadius: 2,
    "&:hover": {
      border: `1px solid ${colors.blue}`,
      backgroundColor: colors.blue,
    },
  }),
};
