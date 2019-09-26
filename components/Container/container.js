import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default (props) => <Container>{props.children}</Container>;
