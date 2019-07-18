import React, { Component } from 'react';
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
  addToCart = () => {};

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
          <Add>
            <AddText>Adicionar ao carrinho</AddText>
          </Add>
        </Product>
      </Container>
    );
  }
}

export default Detail;
