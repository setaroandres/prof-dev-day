import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  {
    /* TODO: Create an each for each page to show the name */
  }
  const routes = [
    { to: "/", text: "Catalog" },
    { to: "/categories", text: "Categories" },
  ];

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
          >
            <MenuIcon />
          </IconButton>
          {routes.map(({ to, text }) => (
            <Typography variant="button" component="div" sx={{ mr: 2 }}>
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
