import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { MENU_ROUTES } from "../constants";
import { MenuRoutes } from "../types";

export const Navbar = () => {
  {
    /* TODO: Create an each for each page to show the name */
  }
  const routes: MenuRoutes[] = MENU_ROUTES;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            key="menu-button"
          >
            <MenuIcon />
          </IconButton>
          {routes.map(({ to, text }) => (
            <Typography
              variant="button"
              component="div"
              sx={{ mr: 2 }}
              key={to}
            >
              <Link key={to} to={to}>
                {text}
              </Link>
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
