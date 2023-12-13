import React from "react";
import { useParams } from "react-router-dom";
import DetailEvent from "./DetailEvent";
import { data } from "../data/data";

const Detail = () => {
  const { taskId } = useParams();

  // Find the task with the matching ID
  let selectedTask = null;
  for (const group of data) {
    selectedTask = group.tasks.find((task) => task.id === parseInt(taskId));
    if (selectedTask) {
      break;
    }
  }


  return (
    <div>
      <main>
        {selectedTask && (
          <DetailEvent
            task={selectedTask.task}
            date={selectedTask.date}
            time={selectedTask.time}
            location={selectedTask.location}
            desc={selectedTask.description}
          />
        )}
      </main>
    </div>
  );
};

export default Detail;
