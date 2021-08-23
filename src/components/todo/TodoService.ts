import { useState, useEffect } from 'react';

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
  dueDate: string;
};

export const useTimer = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleString()), 1000);
    return () => clearInterval(timer);
  }, []);
  return time;
};

export const useTodo = () => {
  const [todoState, setTodoState] = useState<Itodo[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  useEffect(() => {
    const loadData = () => {
      const data = localStorage.getItem('todos');
      if (data === null || data === '[]') return;

      const todos = JSON.parse(data);
      setTodoState(todos);
      setNextId(todos[todos.length - 1].id + 1);
    };

    loadData();
  }, []);

  useEffect(() => {
    const saveData = () => {
      localStorage.setItem('todos', JSON.stringify(todoState));
    };

    saveData();
  }, [todoState]);

  const validateInput = (text: string, dueDate: string) => {
    if (!text || !dueDate) return false;
    else return true;
  };

  const toggleTodo = (id: number) => {
    todoState.map((todo) => {
      if (todo.id === id) todo.done = !todo.done;
      return todo;
    });

    setTodoState([...todoState]);
  };

  const removeTodo = (id: number) => {
    const newArr = [...todoState];
    newArr.forEach((todo, idx) => todo.id === id && newArr.splice(idx, 1));
    setTodoState(newArr);
  };

  const createTodo = (todo: Itodo) => {
    setNextId((prevId) => prevId + 1);
    setTodoState((prevState) => [...prevState, { ...todo, id: nextId }]);
  };

  return {
    nextId,
    todoState,
    validateInput,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};
