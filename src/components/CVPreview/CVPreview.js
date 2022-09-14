import { useContext } from 'react';

import CVContext from '../../contexts/cv-context';
import classes from './CVPreview.module.css';

export default function CVPreview() {
  const ctx = useContext(CVContext);
  const generalInfo = ctx.cv.generalInfo;
  const education = ctx.cv.education;

  const educationList = education.map((edu) => {
    return (
      <div>
        <h2>
          {edu.degree} of {edu.subject}
        </h2>
        <p className={classes.university}>
          {edu.universityName}, {edu.city}
        </p>
        <p className={classes['from-to']}>
          {edu.from} - {edu.to}
        </p>
      </div>
    );
  });

  return (
    <section className={classes['cv-preview']}>
      <header className={classes.header}>
        <div className={classes['header-left']}>
          <p>
            <span className={classes['first-name']}>
              {generalInfo.firstName}
            </span>{' '}
            <span className={classes['last-name']}>{generalInfo.lastName}</span>
          </p>
          <h4 className={classes.title}>{generalInfo.title}</h4>
        </div>
        <div className={classes['header-right']}>
          <ul className={classes.links}>
            <li>{generalInfo.phoneNumber}</li>
            <li>{generalInfo.email}</li>
            <li>{generalInfo.address}</li>
            <li>{generalInfo.linkedIn}</li>
            <li>{generalInfo.facebook}</li>
          </ul>
        </div>
      </header>

      <hr />

      <main className={classes.main}>
        <div className={classes['main-left']}>
          <h1 className={classes.heading}>Education</h1>
          <div className={classes.education}>{educationList}</div>
        </div>
        <div className={classes['vertical-line']}></div>
        <div className={classes['main-right']}>
          <div className={classes.panel}>
            <h1 className={classes.heading}>Profile</h1>
            <p>{generalInfo.description}</p>
          </div>
          <hr />
        </div>
      </main>
    </section>
  );
}
