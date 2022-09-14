export default function Input({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

// const InputWrapper = styled.input`
//   width: 100%;
//   font-size: 1.4rem;
//   height: 35px;
//   display: block;
//   padding-inline: 5px;
//   background-color: ${({ theme }) => theme.colors['light-200']};
//   transition: 0.4s ease-in-out;
//   border-left: 2px solid transparent;

//   &:focus {
//     background-color: ${({ theme }) => theme.colors['light-300']};
//     border-left: 2px solid ${({ theme }) => theme.colors['dark-300']};
//   }

//   &:-webkit-autofill,
//   &:-webkit-autofill::first-line,
//   &:-webkit-autofill:hover,
//   &:-webkit-autofill:focus,
//   &:-webkit-autofill:active {
//     font-family: inherit;
//   }
// `;
