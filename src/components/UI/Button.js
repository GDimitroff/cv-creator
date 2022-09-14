import './Button.module.css';

export default function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}
