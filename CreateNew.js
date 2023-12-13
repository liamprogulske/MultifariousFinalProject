import React from "react";
import Nav from "../Nav";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const CreateNew = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="container flex-grow-1">
        <h2>New Task</h2>
        <form action="list.html" method="POST">
          <div className="form-group">
            <label htmlFor="task">Task:</label>
            <input type="text" className="form-control" id="task" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="text" className="form-control" id="date" />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input type="text" className="form-control" id="time" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" className="form-control" id="location" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Task Description:</label>
            <input type="text" className="form-control" id="description" />
          </div>
          <Link to="/list">
            <button className="btn btn-primary">Create Task</button>
          </Link>
        </form>
      </main>
      <Footer />
    </div>
  );
};
export default CreateNew;
