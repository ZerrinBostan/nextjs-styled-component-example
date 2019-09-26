import React from 'react';
import styled from "styled-components";

const Header = styled.div`
 width: 100%;
 height: 1.5rem;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 padding:0.5rem 0.3rem;
`;

const NavTitle = styled.h1`
  font-family: "Fira Code",sans-serif;
  color: dimgray;
`;
export default () => (
    <Header>
        <NavTitle>TodoList</NavTitle>
    </Header>
);