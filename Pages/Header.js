import React, { useContext, useState } from "react";
import logo from "../images/logo.png";
import "../App.css";
import { signOut } from "firebase/auth";
import { AuthContext } from "../AuthProvider";
import { auth } from "../FirebaseConfig";
import { useNavigate, NavLink } from "react-router-dom";
import Nav from "../Nav";
const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Perform any additional logout actions if necessary
        navigate("/");
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header className="header bg-dark text-light py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2">
            <img src={logo} alt="My App Logo" className="logo logo-left" />
          </div>
          <div className="col-md-8">
            <h1 className="app-title text-center"></h1>
          </div>
          <div className="col-md-2 text-right">
            <img src={logo} alt="My App Logo" className="logo logo-right" />
          </div>
        </div>
      </div>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isSidebarOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <Nav />
              <li className="nav-item">
                {user ? (
                  <NavLink to={"/logout"} className="nav-link">
                    Logout
                  </NavLink>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink to={"/login"} className="nav-link">
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/signup"} className="nav-link">
                        Signup
                      </NavLink>
                    </li>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
