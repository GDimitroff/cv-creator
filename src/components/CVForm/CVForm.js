import { useContext } from 'react';

import CVContext from '../../contexts/cv-context';
import GeneralInfo from './GeneralInfo';

export default function CVForm() {
  const ctx = useContext(CVContext);

  return (
    <section className="cv-form">
      <GeneralInfo
        handleChange={ctx.handleGeneralInfoChange}
        generalInfo={ctx.cv.generalInfo}
      />
    </section>
  );
}
