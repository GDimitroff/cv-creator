export default function TextArea({ name, placeholder, value, onChange }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

// const TextAreaWrapper = styled.textarea`
//   font-size: 1.4rem;
//   height: 140px;
//   padding-inline: 5px;
//   resize: none;
//   background-color: ${({ theme }) => theme.colors['light-200']};
//   transition: 0.4s ease-in-out;
//   border-left: 2px solid transparent;

//   &:focus {
//     background-color: ${({ theme }) => theme.colors['light-300']};
//     border-left: 2px solid ${({ theme }) => theme.colors['dark-300']};
//   }
// `;
