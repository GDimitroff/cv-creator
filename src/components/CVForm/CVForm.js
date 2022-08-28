import { useContext } from 'react';
import styled from 'styled-components';

import CVContext from '../../contexts/cv-context';
import GeneralInfo from './GeneralInfo';

export default function CVForm() {
  const ctx = useContext(CVContext);

  return (
    <CVFormWrapper>
      <GeneralInfo
        handleChange={ctx.handleGeneralInfoChange}
        generalInfo={ctx.cv.generalInfo}
      />
    </CVFormWrapper>
  );
}

const CVFormWrapper = styled.section`
  flex-basis: 35%;
  background-color: ${({ theme }) => theme.colors['light-200']};
  padding: 3rem 5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
