import React from "react";
import { styled, css } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../common/Container";

const PageHeader = styled.div`
  ${props => props.fixed && css`position: fixed; z-index:100;`}
`;

const DefaultLayout = ({ fixedHeader, children }) => {
  return (
    <div>
      <PageHeader fixed={fixedHeader}>
        <Header />
      </PageHeader>
      <Container>{children}</Container>
      <Footer></Footer>
    </div>
  )
}

export default DefaultLayout;