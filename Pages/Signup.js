import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { AuthContext } from "../AuthProvider";
import Footer from "./Footer";
const Signup = () => {
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  console.log(user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="home-container d-flex flex-column min-vh-100">
      <section className="mt-5 flex-grow-1">
        <div className="card mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4"> Sign Up</h3>
            <form>
              <div className="form-group">
                <label htmlFor="email-address">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-address"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-primary btn-block"
              >
                Sign up
              </button>
            </form>
            <p className="text-center mt-3">
              Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
