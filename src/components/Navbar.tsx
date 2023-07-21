import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Toolbar,
  AppBar,
  Typography,
  Box,
  Theme,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { theme } from "../theme";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }: { theme: Theme }) => ({
  backgroundColor: "white",
  padding: "5px 10px",
  height: "20px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Logo
        </Typography>
        <LogoDevIcon
          fontSize="large"
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Search theme={theme}>
          <InputBase
            placeholder="search..."
            sx={{
              height: "100%",
              width: "100%",
              padding: "0 5px",
            }}
          />
        </Search>
        <Icons theme={theme}>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={() => setIsOpen(!isOpen)}
            src="https://i.pinimg.com/564x/99/42/bb/9942bb83f4a9b4c413ac23dc9c76bf7e.jpg"
          />
        </Icons>
        <UserBox theme={theme}>
          <Avatar
            onClick={() => setIsOpen(!isOpen)}
            src="https://i.pinimg.com/564x/99/42/bb/9942bb83f4a9b4c413ac23dc9c76bf7e.jpg"
          />
          <Typography variant="h6">John Doe</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
