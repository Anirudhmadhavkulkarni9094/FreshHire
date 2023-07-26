import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/navBar.css';

function NavBar({ adminAuth, userAuth , handleAuth }) {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          FreshHire
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Career
              </a>
              <ul className="dropdown-menu bg-dark">
                {!adminAuth && <li>
                  <Link className="dropdown-item" to="/full-job">
                    Get Hired
                  </Link>
                </li>}
                {adminAuth && <> <li>
                  <Link className="dropdown-item" to="/Post-Job">
                    Post Job
                  </Link>
                </li>
                <li>
                <Link className="dropdown-item" to="/Hire-talent">
                    Hire Talent
                  </Link>
                </li>
                </>}
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            {!userAuth && (
              <li className="nav-item">
                <Link className="nav-link btn btn-primary" to="/User-login">
                  User
                </Link>
              </li>
            )}
            {!adminAuth && (
              <li className="nav-item">
                <Link className="nav-link btn btn-primary" to="/admin-login">
                  Admin
                </Link>
              </li>
            )}
            {userAuth || adminAuth ? (
  <li className="nav-item">
    <button onClick={handleAuth} className="nav-link btn btn-primary">
      Log out
    </button>
  </li>
) : (
  <li className="nav-item">
    <Link className="nav-link btn btn-primary" to="/Sign-Up">
      Sign Up
    </Link>
  </li>
)}

          </ul>
        </div>
      </div>
      {console.log(adminAuth, userAuth)}
    </nav>
  );
}

export default NavBar;
