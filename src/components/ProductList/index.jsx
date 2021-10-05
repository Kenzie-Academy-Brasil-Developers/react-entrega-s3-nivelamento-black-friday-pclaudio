import Product from "../Product";

const ProductList = ({ products, toBuy, isDisabled, handleClick }) => {
  return (
    <>
      {products.map((product, index) => (
        <Product
          key={index}
          product={product}
          toBuy={toBuy}
          isDisabled={isDisabled}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};

export default ProductList;
