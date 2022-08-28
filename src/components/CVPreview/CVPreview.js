import { useContext } from 'react';
import CVContext from '../../store/cv-context';

export default function CVPreview() {
  const ctx = useContext(CVContext);

  return (
    <section className="cv-preview">
      <h1>CV Preview</h1>
      <h3>{ctx.cv.generalInfo.firstName}</h3>
      <h3>{ctx.cv.generalInfo.lastName}</h3>
    </section>
  );
}
