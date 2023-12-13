import React, { useState, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Footer from "./Footer";
const Login = ({onLogin}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedinSucessfully, setLogin] = useState(false);
  const user = useContext(AuthContext);
  console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLogin(true);
        onLogin();
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };


  return (
    <>
      {isLoggedinSucessfully ? (
        // Render the authenticated content
        <div>{/* Add the authenicated component structure here */}</div>
      ) : (
        // Render the login form
        <main className="home-container d-flex flex-column min-vh-100">
          <section className="mt-5 flex-grow-1">
            <div className="card mx-auto" style={{ maxWidth: "400px" }}>
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Task Master App</h3>

                <form>
                  <div className="form-group">
                    <label htmlFor="email-address">Email address</label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      className="form-control"
                      required
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"
                      required
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-primary btn-block"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                </form>

                <p className="text-sm  text-center mt-3">
                  No account yet? <NavLink to="/signup">Sign up</NavLink>
                </p>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      )}
    </>
  );
};

export default Login;
