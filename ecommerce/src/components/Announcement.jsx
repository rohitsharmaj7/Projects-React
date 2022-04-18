import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #028082;
  color: white;
  padding: 10px 0px;
`;

const Announcement = () => {
  return <Container>Super Deals waiting for you</Container>;
};

export default Announcement;
