import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  height: 2rem;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;

  background-image: ${({ theme }) =>
    `linear-gradient(-45deg, ${theme.primary}, ${theme.secondary})`};
  color: ${({ theme }) => theme.background};

  letter-spacing: 0.2rem;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    filter: brightness(1.04);
  }
  &:active {
    filter: brightness(1.08);
  }
`;

export default Button;