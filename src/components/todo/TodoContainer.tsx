import { useTodo } from './TodoService';
import TodoTemplate from './template/TodoTemplate';
import TodoHead from './template/head/TodoHead';
import TodoList from './template/list/TodoList';
import TodoCreate from './template/create/TodoCreate';
import TodoFooter from './template/footer/TodoFooter';

const TodoContainer = () => {
  const { nextId, todoState, validateInput, toggleTodo, removeTodo, createTodo } = useTodo();

  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoCreate validateInput={validateInput} createTodo={createTodo} nextId={nextId} />
        <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} todos={todoState} />
        <TodoFooter todos={todoState} />
      </TodoTemplate>
    </>
  );
};

export default TodoContainer;
