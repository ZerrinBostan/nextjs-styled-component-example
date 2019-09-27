import React, { useState } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import TodoItem from './Todo/todoItem';

const TodoList = styled.div`
 width: 30%;
 display: flex;
 flex-direction: column;
`;

export default ({todoArray}) => {
  return (
    <TodoList>
      {
        todoArray.map((element, index) => (
          <TodoItem key={index} todo={element}/>
        ))
      }
    </TodoList>
  );
};

TodoList.propTypes = {
  todoArray: PropTypes.array
};
