import { styled } from "@mui/material/styles";
import MuiStoreIcon from "@mui/icons-material/Store";
import MuiBox from "@mui/material/Box";

export const StoreIcon = styled(MuiStoreIcon)(({ theme }) => ({
  marginRight: "16px",
}));

export const Box = styled(MuiBox)(({ theme }) => ({
  flexGrow: 1,
}));
