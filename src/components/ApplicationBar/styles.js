import { styled } from "@mui/material/styles";
import MuiStoreIcon from "@mui/icons-material/Store";
import MuiTypography from "@mui/material/Typography";

export const StoreIcon = styled(MuiStoreIcon)(({ theme }) => ({
  marginRight: "16px",
}));

export const Typography = styled(MuiTypography)(({ theme }) => ({
  flexGrow: 1,
}));
