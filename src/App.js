import "@fontsource/roboto";
import theme from "./theme";
import ApplicationBar from "./components/ApplicationBar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ flexGrow: 1 }}>
        <ApplicationBar />
      </Box>
    </ThemeProvider>
  );
};

export default App;
