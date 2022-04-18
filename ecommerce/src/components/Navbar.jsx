import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import {mobil} from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobil({height:"50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobil({padding:"10px 0px"})}

`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobil({display:"none"})}

`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobil({width:"50px"})}

`;

const Logo = styled.div`
  font-weight: bold;
  ${mobil({fontSize:"24px"})}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobil({flex:2,justifyContent:"center"})}

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobil({fontSize:"12px",marginLeft:"10px"})}

`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ShopMe</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
