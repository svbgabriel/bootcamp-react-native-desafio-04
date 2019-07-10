import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

import { Container, Title } from './styles';

const Header = ({ title, hasBack }) => (
  <Container>
    {hasBack ? (
      <TouchableOpacity>
        <Icon name="chevron-left" color="#c1c1c1" size={32} />
      </TouchableOpacity>
    ) : (
      <View />
    )}
    <Title>{title}</Title>
    <View />
  </Container>
);

Header.defaultProps = {
  hasBack: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasBack: PropTypes.bool,
};

export default Header;
