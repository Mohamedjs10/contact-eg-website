import { colors } from "../utils/const";

export const styles = {
  btn: (theme) => ({
    fontSize: { xs: "10px", sm: "15px", md: "20px", lg: "25px" },
    width: { xs: "100px", sm: "130px", md: "150px", lg: "170px" },
    height: { xs: "30px", sm: "40px", md: "50px", lg: "60px" },
    mb: "40px",
    color: colors.black,
    border: `1px solid ${colors.yellow}`,
    backgroundColor: colors.yellow,
    borderRadius: "15px",
    "&:hover": {
      border: `1px solid ${colors.yellow}`,

      backgroundColor: colors.yellow,
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    "&:active": {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    // "&:focus": {

    //   boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    // },
  }),
};
