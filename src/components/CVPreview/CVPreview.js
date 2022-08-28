import { useContext } from 'react';
import styled from 'styled-components';

import CVContext from '../../contexts/cv-context';

export default function CVPreview() {
  const ctx = useContext(CVContext);
  const generalInfo = ctx.cv.generalInfo;

  return (
    <CVPreviewWrapper>
      <header className="header">
        <div className="header-left">
          <p>
            <span className="first-name">{generalInfo.firstName}</span>{' '}
            <span className="last-name">{generalInfo.lastName}</span>
          </p>
          <h4 className="title">{generalInfo.title}</h4>
        </div>
        <div className="header-right">
          <ul className="links">
            <li>{generalInfo.phoneNumber}</li>
            <li>{generalInfo.email}</li>
            <li>{generalInfo.address}</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>
      </header>

      <hr />

      <main className="main">
        <div className="main-left"></div>
        <div className="main-right">
          <div className="panel">
            <h1>Profile</h1>
            <p>{generalInfo.description}</p>
          </div>
          <hr />
        </div>
      </main>
    </CVPreviewWrapper>
  );
}

const CVPreviewWrapper = styled.section`
  flex-basis: 65%;
  background-color: ${({ theme }) => theme.colors['light-200']};
  padding: 3rem;
  margin: 3rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .header {
    display: flex;
    justify-content: space-between;
  }

  .header-left {
    display: flex;
    flex-direction: column;
  }

  .first-name,
  .last-name {
    font-size: 5.2rem;
    font-weight: 100;
  }

  .last-name {
    font-weight: 500;
    margin-left: 10px;
  }

  .title {
    align-self: flex-start;
    padding: 0 1.8rem;
    background-color: ${({ theme }) => theme.colors['dark-300']};
    color: ${({ theme }) => theme.colors['light-300']};
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 400;
  }

  .links {
    list-style: none;
    font-size: 1.4rem;
  }

  hr {
    margin: 4rem 0;
    border: 1px solid #e5e7eb;
  }

  .main {
    display: flex;
    justify-content: space-between;
  }

  .main-left {
    flex-basis: 20%;
  }

  .main-right {
    flex-basis: 70%;
  }

  .panel h1 {
    color: #9ca3af;
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .panel p {
    font-size: 1.4rem;
  }
`;
