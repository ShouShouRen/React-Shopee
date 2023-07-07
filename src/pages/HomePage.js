import React from "react";
import Clearfix from "../components/common/ClearFix";
import DefaultLayout from "../components/layout/DefaultLayout";
import { styled } from "styled-components";
import { Carousel } from "antd";
import Banner1 from "../images/banner/banner1.jpg"
import Banner2 from "../images/banner/banner2.jpg"
import Banner3 from "../images/banner/banner3.jpg"

const BannerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BannerCarouselContainer = styled.div`
  width: 100%;
  padding: 1px;
  @media(min-width: 769px){
    width: 66.333333%;
  }
  `;

const BannerSectionContainer = styled.div`
  width: 100%;
  padding: 1px;
  @media(min-width: 769px){
    width: 33.333333%;
  }
  `;

const BannerContainer = styled.div`
  width: 100%;
  padding: 1px;
`;

const CarouselImage = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  background-size: cover;
  background-position: center;
  background-repeat: none;
  background-image: ${(props) => `url(${props.url})`};
`;


const HomePage = () => {
  return (
    <DefaultLayout fixedHeader>
      <Clearfix></Clearfix>
      <BannerBox>
        <BannerCarouselContainer>
          <Carousel autoplay>
            <CarouselImage height={200} url={Banner1}></CarouselImage>
            <CarouselImage height={200} url={Banner2}></CarouselImage>
            <CarouselImage height={200} url={Banner3}></CarouselImage>
          </Carousel>
        </BannerCarouselContainer>
        <BannerSectionContainer>
          <BannerContainer>
            <CarouselImage height={100} url={Banner1}></CarouselImage>
          </BannerContainer>
          <BannerContainer>
            <CarouselImage height={100} url={Banner1}></CarouselImage>
          </BannerContainer>
        </BannerSectionContainer>
      </BannerBox>
    </DefaultLayout>
  )
}
export default HomePage;