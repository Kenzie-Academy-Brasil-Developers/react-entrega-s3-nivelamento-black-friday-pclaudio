import { Home, ShoppingCart } from "@mui/icons-material";
import { Box, StoreIcon } from "./styles";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";

const ApplicationBar = ({ currentSale, toBuy, setToBuy }) => {
  const handleToggleToBuy = () => {
    setToBuy(!toBuy);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <StoreIcon size="large" />

        <Typography variant="h6" component="div">
          Eletro Kenzie
        </Typography>

        <Box />

        <IconButton size="large" color="inherit" onClick={handleToggleToBuy}>
          {toBuy ? (
            <Badge badgeContent={currentSale.length} color="error">
              <ShoppingCart />
            </Badge>
          ) : (
            <Home />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
