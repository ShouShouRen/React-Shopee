import React from "react";
import styled from "styled-components";
import Container from "../common/Container";

const StyledFooter = styled.footer`
  background-color: #fbfbfb;
  padding-block: 40px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  width: calc(100% / 3);
  @media (min-width: 769px){
    width: 20%;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <FooterColumn>Column 1</FooterColumn>
          <FooterColumn>Column 2</FooterColumn>
          <FooterColumn>Column 3</FooterColumn>
          <FooterColumn>Column 4</FooterColumn>
          <FooterColumn>Column 5</FooterColumn>
        </Flex>
      </Container>
    </StyledFooter>
  )
}
export default Footer;