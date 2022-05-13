import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === 'outline' ? 'none' : 'red'};
  width: 100px;
  height: 40px;
  &:hover {
    background-color: orange;
  }
  border: 2px solid red;
`;

//styling extending from existing component
export const FancyButton = styled(StyledButton)`
  background-color: pink;
`;

//adding attributed in styled component

export const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: 'submit',
}))`
  background-color: yellow;
`;

export const DarkButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.color};
`;

export default StyledButton;
