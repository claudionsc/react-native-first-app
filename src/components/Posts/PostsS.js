import styled from "styled-components/native";

export const PostsView = styled.View`
  width: 100%;
  height: 60%;
  flex-direction: column;
`;
export const PostHeadBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;
export const PostsImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-right: 10px;
`;

export const PostsText = styled.Text`
  font-weight: bold;
`;

export const PostMainImage = styled.Image`
  width: 100%;
  height: 450px;
`;

export const PostsIconsBottom = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`;
