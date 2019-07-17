import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  Container, ProductButton, Photo, Title, Brand, Price,
} from './styles';

class ProductItem extends Component {
  static propTypes = {
    product: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
  };

  goToProduct = (product) => {
    const { navigation } = this.props;

    navigation.navigate('Detail', { product });
  };

  render() {
    const { product } = this.props;
    return (
      <Container>
        <ProductButton onPress={() => this.goToProduct(product)}>
          <Photo source={{ uri: product.image }} />
          <Title>{product.name}</Title>
          <Brand>{product.brand}</Brand>
          <Price>R$ {product.price}</Price>
        </ProductButton>
      </Container>
    );
  }
}

export default withNavigation(ProductItem);
