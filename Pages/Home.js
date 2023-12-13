import React, {useContext} from "react";
import Nav from "../Nav";
import Header from "./Header";
import Footer from "./Footer";
import { AuthContext } from "../AuthProvider";

const Home = ({userName}) => {
  const user = useContext(AuthContext);
  return (
    <div className="home-container bg-light">
      <div className="container">
        {userName ? (
        <p className="welcome-text text-right">Welcome, {userName}!</p> )  : null}
      </div>
      

      <main>
        <section className="introduction py-5">
          <div className="container text-center">
            <h2 className="mb-4">Welcome to TaskMaster App</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <p className="lead">
                  Stay organized and boost your productivity with our intuitive
                  and powerful TaskMaster app. Whether you have personal tasks,
                  work projects, or daily errands, our app will help you manage
                  them all in one place.
                </p>

                <p className="lead">
                  Create your customized to-do lists, set due dates, prioritize
                  tasks, and track your progress effortlessly. With our
                  user-friendly interface and seamless navigation, you can focus
                  on what matters most without the worry of missing important
                  deadlines.
                </p>

                <p className="lead">
                  Experience the convenience of accessing your to-do lists from
                  any device. Stay productive on the go with our responsive web
                  app that adapts to your workflow, ensuring your tasks are
                  always at your fingertips.
                </p>

                <p className="lead">
                  Take control of your tasks and make the most of your time. Get
                  started today with our TaskMaster app and unlock your full
                  potential for accomplishing goals and achieving success.
                </p>
              </div>
            </div>
            <h3 className="text-center mt-5">What our app offers?</h3>

            <div className="row justify-content-center mt-4">
              <div className="col-md-6">
                <ul className="list-unstyled ">
                  <li>
                    <i className="fas fa-check me-2"></i>Create New Tasks
                    </li>
                  <li>
                    <i className="fas fa-check me-2"></i>Track Your Tasks
                      
                    </li>
                </ul>
              </div>

              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check me-2"></i>Manage Your Tasks</li>
                  <li>
                    <i className="fas fa-check me-2">
                    </i>Customize Your Tasks</li>
                  <li>
                    <i className="fas fa-check me-2"></i>Achieve Your Goals!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
