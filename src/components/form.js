import { colors } from "../utils/const";

export const styles = {
  container: (theme) => ({
    alignSelf: "flex-start",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // alignItems: "space-between",
    bgcolor: colors.white,
    width: { xs: "300px", sm: "500px" },
    p: 3,
    borderRadius: 3,
    gap: 2,
    zIndex: 100,
  }),
  inputWrapper: (theme) => ({ flex: "2 1 auto" }),
  label: (theme) => ({
    fontWeight: "bold",
    fontSize: "17px",
    color: colors.manhattan_blue,
    pb: 1,
  }),
  input: (theme) => ({
    // "& MuiSelect-select": { height: "300px" },

    width: "100%",
    bgcolor: colors.white_smoke,
    borderRadius: 2,
    "& p": {
      bgcolor: "white",
      m: 0,
    },
    "& fieldset": {
      borderRadius: 2,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
      // "&:hover fieldset": {
      //   borderColor: "green",
      // },
      // "&.Mui-focused fieldset": {
      //   borderColor: "yellow",
      // },
    },
  }),
  helperText: (theme) => ({
    color: "#d32f2f",
    fontSize: "0.75rem",
    m: 1,
  }),
  btn: (theme) => ({
    width: "100%",
    height: "45px",
    mb: "40px",
    color: colors.white,
    border: `1px solid ${colors.yellow}`,
    backgroundColor: colors.yellow,
    borderRadius: 2,
    "&:hover": {
      // border: `1px solid ${colors.blue}`,
      // backgroundColor: colors.blue,
      // opacity: ".95",
    },
    // "&:active": {
    //   boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    // },
    // "&:focus": {

    //   boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    // },
  }),
};
