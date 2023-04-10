import { styles } from "./bottom_card";
import { Box } from "@mui/material";
import { colors } from "../utils/const";
import Link from "next/link";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function BottomCard({}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: colors.blue,
        p: { xs: 2, sm: 4, md: 6 },
        // pl: 9,
        // pr: 9,
        borderRadius: 2,
        display: "flex",
        flexWrap: "wrap",
        gap: 5,

        justifyContent: { xs: "center", md: "space-between" },
      }}
      className="horizontal-safe-margin"
    >
      <Box>
        <img src="./subscribe-now.png" width="200px"></img>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-end" },
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <TextField
          placeholder={t.bottom_card.placeholder}
          inputProps={{ style: { fontSize: 20 } }}
          sx={{
            bgcolor: "white",
            width: { xs: "200px", sm: "300px", md: "400px", lg: "500px" },
            "& .MuiInputBase-root": {
              height: "61px",
            },
            borderRadius: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: 3,
                overflow: "hidden",
                borderColor: "lightgrey",
              },
              "&:hover fieldset": {
                borderColor: "lightgrey",
              },
              "&.Mui-focused fieldset": {
                borderColor: colors.blue,
              },
            },
          }}
          defaultValue={""}
          onChange={() => {}}
          hiddenLabel
          id="car-price"
          size="small"
        />
        <Button variant="outlined" sx={styles.btn}>
          {t.bottom_card.send}
        </Button>
      </Box>

      <Box
        component="img"
        src="/bottom-decorator.png"
        sx={{
          position: "absolute",
          left: "0",
          bottom: "0",
          width: { xs: "150px", sm: "200px", md: "300px", lg: "400px" },
        }}
      ></Box>
    </Box>
  );
}
