import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: React.ReactNode;
  type?: 'checkbox' | 'radio';
  disabled?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { id, name, label, type = 'checkbox', ...restProps } = props;
  return (
    <Wrapper>
      <input ref={ref} type={type} id={id} name={name} {...restProps} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin-bottom: 24px;
  font-size: 1.5em;
`;

const StyledLabel = styled.label`
  margin-left: 8px;
`;

export default Checkbox;
