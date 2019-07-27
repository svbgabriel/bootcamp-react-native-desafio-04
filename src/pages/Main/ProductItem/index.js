import React, { Component } from 'react';
import { TextMask } from 'react-native-masked-text';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  Container, ProductButton, Photo, Title, Brand,
} from './styles';

class ProductItem extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  goToProduct = (id) => {
    const { navigation } = this.props;

    navigation.navigate('Detail', { id });
  };

  render() {
    const { product } = this.props;
    return (
      <Container>
        <ProductButton onPress={() => this.goToProduct(product.id)}>
          <Photo source={{ uri: product.image }} />
          <Title>{product.name}</Title>
          <Brand>{product.brand}</Brand>
          <TextMask
            type="money"
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: '',
            }}
            style={{ fontWeight: 'bold', color: '#1db954', fontSize: 14 }}
            value={product.price}
          />
        </ProductButton>
      </Container>
    );
  }
}

export default withNavigation(ProductItem);
