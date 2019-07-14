import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';
import { Container } from './styles';
import Header from '~/components/Header';
import CategoryItem from '~/pages/Main/CategoryItem';

const TabIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

class Main extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  static propTypes = {
    loadCategorys: PropTypes.func.isRequired,
    categorys: PropTypes.arrayOf(
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

  renderListItem = ({ item }) => <CategoryItem category={item} />;

  renderList = () => {
    const { categorys } = this.props;

    return (
      <FlatList
        data={categorys}
        horizontal
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    const { loading } = this.props;
    return (
      <Container>
        <Header title="GoCommerce" />
        {loading ? <ActivityIndicator size="large" color="#999" /> : this.renderList()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categorys: state.products.categorys,
  currentCategory: state.products.currentCategory,
  products: state.products.products,
  loading: state.products.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
