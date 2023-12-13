import React from "react";
import { Link } from "react-router-dom";

const DetailEvent = (props) => {
  const { task, date, time, location, desc } = props; // Extract the information from props.event

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Task Detail</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">Task: {task}</h5>
          <p className="card-text">
            <strong>Date:</strong> {date}
          </p>
          <p className="card-text">
            <strong>Time:</strong> {time}
          </p>
          <p className="card-text">
            <strong>Location:</strong> {location}
          </p>
          <p className="card-text">
            <strong>Description:</strong> {desc}
          </p>
          <Link to="/list" className="btn btn-primary">
            Mark As Complete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailEvent;
