import EditingIcon from "../../icons/EditingIcon";
import RemoveIcon from "../../icons/RemoveIcon";

function Task({ taskTitle, taskBody, taskId, removeTask, editTaskForm }) {
  return (
    <div>
      <h3 className="inline mr-5">Task : {taskTitle}</h3>
      <button onClick={() => removeTask(taskId)}>
        <RemoveIcon></RemoveIcon>
      </button>
      <button onClick={() => editTaskForm}>
        <EditingIcon></EditingIcon>
      </button>
      <p>description : {taskBody}</p>
      <br />
      <hr />
    </div>
  );
}

export default Task;
