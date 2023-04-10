import { styles } from "./title";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";

export default function Text({ title, lineWidth }) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.title}>{title}</Box>
      <img
        src="line.png"
        style={{
          width: lineWidth,
          height: "8px",
        }}
      ></img>
    </Box>
  );
}
