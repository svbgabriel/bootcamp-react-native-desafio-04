import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  padding: 0px 10px 10px 10px;
  margin: 10px 0px 0px 15px;
  border-radius: 5px;
  width: 150px;
`;

export const ProductButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;

export const Photo = styled.Image`
  height: 180px;
  width: 120px;
  margin: 5px;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 14px;
`;

export const Brand = styled.Text`
  font-size: 12px;
`;

export const Price = styled.Text`
  font-weight: bold;
  color: #1db954;
  font-size: 14px;
`;
