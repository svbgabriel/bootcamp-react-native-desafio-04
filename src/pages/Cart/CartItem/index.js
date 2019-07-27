import React from 'react';
import PropTypes from 'prop-types';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';
import {
  Container, Photo, Description, Title, Brand, Price, RemoveButton,
} from './styles';

const CartItem = ({ product, loadRemoveProduct, loadUpdateQuantity }) => (
  <Container>
    <Photo source={{ uri: product.image }} />
    <Description>
      <Title>{product.name}</Title>
      <Brand>{product.brand}</Brand>
      <Price>R${product.price}</Price>
    </Description>
    <NumericInput
      value={product.quantity}
      valueType="integer"
      onChange={e => loadUpdateQuantity(product.id, e)}
      totalHeight={25}
      totalWidth={40}
      minValue={1}
    />
    <RemoveButton onPress={() => loadRemoveProduct(product.id)}>
      <Icon name="close" color="#c1c1c1" size={18} />
    </RemoveButton>
  </Container>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  loadRemoveProduct: PropTypes.func.isRequired,
  loadUpdateQuantity: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(CartItem);
