import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header--logo">
        <img src={logo} alt="CV Creator" />
      </div>
      <h1 className="header--title">CV Creator</h1>
      <div className="header--actions">
        <button className="btn btn-load-demo">Load Example</button>
        <button className="btn btn-clear">Clear</button>
        <button className="btn btn-pdf">Generate PDF</button>
        <button className="btn btn-toggle-preview">Flip icon</button>
      </div>
    </header>
  );
}
