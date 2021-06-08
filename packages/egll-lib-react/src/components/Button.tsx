import styled from '@emotion/styled';
import React from 'react';

const BaseButton = styled.button`
  width: 200px;
  height: 70px;
  background-color: #560bad;
  border: 1px solid #3a0ca3;
  font-size: 1.5rem;
  color: white;
  :hover {
    border-color: #4cc9f0;
    background-color: #3f37c9;
  }
`

export const PrimaryButton: React.FC<unknown> = (props) => {
  const {children} = props;
  const trackButtonClicked = () => {
    console.log('Primary button is being tracked');
  }

  return <BaseButton onClick={trackButtonClicked}>{children}</BaseButton>
}