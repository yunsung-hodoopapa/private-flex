import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function Fieldset({ children }: Props) {
  return <StyledFieldSet>{children}</StyledFieldSet>;
}

const StyledFieldSet = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

export default Fieldset;
