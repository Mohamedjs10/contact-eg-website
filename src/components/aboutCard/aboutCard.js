import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../utils/const";

export default function Card({ icon, heading, textArr, key }) {
  return (
    <Box key={key} sx={{ flex: "1 1 0", p: 4, textAlign: "center" }}>
      <img width="32px" src={icon} alt={heading} />
      <Typography
        sx={{ color: colors.orange, mt: 2 }}
        variant="h5"
        gutterBottom
      >
        {heading}
      </Typography>
      {textArr?.map((item, idx) => (
        <Typography
          key={idx}
          variant="subtitle2"
          sx={{
            margin: "auto",
            mt: 1,
            fontWeight: "bold",
            color: colors.blue,
            width: {
              xs: "100%",
              md: "75%",
            },
          }}
          gutterBottom
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}
