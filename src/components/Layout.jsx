import React from "react";

import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";

import { SubjectOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";

import { format } from "date-fns";

const drawerWidth = 240;

export const Layout = ({ children }) => {
  const menuItems = [
    { text: "My Notes", icon: <SubjectOutlined color="primary" />, path: "/" },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: "/create",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {/* App Bar */}
      <AppBar
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
        }}
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
            }}
          >
            Today is the {format(new Date(), "do MMMM, Y")}
          </Typography>
          <Typography variant="h6" noWrap>
            Welcome, User
          </Typography>
          <Avatar
            sx={{
              marginLeft: "10px",
            }}
            src="/tobi.jpg"
          />
        </Toolbar>
      </AppBar>
      {/* Side Bar */}
      <Drawer
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Typography variant="h5" component="h2" gutterBottom padding={2}>
            Notes
          </Typography>
        </Box>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                backgroundColor:
                  location.pathname == item.path ? "#f9f9f9" : null,
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
