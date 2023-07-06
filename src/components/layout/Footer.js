import React from "react";
import styled from "styled-components";
import Container from "../common/Container";

const StyledFooter = styled.footer`
  background-color: #fbfbfb;
  padding-block: 40px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container></Container>
    </StyledFooter>
  )
}
export default Footer;