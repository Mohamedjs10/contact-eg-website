import { colors } from "../../utils/const";

export const styles = {
  container: (theme) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: { xs: "center", lg: "space-between" },
    alignItems: "center",
  }),
  img: (theme) => ({
    width: { xs: "450px" },
  }),
  text: (theme) => ({
    width: { xs: "600px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: { xs: "center", lg: "flex-start" },
    gap: 2,
  }),
};
