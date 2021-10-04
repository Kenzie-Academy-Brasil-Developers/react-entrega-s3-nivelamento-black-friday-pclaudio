import Product from "../Product";

const ProductList = ({ products, toBuy, isDisabled }) => {
  return (
    <>
      {products.map((product, index) => (
        <Product
          key={index}
          product={product}
          toBuy={toBuy}
          isDisabled={isDisabled}
        />
      ))}
    </>
  );
};

export default ProductList;
