import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import WalletIcon from "@mui/icons-material/Wallet";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LogoutIcon from "@mui/icons-material/Logout";

function VerticalAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        width: { xs: "10vw", md: "4vw" },
        left: 0,
        height: "1210px",
        backgroundColor: "#21253d",
        borderBottomLeftRadius: "10px",
      }}
    >
      <Container maxWidth="xl" sx={{ padding: { xs: 0, md: 0 } }}>
        <Toolbar
          disableGutters
          sx={{
            flexDirection: "column",
            alignItems: "center",
            height: "1210px",
            width: { xs: "10vw", md: "4vw" },
            marginTop: "10px",
            padding: 0,
          }}
        >
          <HomeIcon sx={{ mt: 1 }} color="primary" fontSize="large" />
          <AssessmentIcon sx={{ mt: 3 }} fontSize="large" />
          <AssignmentTurnedInIcon sx={{ mt: 3 }} fontSize="large" />
          <WalletIcon sx={{ mt: 3 }} fontSize="large" />
          <ShoppingBagIcon sx={{ mt: 3 }} fontSize="large" />

          <Box sx={{ flexGrow: 0, mt: "auto" }}>
            <Tooltip title="Logout">
              <IconButton>
                <LogoutIcon sx={{ color: "white", mb: 2 }} fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default VerticalAppBar;
