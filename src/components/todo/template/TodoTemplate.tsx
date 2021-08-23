import React from 'react';
import styled from 'styled-components';

function TodoTemplate(props: any) {
  return (
    <TodoTemplateWrapper>
      <TodoTemplateBlock>{props.children}</TodoTemplateBlock>
    </TodoTemplateWrapper>
  );
}

const TodoTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const TodoTemplateBlock = styled.div`
  width: 70%;
  height: 95%;

  min-width: 360px;
  max-width: 600px;

  position: relative;
  background: white;
  border-radius: 30px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);

  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default React.memo(TodoTemplate);
