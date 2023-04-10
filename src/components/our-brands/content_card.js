import { colors } from "../../utils/const";

export const styles = {
  container: (theme) => ({ display: "flex", gap: 3 }),
  link: (theme) => ({
    pb: 0.5,
    color: colors.orange,
    fontSize: "17px",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      color: colors.orange,
    },
  }),
};
