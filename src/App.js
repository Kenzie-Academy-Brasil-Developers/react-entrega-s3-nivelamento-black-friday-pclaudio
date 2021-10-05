import "@fontsource/roboto";
import theme from "./theme";
import formatCurrency from "./utils/formatCurrency";
import { useState } from "react";
import { productsDB } from "./services/db";
import { ButtonContainer, Container, Content } from "./styles";
import ApplicationBar from "./components/ApplicationBar";
import ProductList from "./components/ProductList";
import { Button, CssBaseline, ThemeProvider, Typography } from "@mui/material";

const App = () => {
  const [products, setProducts] = useState(productsDB);

  const [currentSale, setCurrentSale] = useState([]);

  const [product, setProduct] = useState({});

  const [toBuy, setToBuy] = useState(true);

  const [isDisabled, setIsDisabled] = useState(true);

  const handlePromotionGenerator = () => {
    const randomID = Math.floor(Math.random() * 6) + 1;
    const randomProduct = products.find((product) => product.id === randomID);
    const percentageDiscount = Math.floor(Math.random() * (90 - 40 + 1)) + 40;
    const priceDiscount = (randomProduct.price * percentageDiscount) / 100;
    const finalPrice = randomProduct.price - priceDiscount;
    const updatedProduct = {
      ...randomProduct,
      percentageDiscount,
      priceDiscount,
      finalPrice,
    };

    setProduct(updatedProduct);

    setIsDisabled(false);

    const productsWithoutUpdatedProduct = products.filter(
      (currentProduct) => currentProduct.id !== updatedProduct.id
    );

    setProducts([...productsWithoutUpdatedProduct, updatedProduct]);
  };

  const handleClick = (productId, toBuy) => {
    if (toBuy) {
      const currentProduct = products.find(
        (product) => product.id === productId
      );

      const currentSaleWithoutCurrentProduct = currentSale.filter(
        (currentProduct) => currentProduct.id !== productId
      );

      setCurrentSale([...currentSaleWithoutCurrentProduct, currentProduct]);
    } else {
      setCurrentSale(
        currentSale.filter((currentProduct) => currentProduct.id !== productId)
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ApplicationBar
        currentSale={currentSale}
        toBuy={toBuy}
        setToBuy={setToBuy}
      />

      <Container>
        <Content>
          {toBuy ? (
            <>
              <ProductList
                products={[product]}
                toBuy={true}
                isDisabled={isDisabled}
                handleClick={handleClick}
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
              <Typography variant="h5" component="h2" align="center">
                {` Total: ${formatCurrency(
                  currentSale.reduce(
                    (total, product) => total + product.finalPrice,
                    0
                  )
                )}`}
              </Typography>

              <ProductList
                products={currentSale}
                toBuy={false}
                isDisabled={isDisabled}
                handleClick={handleClick}
              />
            </>
          )}
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default App;
