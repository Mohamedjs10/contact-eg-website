import { colors } from "../../utils/const";

export const styles = {
  container: (theme) => ({
    bgcolor: colors.light_grey,
  }),
  grid: (theme) => ({
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridTemplateColumns: "repeat(auto-fill, 300px)",
    justifyContent: { xs: "center", md: "space-between" },
    gridGap: 25,
    pt: 2,
    pb: 2,
  }),
};
