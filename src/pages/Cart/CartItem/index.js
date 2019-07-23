import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Photo,
  Description,
  Title,
  Brand,
  Price,
  Quantity,
  RemoveButton,
} from './styles';

const CartItem = ({ product }) => (
  <Container>
    <Photo source={{ uri: product.image }} />
    <Description>
      <Title>{product.name}</Title>
      <Brand>{product.brand}</Brand>
      <Price>R${product.price}</Price>
    </Description>
    <Quantity
      autoCapitalize="none"
      autoCorrect={false}
      underlineColorAndroid="transparent"
      keyboardType="numeric"
      value={String(product.quantity)}
    />
    <RemoveButton>
      <Icon name="close" color="#c1c1c1" size={18} />
    </RemoveButton>
  </Container>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
