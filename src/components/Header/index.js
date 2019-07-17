import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

import { Container, Title } from './styles';

class Header extends Component {
  static defaultProps = {
    hasBack: false,
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    hasBack: PropTypes.bool,
  };

  goBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  render() {
    const { title, hasBack } = this.props;
    return (
      <Container>
        {hasBack ? (
          <TouchableOpacity onPress={() => this.goBack()}>
            <Icon name="chevron-left" color="#c1c1c1" size={32} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Title>{title}</Title>
        <View />
      </Container>
    );
  }
}

export default withNavigation(Header);
