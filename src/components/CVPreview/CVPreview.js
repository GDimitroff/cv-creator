import { useCV } from '../../contexts/CVContext';

import Header from './Header';
import Education from './Education';
import Skills from './Skills';
import Awards from './Awards';
import GeneralInfo from './GeneralInfo';

import classes from './CVPreview.module.css';

export default function CVPreview() {
  const { generalInfo, skills, education } = useCV();

  return (
    <section className={classes['cv-preview']}>
      <Header info={generalInfo} />
      <hr />
      <main className={classes.main}>
        <div className={classes['main-left']}>
          <Education education={education} />
          <hr />
          <Skills skills={skills} />
          <hr />
          <Awards />
        </div>
        <div className={classes['vertical-line']}></div>
        <div className={classes['main-right']}>
          <GeneralInfo generalInfo={generalInfo} />
          <hr />
        </div>
      </main>
    </section>
  );
}
