import { useContext } from 'react';
import styled from 'styled-components';

import CVContext from '../../contexts/cv-context';
import logo from '../../assets/logo.png';
import Button from '../Utils/Button';

export default function Header() {
  const ctx = useContext(CVContext);

  return (
    <HeaderContainer>
      <div className="logo">
        <img src={logo} alt="CV Creator" />
      </div>
      <h1 className="title">CV Creator</h1>
      <div className="actions">
        <Button onClick={ctx.loadExample} text="LoadExample" />
        <Button onClick={ctx.reset} text="Clear" />
        <Button text="Generate PDF" />
        <Button text="Flip icon" />
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  height: 60px;
  color: ${({ theme }) => theme.colors['dark-300']};
  background-color: ${({ theme }) => theme.colors['light-200']};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: sticky;
  top: 0;
  left: 0;

  .logo {
    width: 42px;
  }

  img {
    width: 100%;
  }

  .title {
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-right: auto;
  }

  .actions {
    display: flex;
    gap: 8px;
  }
`;
