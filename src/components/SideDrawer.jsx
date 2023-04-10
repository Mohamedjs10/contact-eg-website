import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Service from "./Service.jsx";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function SideDrawer({ state, setState }) {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const toggleDrawer = () => () => {
    setState((prev) => !prev);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <div>
      {/* <Button onClick={toggleDrawer()}>right</Button> */}
      <Drawer
        anchor={locale === "en" ? "left" : "right"}
        open={state}
        onClose={toggleDrawer()}
        dir={locale === "en" ? "ltr" : "rtl"}
        sx={{ zIndex: "9999999 !important" }}
      >
        <Box
          sx={{
            width: { xs: 220, sm: 300 },
            "& span": { textAlign: locale === "en" ? "left" : "right" },
          }}
          role="presentation"
          // onClick={toggleDrawer()}
        >
          <List>
            {/* A ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick1}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="خدمات تمويلية" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, m: "7px" }}>
                {t.home_page.services.All.map(
                  ({ color, title, description, img }, index) => (
                    <Service
                      key={index}
                      color={color}
                      title={title}
                      description={description}
                      img={img}
                    />
                  )
                )}
              </Box>
            </Collapse>
            {/* B ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick2}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="برنامج العملاء" />
                {/* <ListItemText primary={t.secondary_nav.insurance_services} /> */}

                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, m: "7px" }}>
                {t.home_page.services.C.map(
                  ({ color, title, description, img }, index) => (
                    <Service
                      key={index}
                      color={color}
                      title={title}
                      description={description}
                      img={img}
                    />
                  )
                )}
              </Box>
            </Collapse>
            {/* C ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="خدمات تأمينية" />
              </ListItemButton>
            </ListItem>
            {/* D ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="مدفوعات الكترونية" />
              </ListItemButton>
            </ListItem>
            {/* E ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="إستثمار و ادخار" />
              </ListItemButton>
            </ListItem>
            {/* F ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="اماكن الفروع" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
