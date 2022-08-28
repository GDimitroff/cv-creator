import { useContext } from 'react';
import CVContext from '../../store/cv-context';

export default function CVPreview() {
  const ctx = useContext(CVContext);
  const generalInfo = ctx.cv.generalInfo;

  return (
    <section className="cv-preview">
      <header className="cv-preview--header">
        <div className="cv-preview--header-left">
          <div className="cv-preview--header-names">
            <span className="cv-preview--first-name">
              {generalInfo.firstName}
            </span>{' '}
            <span className="cv-preview--last-name">
              {generalInfo.lastName}
            </span>
          </div>
          <h4 className="cv-preview--title">{generalInfo.title}</h4>
        </div>
        <div className="cv-preview--header-right">
          <ul className="list">
            <li>{generalInfo.phoneNumber}</li>
            <li>{generalInfo.email}</li>
            <li>{generalInfo.address}</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>
      </header>
      <hr />

      <main className="cv-preview--main">
        <div className="main-left"></div>
        <div className="main-right">
          <div className="cv-preview--photo">
            <img src={generalInfo.photoURL} alt="Personal" />
          </div>
        </div>
      </main>
    </section>
  );
}
