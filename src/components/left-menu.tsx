import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import Toolbar from "@mui/material/Toolbar";
import ListItemIcon from "@mui/material/ListItemIcon";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CellTowerRoundedIcon from "@mui/icons-material/CellTowerRounded";
import SourceRoundedIcon from "@mui/icons-material/SourceRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MiscellaneousServicesRoundedIcon from "@mui/icons-material/MiscellaneousServicesRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

export default function LeftMenu() {
  return (
    <div>
      {/* <Toolbar /> */}
      <Divider />
      <List>
        <ListItem key={"home"} disablePadding>
          <ListItemButton href="#/">
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem key={"network"} disablePadding>
          <ListItemButton href="#/network">
            <ListItemIcon>
              <CellTowerRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Network" />
          </ListItemButton>
        </ListItem>

        <ListItem key={"storage"} disablePadding>
          <ListItemButton href="#/storage" disabled>
            <ListItemIcon>
              <SourceRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Storage" />
          </ListItemButton>
        </ListItem>

        <ListItem key={"mail"} disablePadding>
          <ListItemButton href="#/mail" disabled>
            <ListItemIcon>
              <MailRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItemButton>
        </ListItem>

        <ListItem key={"user"} disablePadding>
          <ListItemButton href="#/user" disabled>
            <ListItemIcon>
              <ManageAccountsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={"settings"} disablePadding>
          <ListItemButton href="#/settings">
            <ListItemIcon>
              <SettingsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem key={"services"} disablePadding>
          <ListItemButton href="#/services">
            <ListItemIcon>
              <MiscellaneousServicesRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItemButton>
        </ListItem>

        <ListItem key={"about"} disablePadding>
          <ListItemButton href="#/about">
            <ListItemIcon>
              <InfoRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="About Dogma" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
