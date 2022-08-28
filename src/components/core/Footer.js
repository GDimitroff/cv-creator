import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrapper className="footer">
      <p>
        Made with ❤️ by{' '}
        <a
          href="https://github.com/GDimitroff"
          target="_blank"
          rel="noreferrer">
          Gospodin Dimitrov
        </a>
      </p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors['dark-300']};
  color: ${({ theme }) => theme.colors['light-200']};
  text-align: center;
  padding: 1rem;
  font-size: 1.4rem;

  a:link,
  a:visited {
    color: ${({ theme }) => theme.colors['light-100']};
    transition: 0.2s ease-in-out;
  }

  a:active,
  a:hover {
    color: ${({ theme }) => theme.colors['dark-200']};
  }
`;
