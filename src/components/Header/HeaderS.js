import styled from "styled-components/native";

export const HeaderMain = styled.View`
  background-color: red;
  width: 100%;
  /* height: 120px; */
  margin-top: 10%;
  flex-direction: row;
  /* padding: 0 10%; */
  justify-content: space-between;
  align-items: center;
`;

export const HeaderStories = styled.ScrollView`
  flex-direction: row;
  width: 100%;
  height: 200px;
  background-color: aqua;
`;

export const HeaderStoriesImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
`;
