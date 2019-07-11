import React from 'react';
import PropTypes from 'prop-types';
import { Container, Category, CategoryText } from './styles';

const CategoryItem = ({ category }) => (
  <Container>
    <Category>
      <CategoryText>{category.title}</CategoryText>
    </Category>
  </Container>
);

CategoryItem.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default CategoryItem;
