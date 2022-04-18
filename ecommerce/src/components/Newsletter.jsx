import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import {mobil} from "../responsive";

const Container = styled.div`
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  font-weight: 300px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300px;
  margin-bottom: 20px;
  ${mobil({textAlign:"center"})}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobil({width:"80%"})}

`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <div>
      <Container>
        <Title>Newsletter</Title>
        <Description>
          Get Timely Updates from your favorite products
        </Description>
        <InputContainer>
          <Input placeholder="Your email" />
          <Button>
            <SendIcon />
          </Button>
        </InputContainer>
      </Container>
    </div>
  );
};

export default Newsletter;
