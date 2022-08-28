import styled from 'styled-components';

export default function Button({ onClick, text }) {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  transition: 0.2s ease-in-out;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors['dark-100']};
  }
`;
