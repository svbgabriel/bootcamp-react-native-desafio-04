import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';
import {
  Container, Category, CategoryText, Bar,
} from './styles';

const CategoryItem = ({ category, currentCategory, loadCategorys }) => (
  <Container>
    <Category onPress={() => loadCategorys(category.id)}>
      <CategoryText>{category.title}</CategoryText>
      {currentCategory === category.id && <Bar />}
    </Category>
  </Container>
);
CategoryItem.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  currentCategory: PropTypes.number.isRequired,
  loadCategorys: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentCategory: state.products.currentCategory,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryItem);
