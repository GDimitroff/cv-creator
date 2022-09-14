export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with ❤️ by{' '}
        <a
          href="https://github.com/GDimitroff"
          target="_blank"
          rel="noreferrer">
          Gospodin Dimitrov
        </a>
      </p>
    </footer>
  );
}

// const FooterWrapper = styled.footer`
//   background-color: ${({ theme }) => theme.colors['dark-300']};
//   color: ${({ theme }) => theme.colors['light-200']};
//   text-align: center;
//   padding: 1rem;
//   font-size: 1.2rem;

//   a:link,
//   a:visited {
//     color: ${({ theme }) => theme.colors['light-100']};
//     transition: 0.2s ease-in-out;
//   }

//   a:active,
//   a:hover {
//     color: ${({ theme }) => theme.colors['light-300']};
//   }
// `;
