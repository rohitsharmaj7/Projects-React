import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import {mobil} from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobil({padding:"0px",flexDirection:"column"})}

`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem item={category} />
      ))}
    </Container>
  );
};

export default Categories;
