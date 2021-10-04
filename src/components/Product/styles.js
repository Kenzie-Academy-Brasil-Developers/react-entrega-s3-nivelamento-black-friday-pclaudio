import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import MuiDivider from "@mui/material/Divider";

export const Card = styled(MuiCard)(({ theme }) => ({
  margin: "20px 10px",
}));

export const Divider = styled(MuiDivider)(({ theme }) => ({
  margin: "20px 0",
}));
