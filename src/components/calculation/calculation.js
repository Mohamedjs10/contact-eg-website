import React, { useState } from "react";
import {
  TextField,
  Box,
  InputLabel,
  Typography,
  Slider,
  Select,
  MenuItem,
} from "@mui/material";
import { colors } from "../../utils/const";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import { useRouter } from "next/router";

export default function Calcuation() {
  const [val, setVal] = useState("");
  const [value, setValue] = useState(5000);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (e.target.value === "" || re.test(e.target.value)) {
      setVal(e.target.value);
    } else {
    }
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleValChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box
      className="horizontal-safe-margin vertical-safe-margin"
      sx={{
        mb: 5,
        display: "flex",
        justifyContent: "center",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          flex: "1 1 0",
          mx: 5,
          px: 3,
          py: 3,
          bgcolor: "#f8f8f8",
        }}
      >
        <InputLabel
          htmlFor="car-price"
          sx={{ fontSize: 16, color: colors.blue, mb: 1, fontWeight: "800" }}
        >
          {t.calc.priceCar}
        </InputLabel>
        <TextField
          sx={{
            bgcolor: "white",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
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
          value={val}
          onChange={handleChange}
          hiddenLabel
          id="car-price"
          size="small"
        />
        <Box sx={{ bgcolor: "white", px: 3, py: 2, my: 2 }}>
          <Typography
            variant="subtitle1"
            sx={{ color: colors.blue, fontWeight: "bold" }}
            gutterBottom
          >
            {t.calc.preAmount}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: colors.blue, fontWeight: "bold" }}
            gutterBottom
          >
            {value} {t.calc.egyptianPound}
          </Typography>
          <Slider
            valueLabelDisplay="auto"
            value={value}
            onChange={handleValChange}
            sx={{ color: colors.blue, mt: 1 }}
            min={0}
            max={2000000}
            getAriaValueText={valuetext}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              width: "100%",
              mx: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: colors.blue, fontWeight: "bold" }}
              gutterBottom
            >
              {t.calc.duration}
            </Typography>
            <Select
              sx={{
                width: "100%",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "lightfrey",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.blue,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.blue,
                },
                ".MuiSvgIcon-root ": {
                  fill: colors.blue,
                },
              }}
              size="small"
              onChange={handleChange}
            >
              <MenuItem value={1}>{t.calc.year1}</MenuItem>
              <MenuItem value={2}>{t.calc.year2}</MenuItem>
              <MenuItem value={3}>{t.calc.year3}</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: colors.blue, fontWeight: "bold" }}
              gutterBottom
            >
              {t.calc.plan}
            </Typography>
            <Select
              sx={{
                width: "100%",

                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "lightfrey",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.blue,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.blue,
                },
                ".MuiSvgIcon-root ": {
                  fill: colors.blue,
                },
              }}
              size="small"
              onChange={handleChange}
            >
              <MenuItem value={1}>{t.calc.plan1}</MenuItem>
              <MenuItem value={2}>{t.calc.plan2}</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box
          sx={{
            py: 2,
            mt: 3,
            borderRadius: 2,
            px: 5,
            bgcolor: "#ebebed",
            textAlign: "center",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: colors.blue }}
            gutterBottom
          >
            {t.calc.monthlyAmount}
          </Typography>
          <Typography variant="h5" sx={{ color: colors.blue }} gutterBottom>
            10000 {t.calc.egyptianPound}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          margin: "auto",
          width: {
            xs: "320px",
            md: "480px",
          },
          flex: "1 1 0",

          mt: {
            md: 1,
            xs: 4,
          },
          flexGrow: 2,
        }}
      >
        <img
          style={{
            display: "block",
            margin: "auto",
            width: "100%",
            maxWidth: "520px",
          }}
          src="/images/payment_5.png"
          alt="إحسب قسطك في ثواني"
        />
      </Box>
    </Box>
  );
}
