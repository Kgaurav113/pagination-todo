import { Flex } from "./Styled";

export const ProductCard = ({ title, id, brand, image, price, category }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={id}>
        {/* display item info here  */}
        <h2>{title}</h2>
        <img src={image} alt="" />
        <h2>{brand}</h2>
        <p>Price:{price}</p>
      </Flex>
    </>
  );
};