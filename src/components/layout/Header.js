import React from "react";
import Container from "../common/Container";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  background-color: #d1011c;
  width: 100vw;
  height: 200px;
`;



const Header = () => {
  return (
    <StyledHeader>
      <Container>Header</Container>
    </StyledHeader>
  );
}

export default Header;