import { useContext } from 'react';

import CVContext from '../../contexts/cv-context';
import Skills from './Skills';
import GeneralInfo from './General';

export default function CVForm() {
  const ctx = useContext(CVContext);

  return (
    <div>
      <GeneralInfo
        handleChange={ctx.handleGeneralInfoChange}
        generalInfo={ctx.cv.generalInfo}
      />
      {/* <Skills /> */}
    </div>
  );
}

// const CVFormWrapper = styled.section`
//   flex-basis: 35%;
//   background-color: ${({ theme }) => theme.colors['light-100']};
//   padding: 3rem;
// `;
