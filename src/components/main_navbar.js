import { colors } from "../utils/const";

export const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 3,
    color: colors.blue,
    pt: 0.5,
    pb: 0.5,
    bgcolor: colors.light_grey,
  },
  tab: {
    display: "flex",
    justifyContent: "center",
    width: "80px",
    color: colors.blue,
    fontSize: 17,
    borderBottom: `2px solid ${colors.light_grey}`,
    textDecoration: "none",
    "&:hover": {
      fontWeight: "bold",
      color: colors.blue,

      borderBottom: `2px solid ${colors.blue}`,
    },
  },
};
