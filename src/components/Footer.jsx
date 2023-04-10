import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function Secondary_Navbar({ setIsOPen }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  // let leftOrRight = locale === "en" ? { right: "0px" } : { left: "0px" };
  let margin = locale === "en" ? "ml" : "mr";
  return (
    <Box
      className="horizontal-safe-padding vertical-safe-padding mt-5"
      sx={{ bgcolor: colors.bg_grey, border: `1px solid ${colors.dark_grey}` }}
    >
      {/* section A ------------------------------------------------------------------------------------ */}
      <Box sx={{ pb: 6 }}>
        <Box sx={styles.a_container}>
          <Box sx={{ textAlign: { xs: "center", sm: "initial" } }}>
            <Box sx={{ color: colors.black, fontWeight: "bold", pb: 1 }}>
              {t.footer.section_a.subscribe_now}
            </Box>
            <Box sx={{ color: "#667085", fontWeight: "bold" }}>
              {t.footer.section_a.in_email_service}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: { xs: "center", sm: "space-between", gap: 15 },
            }}
          >
            <TextField
              placeholder={t.footer.section_a.enter_email}
              inputProps={{
                sx: {
                  fontSize: 13,
                  fontWeight: "bold",
                  lineHeight: "2",
                },
              }}
              sx={styles.input}
              defaultValue={""}
              onChange={() => {}}
              hiddenLabel
              id="car-price"
              size="small"
            />
            <Button variant="outlined" sx={styles.btn}>
              {t.footer.section_a.button}
            </Button>
          </Box>
        </Box>
      </Box>
      {/* section B ------------------------------------------------------------------------------------ */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          borderTop: `1px solid ${colors.dark_grey}`,
        }}
        className="section-safe-padding-top"
      >
        <Box sx={styles.container}>
          {/* 1---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title}>{t.footer.section_b.financial_services}</Box>
            {t.footer.section_b.financial_services_list1.map((item, index) => (
              <Box
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
          {/* 2---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title}>{t.footer.section_b.financial_services}</Box>
            {t.footer.section_b.financial_services_list2.map((item, index) => (
              <Box
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
          {/* 3---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title}>{t.footer.section_b.other_services}</Box>
            {t.footer.section_b.other_services_list.map((item, index) => (
              <Box
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
          {/* 4---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title}>{t.footer.section_b.contact}</Box>
            {t.footer.section_b.contact_list.map((item, index) => (
              <Box
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
          {/* 5---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title}>{t.footer.section_b.company}</Box>
            {t.footer.section_b.company_list.map((item, index) => (
              <Box
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
          {/* 6---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title}>{t.footer.section_b.policy}</Box>
            {t.footer.section_b.policy_list.map((item, index) => (
              <Box
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* section B - Mobile ------------------------------------------------------------------------------------ */}

      <Box sx={{ display: { md: "none" } }}>
        <Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>
                {t.footer.section_b.financial_services}
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.financial_services_list1.map(
                (item, index) => (
                  <Box component={Link} href={item.url} sx={styles.link}>
                    {item.name}
                  </Box>
                )
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>
                {t.footer.section_b.financial_services}
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.financial_services_list2.map(
                (item, index) => (
                  <Box component={Link} href={item.url} sx={styles.link}>
                    {item.name}
                  </Box>
                )
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>
                {t.footer.section_b.other_services}
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.other_services_list.map((item, index) => (
                <Box component={Link} href={item.url} sx={styles.link}>
                  {item.name}
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>
                {t.footer.section_b.contact}
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.contact_list.map((item, index) => (
                <Box component={Link} href={item.url} sx={styles.link}>
                  {item.name}
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>
                {t.footer.section_b.company}
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.company_list.map((item, index) => (
                <Box component={Link} href={item.url} sx={styles.link}>
                  {item.name}
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>{t.footer.section_b.policy}</Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.policy_list.map((item, index) => (
                <Box component={Link} href={item.url} sx={styles.link}>
                  {item.name}
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      {/* section C ------------------------------------------------------------------------------------ */}
      <Box sx={styles.app_section} className="section-safe-padding-top">
        <Box sx={styles.app_container}>
          {/* {t.footer.section_c.download_app} */}
          <Box sx={styles.app_icons}>
            <img src={t.footer.section_c.img1} width="140px" height="45px" />
            <img src={t.footer.section_c.img2} width="140px" height="45px" />
          </Box>
        </Box>
      </Box>
      {/* section D ------------------------------------------------------------------------------------ */}
      <img
        src="/footer-line.png"
        width="100%"
        className="section-safe-margin-top"
      />
      {/* section D ------------------------------------------------------------------------------------ */}
      <Box className="section-safe-padding-top " sx={styles.copyright_section}>
        <Box
          sx={{ width: "280px", textAlign: { xs: "center", md: "initial" } }}
        >
          <img src={t.logo} width="120px"></img>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            // width: "240px",
          }}
        >
          <Box
            component="a"
            href="/"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="/l.png" />
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="/t.png" />
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="/y.png" />
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="/i.png" />
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="/f.png" />
          </Box>
        </Box>
        <Box
          sx={{
            color: "#98A2B3",
            gap: { xs: 1, md: 0 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            textAlign: "center",
          }}
        >
          {t.footer.section_d.copy_right}
          <img src="/award.png" />
        </Box>
      </Box>
    </Box>
  );
}
