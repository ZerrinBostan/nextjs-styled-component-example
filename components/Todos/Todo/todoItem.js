import React, { useState } from 'react';
import styled from 'styled-components';

const TodoItem = styled.div`
  width: 100%;
  height: 2rem;
  padding: 1rem 0.5rem;
  margin-bottom: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  ${({isDone}) => isDone && `text-decoration: line-through`}
`;

export default (props) => {
  const [isDone, changeDone] = useState(false);
  return (
  <TodoItem isDone={isDone}>
    <p>{props.todo}</p>
    <button onClick={() => changeDone(!isDone)}>{!isDone ? 'Done' : 'Not Done'}</button>
  </TodoItem>
  );
}
