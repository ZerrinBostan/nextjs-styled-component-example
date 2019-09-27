import React, { useState } from 'react';
import { Todo, TodoList } from './index';
import styled from 'styled-components';
import todo from "./Todos/Todo/todo";

const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:0.5rem 0.3rem;
`;

export default (props) => {
  const [todoArray, changeList] = useState([]);

  const handleChange = (event) => {
    if(event.key === 'Enter') {
      const arr = [...todoArray];
      arr.push(event.target.value);
      changeList(arr);
    }
  };

  return (
    <Main>
      <Todo onKeyPress={handleChange} />
      <TodoList todoArray={todoArray}/>
    </Main>
  );
};