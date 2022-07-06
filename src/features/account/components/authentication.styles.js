import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;


export const AccountCover = styled.View `
position:absolute;
width:100%;
height:100%;
background-color: rgba(255, 255, 255, 0.3);
`;
export const AccountContainer = styled.View `
background-color: rgba(255, 255, 255, 0.7);
padding: 10%;
margin-top: 2%;
`;

export const AccountButtons = styled.Button `
background-color: #2182BD;
padding:4%;

`;
export const AccountHeading = styled.Text `
font-size: 25px;
fontWeight:bold;
`;
export const AnimationWrapper = styled.View `
width:100%;
position:absolute;
height:40%;
top:3px;
`;