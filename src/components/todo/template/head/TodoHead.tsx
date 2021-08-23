import React from 'react';
import styled from 'styled-components';
import { useTimer } from '../../TodoService';

const TodoHead = () => {
  const time = useTimer();

  return (
    <TodoHeadBlock>
      <TimerText>{time}</TimerText>
    </TodoHeadBlock>
  );
};

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const TimerText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

export default React.memo(TodoHead);
