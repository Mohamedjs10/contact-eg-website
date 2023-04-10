import { colors } from "../../utils/const";

export const styles = {
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
  line: (theme) => ({
    width: "100%",
    mt: 1,
    mb: 2,
    borderBottom: `1px solid ${colors.light_grey}`,
  }),
};
