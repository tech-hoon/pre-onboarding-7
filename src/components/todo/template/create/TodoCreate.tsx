import 'antd/dist/antd.css';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Itodo } from '../../TodoService';
import { DatePicker, Modal } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import styled from 'styled-components';

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  validateInput: (text: string, dueDate: string) => boolean;
}

const TodoCreate = ({ nextId, validateInput, createTodo }: TodoCreateProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>('');
  const [dueDate, setDueDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const handleToggle = () => setOpen(!open);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleDueDate = (_: any, dateString: string) => setDueDate(dateString);
  const handleModal = () => setModalVisible(!modalVisible);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInput(value, dueDate)) {
      setModalMsg(`${!value ? `값을` : `날짜를`} 입력해주세요`);
      handleModal();
      return;
    }

    createTodo({
      id: nextId,
      text: value,
      done: false,
      dueDate: dueDate,
    });

    setValue('');
    setDueDate('');
    setOpen(false);
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
            maxLength={20}
          />

          <CircleButton onClick={handleToggle} open={open}>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
      </InsertFormPositioner>
      <DatePickerStyled onChange={handleDueDate} value={dueDate !== '' ? moment(dueDate) : null} />
      <Modal visible={modalVisible} onOk={handleModal} onCancel={handleModal} closable={true}>
        {modalMsg}
      </Modal>
    </>
  );
};

const CircleButton = styled.button<{ open: boolean }>`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  background: #eeeeee;
  padding: 40px 36px 60px 36px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

const DatePickerStyled = styled(DatePicker)`
  padding: 12px 8px;
`;

export default React.memo(TodoCreate);
