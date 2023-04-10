import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../utils/const";

export default function Card({ title, textArr, bgcolor }) {
  return (
    <Box
      sx={{
        bgcolor,
        p: 4,
        mx: 2,
        width: "250px",
        height: "200px",
        borderRadius: 10,
        color: "white",
        transition: "all 0.5s",
        "&:hover": {
          width: "265px",
          height: "215px",
        },
      }}
    >
      <Typography sx={{ mb: 3 }} variant="h6" gutterBottom>
        {title}
      </Typography>

      {textArr.length &&
        textArr.map((item, idx) => (
          <Typography key={idx} variant="subtitle2" sx={{ m: 0 }} gutterBottom>
            {item}
          </Typography>
        ))}
    </Box>
  );
}
