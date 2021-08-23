import { Itodo } from '../../TodoService';
import React from 'react';
import styled from 'styled-components';
import TodoItem from './item/TodoItem';

interface TodoListProps {
  todos: Itodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList = ({ toggleTodo, removeTodo, todos }: TodoListProps) => {
  return (
    <TodoListBlock>
      {todos &&
        todos.map((todo, i) => (
          <TodoItem toggleTodo={toggleTodo} removeTodo={removeTodo} key={i} todo={todo} />
        ))}
    </TodoListBlock>
  );
};

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
`;

export default React.memo(TodoList);
