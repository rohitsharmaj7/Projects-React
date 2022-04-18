import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {mobil} from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobil({flexDirection:"column"})}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobil({display:"none"})}

`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.ul`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobil({backgroundColor:"#fff8f8"})}
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const ContactItem = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shop IT</Logo>
        <Description>Don't ever compromise on your fashion</Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>A</ListItem>
          <ListItem>A</ListItem>
          <ListItem>A</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>Chandigarh,India</ContactItem>
        <ContactItem>9646870027</ContactItem>
        <ContactItem>rohitsharmaj7@gmail.com</ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
