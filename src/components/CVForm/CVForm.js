import { useContext } from 'react';

import CVContext from '../../contexts/cv-context';
import Skills from './Skills';
import GeneralInfo from './General';
import classes from './CVForm.module.css';

export default function CVForm() {
  const ctx = useContext(CVContext);

  return (
    <section className={classes['cv-form']}>
      <GeneralInfo
        handleChange={ctx.handleGeneralInfoChange}
        generalInfo={ctx.cv.generalInfo}
      />
      <Skills />
    </section>
  );
}
