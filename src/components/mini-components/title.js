import { colors } from "../../utils/const";

export const styles = {
  container: (theme) => ({
    pt: 1,
    pb: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", lg: "flex-start" },
  }),
  title: (theme) => ({
    color: colors.orange,
    fontSize: "40px",
    fontWeight: "bold",
  }),
};
