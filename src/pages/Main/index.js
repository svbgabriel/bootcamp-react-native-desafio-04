import React, { Component, Fragment } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';
import { Container, ContainerCategorys, ContainerProducts } from './styles';
import Header from '~/components/Header';
import CategoryItem from '~/pages/Main/CategoryItem';
import ProductItem from '~/pages/Main/ProductItem';

class Main extends Component {
  static propTypes = {
    loadCategorys: PropTypes.func.isRequired,
    categorys: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ).isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { loadCategorys } = this.props;

    loadCategorys();
  }

  renderCategoryListItem = ({ item }) => <CategoryItem category={item} />;

  renderCategoryList = () => {
    const { categorys } = this.props;

    return (
      <FlatList
        data={categorys}
        horizontal
        keyExtractor={item => String(item.id)}
        renderItem={this.renderCategoryListItem}
      />
    );
  };

  renderProductListItem = ({ item }) => <ProductItem product={item} />;

  renderProductList = () => {
    const { products } = this.props;

    return (
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderProductListItem}
      />
    );
  };

  render() {
    const { loading } = this.props;
    return (
      <Container>
        <Header title="GoCommerce" />
        {loading ? (
          <ActivityIndicator size="large" color="#999" />
        ) : (
          <Fragment>
            <ContainerCategorys>{this.renderCategoryList()}</ContainerCategorys>
            <ContainerProducts>{this.renderProductList()}</ContainerProducts>
          </Fragment>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categorys: state.products.categorys,
  products: state.products.products,
  loading: state.products.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
