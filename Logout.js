import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { AuthContext } from "../AuthProvider";
import React, { useContext } from "react";
import Footer from "./Footer";
const Logout = ({ userName, onLogout }) => {
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        onLogout();
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log("Logout error:", error);
      });
  };

  return (
    <main className="home-container d-flex flex-column min-vh-100">
      <section className="mt-5 flex-grow-1">
        <div className="card mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Logout</h3>
            <p className=" text-center">
              Are you sure you want to log out, {userName}?
            </p>

            <div className="text-center">
              <button
                className="btn btn-primary btn-block"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Logout;
