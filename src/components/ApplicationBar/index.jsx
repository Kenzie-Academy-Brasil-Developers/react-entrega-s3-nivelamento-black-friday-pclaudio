import { StoreIcon, Typography } from "./styles";
import { AppBar, Toolbar } from "@mui/material";

const ApplicationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <StoreIcon size="large" />

        <Typography variant="h6" component="div">
          Eletro Kenzie
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
