import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import CVSLogo from "../../images/cvslogo.jpg";
import Remark from "../../images/remark.png";
import QRCode from "../../images/qrcode.png";
import AppleStore from "../../images/appstore.png";
import GooglePlay from "../../images/googleplay.png";
import AppGallery from "../../images/appgallery.png";

const StyledFooter = styled.footer`
  background-color: #fbfbfb;
  padding-block: 40px;
`;

const Box = styled.div`
  display: flex;
`;
const Boxs = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterColumnTitle = styled.h4`
    margin-bottom: 12px;
    font-width: bold;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: calc(100% / 3);
  @media (min-width: 769px){
    width: 20%;
  }
  a {
    margin-bottom: 4px;
    color: rgba(0 ,0 ,0 ,0.54);
    text-decoration: none;
  }
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  img{
    height: calc(121px / 3);
    width: 60%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Boxs>
          <FooterColumn>
            <FooterColumnTitle>客服中心</FooterColumnTitle>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>關於蝦皮</FooterColumnTitle>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
            <Link to="/">幫助中心</Link>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>物流合作</FooterColumnTitle>
            <img src={CVSLogo} alt="cvs_logo" width="100px" style={{ marginBottom: 12 }}></img>
            <FooterColumnTitle>蝦皮24h包裝減量標準</FooterColumnTitle>
            <img src={Remark} alt="remark" width="60px" style={{ marginBottom: 12 }}></img>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>關注我們</FooterColumnTitle>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Line</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">蝦品輯部落格</Link>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>下載蝦皮</FooterColumnTitle>
            <Box>
              <img src={QRCode} alt="qrcode" width="60%"></img>
              <ImgBox>
                <img src={AppleStore} alt="applestore"></img>
                <img src={GooglePlay} alt="googleplay"></img>
                <img src={AppGallery} alt="appgallery"></img>
              </ImgBox>
            </Box>
          </FooterColumn>
        </Boxs>
      </Container>
    </StyledFooter>
  )
}
export default Footer;