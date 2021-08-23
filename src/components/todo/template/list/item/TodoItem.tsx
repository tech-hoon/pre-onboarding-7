import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Itodo } from '../../../TodoService';
import React from 'react';
import styled, { css } from 'styled-components';

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo: { id, text, dueDate, done } }: TodoItemProps) => {
  const handleToggle = (id: number) => toggleTodo(id);
  const handleRemove = (id: number) => removeTodo(id);

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => handleToggle(id)}>
        {done && <CheckOutlined />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <DueDate done={done}>Due Date {dueDate}</DueDate>
      <Remove onClick={() => handleRemove(id)}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const DueDate = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

export default React.memo(TodoItem);
