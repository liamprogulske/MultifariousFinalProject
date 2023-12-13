import React, { useState, useEffect, useContext } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import CreateNew from "./pages/CreateNew";
import List from "./pages/List";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import { auth } from "./FirebaseConfig";
import AuthProvider from "./AuthProvider";

import Header from "./pages/Header";





import { useNavigate, NavLink } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");


  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoggedIn(!!user);
      if (user) {
        setUserName(user.displayName || user.email);
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setLoggedIn(false);
        setUserName("");
        console.log("logged out");
        return <Navigate to="/" replace />;
      })
      .catch((error) => {
        console.log("logout error:", error);
      });
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const ProtectedRoute = ({ path, element }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return <Route path={path} element={element} />;
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App bg-light">
          <head>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
          </head>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="/">
                TaskMaster App
              </a>
              <Header />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav"></div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home userName={userName} />} />

            {isLoggedIn ? (
              <>
                <Route
                  path="/detail/:taskId"
                  element={<Detail user={auth.currentUser} />}
                />
                <Route
                  path="/createnew"
                  element={<CreateNew user={auth.currentUser} />}
                />
                <Route
                  path="/list"
                  element={<List user={auth.currentUser} />}
                />
                <Route
                  path="/logout"
                  element={
                    <Logout userName={userName} onLogout={handleLogout} />
                  }
                />
              </>
            ) : (
              <>
                <Route
                  path="/login"
                  element={<Login onLogin={handleLogin} />}
                />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/detail"
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path="/createnew"
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path="/list"
                  element={<Navigate to="/login" replace />}
                />
              </>
            )}
          </Routes>
        </div>

        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
      </Router>
    </AuthProvider>
  );
};

export default App;
