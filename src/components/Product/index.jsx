import { Card, Divider } from "./styles";
import {
  Button,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";

const Product = ({ product, toBuy, isDisabled }) => {
  const formatCurrency = (number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {isDisabled ? (
            <Skeleton variant="text" animation="wave" />
          ) : (
            product.name
          )}
        </Typography>

        <Divider />

        {isDisabled ? (
          <Typography variant="h5" component="span">
            <Skeleton variant="text" animation="wave" />
          </Typography>
        ) : (
          <Typography variant="h6" component="p" align="right">
            {`de `}
            <Typography variant="h5" component="span" color="text.secondary">
              {formatCurrency(product.price)}
            </Typography>
          </Typography>
        )}

        {isDisabled ? (
          <Typography variant="h5" component="span">
            <Skeleton variant="text" animation="wave" />
          </Typography>
        ) : (
          <Typography variant="h6" component="p" align="right">
            {`por `}
            <Typography variant="h5" component="span" color="text.secondary">
              {formatCurrency(product.finalPrice)}
            </Typography>
          </Typography>
        )}

        {isDisabled ? (
          <Typography variant="h5" component="span">
            <Skeleton variant="text" animation="wave" />
          </Typography>
        ) : (
          <Typography variant="h6" component="p" align="right">
            {`economize `}
            <Typography variant="h5" component="span" color="text.secondary">
              {`${formatCurrency(product.priceDiscount)} (${
                product.percentageDiscount
              }% off)`}
            </Typography>
          </Typography>
        )}

        <Divider />

        <CardActions>
          <Button
            disabled={isDisabled}
            variant="contained"
            color={toBuy ? "success" : "error"}
            fullWidth
          >
            {toBuy ? "Adiconar" : "Remover"}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Product;
