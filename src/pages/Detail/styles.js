import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #c1c1c1;
`;

export const Product = styled.View`
  background-color: #fff;
  margin: 20px;
  border-radius: 15px;
  align-items: center;
`;

export const Photo = styled.Image`
  height: 300px;
  width: 180px;
  margin: 10px 0 10px 0;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.View`
  flex-direction: column;
  margin-right: 10px;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

export const Brand = styled.Text`
  font-size: 12px;
`;

export const Price = styled.Text`
  color: #1db954;
  font-weight: bold;
  font-size: 18px;
`;

export const Add = styled.TouchableOpacity`
  background-color: #1db954;
  padding: 10px 50px 10px 50px;
  margin: 20px 0 20px 0;
  border-radius: 5px;
`;

export const AddText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
