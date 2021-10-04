import "@fontsource/roboto";
import theme from "./theme";
import { useState } from "react";
import { productsDB } from "./services/db";
import { ButtonContainer, Container, Content } from "./styles";
import ApplicationBar from "./components/ApplicationBar";
import ProductList from "./components/ProductList";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const [products] = useState(productsDB);

  const [product, setProduct] = useState({});

  const [toBuy] = useState(true);

  const [isDisabled, setIsDisabled] = useState(true);

  const handlePromotionGenerator = () => {
    const randomID = Math.floor(Math.random() * 6) + 1;
    const randomProduct = products.filter(
      (product) => randomID === product.id
    )[0];
    const percentageDiscount = Math.floor(Math.random() * (90 - 40 + 1)) + 40;
    const priceDiscount = (randomProduct.price * percentageDiscount) / 100;
    const finalPrice = randomProduct.price - priceDiscount;

    setProduct({
      ...randomProduct,
      percentageDiscount,
      priceDiscount,
      finalPrice,
    });

    setIsDisabled(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ApplicationBar />

      <Container>
        <Content>
          {toBuy ? (
            <>
              <ProductList
                products={[product]}
                toBuy={toBuy}
                isDisabled={isDisabled}
              />

              <ButtonContainer>
                <Button
                  variant="contained"
                  fullWidth={false}
                  onClick={handlePromotionGenerator}
                >
                  GERAR PROMOÇÃO
                </Button>
              </ButtonContainer>
            </>
          ) : (
            <>
              <p>Carrinho</p>
            </>
          )}
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default App;
