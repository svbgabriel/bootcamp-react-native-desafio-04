import React, { Component } from 'react';
import { TextMask } from 'react-native-masked-text';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';
import CartActions from '~/store/ducks/cart';
import Header from '~/components/Header';
import {
  Container,
  Product,
  Photo,
  TextContainer,
  Description,
  Title,
  Brand,
  Add,
  AddText,
} from './styles';

class Detail extends Component {
  static propTypes = {
    product: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    loadProduct: PropTypes.func.isRequired,
    loadAddProductToCart: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { navigation, loadProduct } = this.props;

    const id = navigation.getParam('id');

    loadProduct(id);
  }

  addToCart = (product) => {
    const { loadAddProductToCart, navigation } = this.props;

    const cartItem = { ...product, quantity: 1 };

    loadAddProductToCart(cartItem);

    navigation.navigate('Main');
  };

  render() {
    const { product } = this.props;

    return (
      <Container>
        <Header hasBack title="Detalhe do Produto" />
        <Product>
          <Photo source={{ uri: product.image }} />
          <TextContainer>
            <Description>
              <Title>{product.name}</Title>
              <Brand>{product.brand}</Brand>
            </Description>
            <TextMask
              type="money"
              options={{
                precision: 2,
                separator: ',',
                delimiter: '.',
                unit: 'R$',
                suffixUnit: '',
              }}
              style={{ color: '#1db954', fontWeight: 'bold', fontSize: 18 }}
              value={product.price}
            />
          </TextContainer>
          <Add onPress={() => this.addToCart(product)}>
            <AddText>Adicionar ao carrinho</AddText>
          </Add>
        </Product>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.currentProduct,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CartActions, ...ProductsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
