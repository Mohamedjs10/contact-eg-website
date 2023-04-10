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
import { colors } from "../utils/const";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { useRouter } from "next/router";

export default function Calcuation() {
  const [carPrice, setCarPrice] = useState("");
  const [stepValue, setStepValue] = useState(5000);
  const [duration, setDuration] = useState();
  const [plan, setPlan] = useState();
  const [value, setValue] = useState();

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  const checkInputs = (carPrice, stepValue, duration, plan) => {
    if (carPrice && stepValue && duration & plan) {
      setValue(10000);
    } else {
      setValue(null);
    }
  };

  const handleCarPriceChange = (e) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setCarPrice(e.target.value);
      checkInputs(e.target.value, stepValue, duration, plan);
    }
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleStepChange = (e) => {
    setStepValue(e.target.value);
    checkInputs(carPrice, e.target.value, duration, plan);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    checkInputs(carPrice, stepValue, e.target.value, plan);
  };

  const handlePlanChange = (e) => {
    setPlan(e.target.value);
    checkInputs(carPrice, stepValue, duration, e.target.value);
  };
  return (
    <Box
      className="horizontal-safe-padding vertical-safe-padding"
      sx={{
        bgcolor: colors.white,
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
          value={carPrice}
          onChange={handleCarPriceChange}
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
            {stepValue} {t.calc.egyptianPound}
          </Typography>
          <Slider
            valueLabelDisplay="auto"
            value={stepValue}
            onChange={handleStepChange}
            sx={{ color: colors.blue, mt: 1 }}
            min={0}
            step={100}
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
              value={duration ?? " "}
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
              onChange={handleDurationChange}
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
              value={plan ?? " "}
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
              onChange={handlePlanChange}
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
            {value ? (
              <>
                {value} {t.calc.egyptianPound}
              </>
            ) : (
              "----"
            )}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          margin: "auto",
          width: {
            xs: "250px",
            sm: "300px",
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
          src="/calculator.png"
          alt="إحسب قسطك في ثواني"
        />
      </Box>
    </Box>
  );
}
