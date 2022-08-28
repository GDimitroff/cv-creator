import { useContext } from 'react';

import CVContext from '../../store/cv-context';
import logo from '../../assets/logo.png';

export default function Header() {
  const ctx = useContext(CVContext);

  return (
    <header className="header">
      <div className="header--logo">
        <img src={logo} alt="CV Creator" />
      </div>
      <h1 className="header--title">CV Creator</h1>
      <div className="header--actions">
        <button className="btn btn-load-demo" onClick={ctx.loadExample}>
          Load Example
        </button>
        <button className="btn btn-clear" onClick={ctx.reset}>
          Clear
        </button>
        <button className="btn btn-pdf">Generate PDF</button>
        <button className="btn btn-toggle-preview">Flip icon</button>
      </div>
    </header>
  );
}
