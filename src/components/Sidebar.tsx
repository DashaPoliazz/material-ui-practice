import { ReactNode } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Brightness3Icon from "@mui/icons-material/Brightness3";

const bookmarks = [
  {
    name: "Homepage",
    link: "#home",
    icon: HomeIcon,
  },
  {
    name: "Pages",
    link: "#pages",
    icon: ArticleIcon,
  },
  {
    name: "Groups",
    link: "#groups",
    icon: PeopleIcon,
  },
  {
    name: "Marketplace",
    link: "#marketplace",
    icon: StorefrontIcon,
  },
  {
    name: "Friends",
    link: "#friends",
    icon: Diversity1Icon,
  },
  {
    name: "Settings",
    link: "#settings",
    icon: SettingsSuggestIcon,
  },
  {
    name: "Profile",
    link: "#profile",
    icon: AccountBoxIcon,
  },
];

export default function Sidebar() {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed">
        <List>
          {bookmarks.map((bookmark) => (
            <ListItem key={bookmark.name} disablePadding>
              <ListItemButton component="a" href={bookmark.link}>
                <ListItemIcon>
                  <bookmark.icon></bookmark.icon>
                </ListItemIcon>
                <ListItemText primary={bookmark.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Brightness3Icon />
              </ListItemIcon>
              <Switch defaultChecked />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
