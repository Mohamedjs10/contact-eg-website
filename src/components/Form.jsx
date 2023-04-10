import React, { useState } from "react";
import { styles } from "./form";
import { colors } from "../utils/const";
import Link from "next/link";
import { useFormik } from "formik";
import { EnSchema } from "../utils/en_schema";
import { ArSchema } from "../utils/ar_schema";
import { Box, TextField, InputLabel, MenuItem, Button } from "@mui/material";

import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function Form({ type, color }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  // formik ==========================================================
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate delay
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      governorate: "",
      national_id: "",
      area: "",
      username: "",
      lastname: "",
      // car_type: "",
      // car_price: "",
      car_type: null,
      car_price: null,
      products: "",
    },
    validationSchema: locale === "en" ? EnSchema : ArSchema,
    onSubmit,
  });
  // ================================================================
  return (
    <Box
      component="form"
      sx={styles.container}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      {/* First Name ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
        <InputLabel sx={styles.label}>{t.form_labels.first_name}</InputLabel>
        <TextField
          value={values.username}
          onChange={handleChange}
          id="username"
          type="text"
          onBlur={handleBlur}
          error={touched.username && errors.username}
          sx={styles.input}
          InputProps={{ sx: { height: "45px" } }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>{touched.username && errors.username}</Box>
      </Box>
      {/* Last Name ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
        <InputLabel sx={styles.label}>{t.form_labels.last_name}</InputLabel>
        <TextField
          value={values.lastname}
          onChange={handleChange}
          id="lastname"
          type="text"
          onBlur={handleBlur}
          error={touched.lastname && errors.lastname}
          sx={styles.input}
          InputProps={{
            sx: {
              height: "45px",
              color: "grey",
              lineHeight: "2",
            },
          }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>{touched.lastname && errors.lastname}</Box>
      </Box>
      {/* Email Adress ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
        <InputLabel sx={styles.label}>{t.form_labels.email_adress}</InputLabel>
        <TextField
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          onBlur={handleBlur}
          error={touched.email && errors.email}
          sx={styles.input}
          InputProps={{ sx: { height: "45px" } }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>{touched.email && errors.email}</Box>
      </Box>
      {/* Phone Number ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
        <InputLabel sx={styles.label}>{t.form_labels.phone_number}</InputLabel>
        <TextField
          value={values.phoneNumber}
          onChange={handleChange}
          id="phoneNumber"
          type="number"
          onBlur={handleBlur}
          error={touched.phoneNumber && errors.phoneNumber}
          sx={styles.input}
          InputProps={{ sx: { height: "45px" } }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>
          {touched.phoneNumber && errors.phoneNumber}
        </Box>
      </Box>
      {/* National ID ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
        <InputLabel sx={styles.label}>{t.form_labels.national_id}</InputLabel>
        <TextField
          value={values.national_id}
          onChange={handleChange}
          id="national_id"
          type="number"
          onBlur={handleBlur}
          error={touched.national_id && errors.national_id}
          sx={styles.input}
          InputProps={{ sx: { height: "45px" } }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>
          {touched.national_id && errors.national_id}
        </Box>
      </Box>
      {/* Governorate ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
        <InputLabel sx={styles.label}>{t.form_labels.governorate}</InputLabel>
        <TextField
          value={values.governorate || "default"}
          onChange={handleChange}
          name="governorate"
          type="text"
          onBlur={handleBlur}
          error={touched.governorate && errors.governorate}
          sx={styles.input}
          select
          style={{ height: "45px" }}
          InputProps={{
            sx: {
              height: "45px",
              color: "grey",
              // fontWeight: "bold",
              lineHeight: "2",
            },
          }}
        >
          {/* <Box sx={{ height: "100px" }}> */}
          <MenuItem disabled value="default">
            {t.form_labels.g_placeholder}
          </MenuItem>
          {t.governorates.map((option) => (
            <MenuItem key={option.id} value={option.governorate_name}>
              {option.governorate_name}
            </MenuItem>
          ))}
          {/* </Box> */}
        </TextField>
        <Box sx={styles.helperText}>
          {touched.governorate && errors.governorate}
        </Box>
      </Box>
      {/* Area ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
        <InputLabel sx={styles.label}>{t.form_labels.area}</InputLabel>
        <TextField
          value={values.area || "default"}
          onChange={handleChange}
          name="area"
          type="text"
          onBlur={handleBlur}
          error={touched.area && errors.area}
          sx={styles.input}
          select
          style={{ height: "45px" }}
          InputProps={{
            sx: {
              height: "45px",
              color: "grey",
              // fontWeight: "bold",
              lineHeight: "2",
            },
          }}
        >
          <MenuItem disabled value="default">
            {t.form_labels.a_placeholder}
          </MenuItem>
          {t.governorates.map((option) => (
            <MenuItem key={option.id} value={option.governorate_name}>
              {option.governorate_name}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={styles.helperText}>{touched.area && errors.area}</Box>
      </Box>
      {/* Car Type & Price ---------------------------------------------------------------------------------------------------------- */}
      {type === "a" && (
        <>
          <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
            <InputLabel sx={styles.label}>{t.form_labels.car_type}</InputLabel>
            <TextField
              value={values.car_type || "default"}
              onChange={handleChange}
              name="car_type"
              type="text"
              onBlur={handleBlur}
              error={touched.car_type && errors.car_type}
              sx={styles.input}
              select
              style={{ height: "45px" }}
              InputProps={{
                sx: {
                  height: "45px",
                  color: "grey",
                  // fontWeight: "bold",
                  lineHeight: "2",
                },
              }}
            >
              <MenuItem disabled value="default">
                {t.form_labels.car_placeholder}
              </MenuItem>
              {t.governorates.map((option) => (
                <MenuItem key={option.id} value={option.governorate_name}>
                  {option.governorate_name}
                </MenuItem>
              ))}
            </TextField>
            <Box sx={styles.helperText}>
              {touched.car_type && errors.car_type}
            </Box>
          </Box>

          <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
            <InputLabel sx={styles.label}>{t.form_labels.car_price}</InputLabel>
            <TextField
              value={values.car_price}
              onChange={handleChange}
              id="car_price"
              type="text"
              onBlur={handleBlur}
              error={touched.car_price && errors.car_price}
              sx={styles.input}
              InputProps={{ sx: { height: "45px" } }}
              variant="outlined"
            />
            <Box sx={styles.helperText}>
              {touched.car_price && errors.car_price}
            </Box>
          </Box>
        </>
      )}
      {/* Products ---------------------------------------------------------------------------------------------------------- */}

      {type === "b" && (
        <>
          <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
            <InputLabel sx={styles.label}>{t.form_labels.products}</InputLabel>
            <TextField
              value={values.products || "default"}
              onChange={handleChange}
              name="products"
              type="text"
              onBlur={handleBlur}
              error={touched.products && errors.products}
              sx={styles.input}
              select
              style={{ height: "45px" }}
              InputProps={{
                sx: {
                  height: "45px",
                  color: "grey",
                  // fontWeight: "bold",
                  lineHeight: "2",
                },
              }}
            >
              <MenuItem disabled value="default">
                {t.form_labels.products_placeholder}
              </MenuItem>
              {t.home_page.products.map((option, index) => (
                <MenuItem key={index} value={option.title2}>
                  {option.title2}
                </MenuItem>
              ))}
            </TextField>
            <Box sx={styles.helperText}>
              {touched.products && errors.products}
            </Box>
          </Box>
        </>
      )}

      {/* {type === "b" && (
        <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
          <InputLabel sx={styles.label}>{t.form_labels.products}</InputLabel>
          <TextField
            sx={styles.input}
            select
            value={globalState.products || "default"}
            onChange={(event) => {
              setGlobalState((prev) => ({
                ...prev,
                products: event.target.value,
              }));
            }}
            style={{ height: "45px" }}
            InputProps={{ sx: { height: "45px" } }}
          >
            <MenuItem disabled value="default">
              {t.form_labels.products_placeholder}
            </MenuItem>
            {t.governorates.map((option) => (
              <MenuItem key={option.id} value={option.governorate_name}>
                {option.governorate_name}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      )} */}
      {/* Submit ---------------------------------------------------------------------------------------------------------- */}
      <Button
        disabled={isSubmitting}
        type="submit"
        sx={styles.btn}
        style={{
          backgroundColor: color,
          border: `1px solid #74357D`,
        }}
      >
        {t.form_labels.submit}
      </Button>
    </Box>
  );
}
