import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const Content = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
  margin: "10vh auto 0 auto",
}));

export const ButtonContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
}));
