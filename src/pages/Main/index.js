import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from './styles';
import Header from '~/components/Header';
import CategoryItem from '~/pages/Main/CategoryItem';

const TabIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Main extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  renderListItem = ({ item }) => <CategoryItem category={item} />;

  renderList = () => {
    const data = [
      {
        id: 1,
        title: 'Camisetas',
      },
      {
        id: 2,
        title: 'Camisas',
      },
      {
        id: 3,
        title: 'Calças',
      },
      {
        id: 4,
        title: 'Blusas',
      },
      {
        id: 5,
        title: 'Bonés',
      },
      {
        id: 6,
        title: 'Casacos',
      },
    ];

    return (
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    return (
      <Container>
        <Header title="GoCommerce" />
        {this.renderList()}
      </Container>
    );
  }
}
