import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  Price,
  Add,
  AddText,
} from './styles';

class Detail extends Component {
  addToCart = (product) => {
    const { AddProductToCart, navigation } = this.props;

    const cartItem = { ...product, quantity: 1 };

    AddProductToCart(cartItem);

    navigation.navigate('Main');
  };

  render() {
    const { navigation } = this.props;
    const product = navigation.getParam('product');

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
            <Price>R$ {product.price}</Price>
          </TextContainer>
          <Add onPress={() => this.addToCart(product)}>
            <AddText>Adicionar ao carrinho</AddText>
          </Add>
        </Product>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Detail);
