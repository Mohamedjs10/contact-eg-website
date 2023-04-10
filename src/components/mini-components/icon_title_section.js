import { colors } from "../../utils/const";

export const styles = {
  sectionContainer: (theme) => ({
    bgcolor: colors.bg_grey,
    display: "flex",
    flexWrap: "wrap",
    gap: 5,
  }),
  container: (theme) => ({
    display: "flex",
    gap: 1,
    justifyContent: { xs: "center", lg: "space-between" },
    alignItems: "center",
    width: "350px",
  }),
  title: (theme) => ({
    color: colors.blue,
    fontSize: { xs: "12px", sm: "15px" },
    textAlign: { xs: "center", sm: "right" },
    fontWeight: "bold",
  }),
  imgContainer: (theme) => ({
    borderRadius: "50%",
    bgcolor: "#EBEBED",
  }),
};
