import { Fragment } from 'react';

import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

export default function Main() {
  return (
    <Fragment>
      <CVForm />
      <CVPreview />
    </Fragment>
  );
}
