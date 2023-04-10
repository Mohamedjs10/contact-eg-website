import React, { useState } from "react";
import { styles } from "./form";
import { colors } from "../../utils/const";
import Link from "next/link";
import { useFormik } from "formik";
import { EnSchema } from "./en_schema";
import { ArSchema } from "./ar_schema";
import { Box, TextField, InputLabel, MenuItem, Button } from "@mui/material";

import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
export default function Form({ color }) {
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
      subject: "",
      message: "",
      username: "",
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
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
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
      {/* Email Adress ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
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
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
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
      {/* Subject ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
        <InputLabel sx={styles.label}>{t.form_labels.subject}</InputLabel>
        <TextField
          value={values.subject}
          onChange={handleChange}
          id="subject"
          type="text"
          onBlur={handleBlur}
          error={touched.subject && errors.subject}
          sx={styles.input}
          InputProps={{ sx: { height: "45px" } }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>{touched.subject && errors.subject}</Box>
      </Box>
      {/* Message ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
        <InputLabel sx={styles.label}>{t.form_labels.message}</InputLabel>
        <TextField
          // InputProps={{ sx: { height: "45px" } }}
          multiline
          rows={3}
          value={values.message}
          onChange={handleChange}
          id="message"
          type="text"
          onBlur={handleBlur}
          error={touched.message && errors.message}
          sx={styles.input}
          variant="outlined"
        />
        <Box sx={styles.helperText}>{touched.message && errors.message}</Box>
      </Box>
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
