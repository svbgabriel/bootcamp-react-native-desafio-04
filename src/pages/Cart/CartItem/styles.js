import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  padding: 10px;
  margin: 20px 20px 0 20px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  height: 70px;
  width: 50px;
  margin-right: 10px;
`;

export const Description = styled.View`
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 16px;
`;

export const Brand = styled.Text``;

export const Price = styled.Text`
  font-weight: bold;
  color: #1db954;
  font-size: 16px;
`;

export const RemoveButton = styled.TouchableOpacity``;
