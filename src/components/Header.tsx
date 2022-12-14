import { useCallback } from 'react';
import styled from 'styled-components';

export default function Header() {
  const handleBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <StyledHeader>
      <svg
        style={{ marginLeft: 8 }}
        onClick={handleBack}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="#000000"
        data-svg-content="true"
      >
        <g>
          <path d="M 12.3,17.71l 6.486,6.486c 0.39,0.39, 1.024,0.39, 1.414,0c 0.39-0.39, 0.39-1.024,0-1.414L 14.418,17 L 20.2,11.218c 0.39-0.39, 0.39-1.024,0-1.414c-0.39-0.39-1.024-0.39-1.414,0L 12.3,16.29C 12.104,16.486, 12.008,16.742, 12.008,17 C 12.008,17.258, 12.104,17.514, 12.3,17.71z"></path>
        </g>
      </svg>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 56px;
  cursor: pointer;
`;
