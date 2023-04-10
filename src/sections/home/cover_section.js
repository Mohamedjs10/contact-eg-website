import { colors } from "../../utils/const";

export const styles = {
  btn: (theme) => ({
    fontSize: { xs: "9px", sm: "15px", md: "20px", lg: "25px" },
    fontWeight: "bold",
    width: { xs: "60px", sm: "100px", md: "150px", lg: "245px" },
    height: { xs: "35px", sm: "55px", md: "65px", lg: "60px" },
    mb: "60px",
    color: colors.white,
    border: `1px solid ${colors.orange}`,
    backgroundColor: colors.orange,
    borderRadius: "8px",
    "&:hover": {
      border: `1px solid ${colors.orange}`,

      backgroundColor: colors.orange,
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    "&:active": {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    // "&:focus": {

    //   boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    // },
  }),
  icon: (theme) => ({
    m: "8px",
    transition: ".5s",
    "&:hover": {
      transform: "scale(1.3)",
    },
  }),
};
