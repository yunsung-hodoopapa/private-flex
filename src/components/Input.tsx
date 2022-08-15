import {
  forwardRef,
  ForwardRefExoticComponent,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import styled from 'styled-components';

type ValidationState = 'invalid' | 'valid';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  validationState?: ValidationState;
  label?: Exclude<ReactNode, boolean | null | undefined>;
  bottomText?: ReactNode;
}

const COLOR_SET: Record<ValidationState, string> = {
  valid: '#ccc',
  invalid: '#e34850',
};

const InnerInput = forwardRef<HTMLInputElement, Props>(
  ({ validationState = 'valid', label, bottomText, ...props }, ref) => {
    const bottomTextElement =
      typeof bottomText === 'string' ? (
        <BottomText $validateState={validationState}>{bottomText}</BottomText>
      ) : (
        bottomText
      );

    return (
      <Label>
        {label}
        <StyledInput $validateState={validationState} ref={ref} {...props} />
        {bottomTextElement}
      </Label>
    );
  }
);

const Label = styled.label`
  display: block;

  input {
    width: 100%;
  }
`;
const StyledInput = styled.input<{ $validateState: ValidationState }>`
  padding: 8px 12px;
  border-radius: 4px;
  box-sizing: border-box;

  outline: none;

  border: ${({ $validateState }) => `1px solid ${COLOR_SET[$validateState]}`};
  &:focus-visible {
    border: ${({ $validateState }) =>
      `1px solid ${
        $validateState === 'valid' ? '#2680eb' : COLOR_SET[$validateState]
      }`};
  }
`;

const BottomText = styled.span<{ $validateState: ValidationState }>`
  font-size: 12px;
  font-weight: 700;
  color: ${({ $validateState }) => COLOR_SET[$validateState]};
`;

type InputComponentType = ForwardRefExoticComponent<Props> & {
  BottomText: typeof BottomText;
};

const Input = InnerInput as InputComponentType;

Input.BottomText = BottomText;
export default Input;
