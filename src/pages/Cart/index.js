import React, { Component, Fragment } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';
import Header from '~/components/Header';
import CartItem from '~/pages/Cart/CartItem';
import {
  Container,
  SubTotalContainer,
  SubTotalText,
  SubTotalPrice,
  EmptyContainer,
  EmptyCart,
} from './styles';

const TabIcon = ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

class Cart extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  static propTypes = {
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
      }),
    ).isRequired,
  };

  renderCartListItem = ({ item }) => <CartItem product={item} />;

  renderCartList = () => {
    const { cart } = this.props;
    return (
      <FlatList
        data={cart}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderCartListItem}
      />
    );
  };

  render() {
    const { cart } = this.props;

    return (
      <Fragment>
        <Container>
          <Header title="Carrinho" />
          {cart.length > 0 ? (
            this.renderCartList()
          ) : (
            <EmptyContainer>
              <EmptyCart>Carrinho vazio!</EmptyCart>
            </EmptyContainer>
          )}
        </Container>
        <SubTotalContainer>
          <SubTotalText>Subtotal</SubTotalText>
          <SubTotalPrice>R$</SubTotalPrice>
        </SubTotalContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
