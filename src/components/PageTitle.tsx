import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

export default function PageTitle({ children }: Props) {
  return (
    <StyledTitle
      style={{
        width: '100%',
        fontSize: '1.5em',
      }}
    >
      {children}
    </StyledTitle>
  );
}

const StyledTitle = styled.h1`
  width: 100%;
  font-size: 1.5em;
`;
