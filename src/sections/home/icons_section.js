import { colors } from "../../utils/const";

export const styles = {
  container: (theme) => ({
    display: "flex",
    justifyContent: { xs: "center", md: "space-between" },
    flexWrap: "wrap",
    gap: 2,
  }),
  item: (theme) => ({
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  }),
};
