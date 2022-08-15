import { ReactNode, MouseEvent } from 'react';
import styled from 'styled-components';

interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export default function Button({ onClick, children }: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: white;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
`;
