import React, { useContext } from "react";
import Clearfix from "../components/common/ClearFix";
import DefaultLayout from "../components/layout/DefaultLayout";
import { styled } from "styled-components";
import { Carousel } from "antd";
import Banner1 from "../images/banner/banner1.jpg"
import Banner2 from "../images/banner/banner2.jpg"
import Banner3 from "../images/banner/banner3.jpg"
import { Link } from "react-router-dom";
import ProductCard from "../components/product/ProductCards";
import "../css/style.css";
import AuthContext from "../components/auth/AuthContext";

const BannerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BannerCarouselContainer = styled.div`
  width: 100%;
  padding: 1px;
  box-sizing: border-box;
  @media(min-width: 769px){
    width: 66.333333%;
  }
  `;

const BannerSectionContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 1px;
  @media(min-width: 769px){
    width: 33.333333%;
  }
  `;

const BannerContainer = styled.div`
  width: 100%;
  padding: 1px;
`;

const Image = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  background-size: cover;
  background-position: center;
  background-repeat: none;
  background-image: ${(props) => `url(${props.url})`};
`;

const BannerFeatureContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1 );
  border-right: 1px solid rgba(0, 0, 0, 0.1 );
  border-left: 1px solid rgba(0, 0, 0, 0.1 );

`;

const CustomerContainer = styled.div`
  margin-bottom: 48px;
`;

const ProductCollectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 48px;
  `;
const ProductContainer = styled.div`
  width: 100%;
  padding: 6px;
  @media (min-width: 577px) {
    width: calc(100% / 2 - 12px);
  }
  @media (min-width: 769px) {
    width: calc(100% / 6 - 12px);
  }
`;

const BannerFeatureColumn = styled.div`
  width: calc(100% / 3);
  text-align: center;
`;

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <DefaultLayout fixedHeader>
      <Clearfix></Clearfix>
      {isAuthenticated && <h1>welcome back</h1>}
      <BannerBox>
        <BannerCarouselContainer>
          <Carousel autoplay>
            <Link to="/p001">
              <Image height={200} url={Banner1}></Image>
            </Link>
            <Link to="/p002">
              <Image height={200} url={Banner2}></Image>
            </Link>
            <Link to="/p003">
              <Image height={200} url={Banner3}></Image>
            </Link>
          </Carousel>
        </BannerCarouselContainer>
        <BannerSectionContainer>
          <BannerContainer>
            <Link to="/p004">
              <Image height={100} url={Banner1}></Image>
            </Link>
          </BannerContainer>
          <BannerContainer>
            <Link to="/p005">
              <Image height={100} url={Banner1}></Image>
            </Link>
          </BannerContainer>
        </BannerSectionContainer>
        <BannerFeatureContainer>
          <BannerFeatureColumn>15天鑑賞期</BannerFeatureColumn>
          <BannerFeatureColumn>退貨無負擔</BannerFeatureColumn>
          <BannerFeatureColumn>假一賠二</BannerFeatureColumn>
        </BannerFeatureContainer>
      </BannerBox>
      <CustomerContainer>
        <Link to="/p006">
          <Image height={100} url={Banner1}></Image>
        </Link>
      </CustomerContainer>
      <ProductCollectionContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo1" coverUrl={Banner1} salePrices={[100, 200]}></ProductCard>
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo2" coverUrl={Banner2} salePrices={[100, 200]} listPrices={[200, 299]}></ProductCard>
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo3" coverUrl={Banner3} salePrices={[100, 200]} listPrices={[200, 299]}></ProductCard>
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo3" coverUrl={Banner3} salePrices={[100, 200]} listPrices={[200, 299]}></ProductCard>
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo2" coverUrl={Banner2} salePrices={[100, 200]} listPrices={[200, 299]}></ProductCard>
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo1" coverUrl={Banner1} salePrices={[100, 200]} listPrices={[200, 299]}></ProductCard>
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo1" coverUrl={Banner1} salePrices={[100, 200]} listPrices={[200, 299]}></ProductCard>
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo2" coverUrl={Banner2} salePrices={[100, 200]} listPrices={[200, 299]}></ProductCard>
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo3" coverUrl={Banner3} salePrices={[100, 200]} listPrices={[200, 299]}></ProductCard>
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo3" coverUrl={Banner3} salePrices={[100, 200]} listPrices={[200, 299]}></ProductCard>
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo2" coverUrl={Banner2} salePrices={[100, 200]} listPrices={[200, 299]}></ProductCard>
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="p01" className="tdn">
            <ProductCard title="foo1" coverUrl={Banner1} salePrices={[100, 200]} listPrices={[200, 299]}></ProductCard>
          </Link>
        </ProductContainer>
      </ProductCollectionContainer>
    </DefaultLayout>
  )
}
export default HomePage;