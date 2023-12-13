import React from "react";
import { Link } from "react-router-dom";

const ListEvent = (props) => {
  const { tasks } = props;

  return (
    <>
      <div className="mt-4">
        <h3>Urgent</h3>
        {tasks.slice(0, 3).map((task) => (
          <div className="card mt-3" key={task.id}>
            <div className="card-body">
              <h5 className="card-title">{task.task}</h5>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Link
                    to={`/detail/${task.id}`}
                    className="btn btn-primary card-link"
                  >
                    View
                  </Link>
                  <Link
                    to={`/detail/${task.id}`}
                    className="btn btn-secondary card-link">
                    Update
                  </Link>
                  <a href="#" className="btn btn-danger card-link">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 ">
        <h3>Important</h3>
        {tasks.slice(3, 6).map((task) => (
          <div className="card mt-3" key={task.id}>
            <div className="card-body">
              <h5 className="card-title">{task.task}</h5>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Link
                    to={`/detail/${task.id}`}
                    className="btn btn-primary card-link"
                  >
                    View
                  </Link>
                  <Link
                    to={`/detail/${task.id}`}
                    className="btn btn-secondary card-link"
                  >
                    Update
                  </Link>
                  <a href="#" className="btn btn-danger card-link">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListEvent;
