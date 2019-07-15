import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, ProductButton, Photo, Title, Brand, Price,
} from './styles';

const ProductItem = ({ product }) => (
  <Container>
    <ProductButton>
      <Photo source={{ uri: product.image }} />
      <Title>{product.name}</Title>
      <Brand>{product.brand}</Brand>
      <Price>R$ {product.price}</Price>
    </ProductButton>
  </Container>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductItem;
