import React from 'react';
import styled from "styled-components";

const Todo = styled.input`
 outline: none;
 padding: 0.5rem 0.3rem;
 border:1px solid bisque;
 border-radius: 0.5rem;
 width:30%;
`;

export default (props) => {
  return (
    <Todo onKeyPress={props.onKeyPress}/>
  );
};