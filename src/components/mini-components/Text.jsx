import { styles } from "./text";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";

export default function Text({ title, body, textStyle }) {
  return (
    <Box sx={{ ...textStyle }}>
      <Box sx={styles.title}>{title}</Box>
      <Box sx={styles.body}>{body}</Box>
    </Box>
  );
}
