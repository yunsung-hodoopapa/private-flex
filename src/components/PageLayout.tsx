import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function PageLayout({ children, ...props }: Props) {
  return <StyledArticle {...props}>{children}</StyledArticle>;
}

const StyledArticle = styled.article`
  margin: auto;
  display: flex;
  flex-direction: column;
`;
