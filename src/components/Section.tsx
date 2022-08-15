import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function Section({ children }: Props) {
  return <StyledSection>{children}</StyledSection>;
}

const StyledSection = styled.section`
  padding: 30px;
`;

export default Section;
