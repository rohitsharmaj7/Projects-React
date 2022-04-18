import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import {mobil} from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobil({padding:"10px"})}

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" && "black"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  font-size: 1rem;
  ${mobil({display:"none"})}

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.h1`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  ${mobil({flexDirection:"column"})}

`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobil({flexDirection:"column"})}

`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobil({margin:"5px 15px"})}

`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobil({marginBottom:"20px"})}

`;

const HR = styled.hr`
  height: 1px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.postimg.cc/B6MdmF7d/pexels-neosiam-592798.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Jessie Thunder Shoes
                  </ProductName>

                  <ProductId>
                    <b>ID: </b>98787868778
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$27</ProductPrice>
              </PriceDetail>
            </Product>
            <HR />
            <Product>
              <ProductDetail>
                <Image src="https://i.postimg.cc/B6MdmF7d/pexels-neosiam-592798.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Jessie Thunder Shoes
                  </ProductName>

                  <ProductId>
                    <b>ID: </b>98787868778
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$27</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Checkout Now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
