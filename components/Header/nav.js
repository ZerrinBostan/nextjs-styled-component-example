import React from 'react';
import styled from "styled-components";

const Nav = styled.div`
 width: 100%;
 height: 1.5rem;
 background-color: ${({theme}) => theme.colors.primary};
`;

const Header = () => <Nav/>;

export default Header;