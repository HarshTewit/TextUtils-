import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Required to use <Link>

export default function Navbar(props) {
  const switchLabelStyle = {
    color: props.mode === 'light' ? 'black' : 'white'
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* ✅ Use capital L: <Link> not <link> */}
        <Link className="navbar-brand" to="/">{props.title}</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link> {/* ✅ Fixed */}
            </li>
          </ul>

          <div className="form-check form-switch" onClick={props.toggleMode}>
            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault" style={switchLabelStyle}>
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
