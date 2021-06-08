import styled from '../lib/styled';
import React from 'react';
import { useTheme } from 'emotion-theming';
import {Theme} from '../themes';

const BaseButton = styled.button`
  width: 200px;
  height: 70px;
  background-color: ${({theme}) => theme.base.background};
  border: 1px solid ${({theme}) => theme.base.border};
  font-size: 1.5rem;
  color: ${({theme}) => theme.base.color};
  :hover {
    border-color: ${({theme}) => theme.hover.border};
    background-color: ${({theme}) => theme.hover.background};
    color: ${({theme}) => theme.hover.color};
  }
`

export const PrimaryButton: React.FC<unknown> = (props) => {
  const {children} = props;
  const theme: Theme = useTheme();
  const trackButtonClicked = () => {
    console.log(`Primary button is being tracked and its using the theme ${theme.name}`);
  }

  return <BaseButton onClick={trackButtonClicked}>{children}</BaseButton>
}