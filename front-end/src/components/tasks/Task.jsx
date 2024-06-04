import { useEffect, useRef, useState } from "react";
import EditingIcon from "../../icons/EditingIcon";
import RemoveIcon from "../../icons/RemoveIcon";

function Task({
  taskId,
  taskTitle,
  taskBody,
  removeTask,
  startEditTask,
  submitEditTask,
  isEditing,
}) {
  const [newTitle, setNewTitle] = useState(taskTitle);
  const [newBody, setNewBody] = useState(taskBody);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEditTask(taskId, { title: newTitle, body: newBody });
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className="mx-3 p-2 rounded-md"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <input
            className="mr-3 p-2 rounded-md"
            type="text"
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
            required
          />
          <button
            className="mt-3 px-2 py-1  bg-blue-500 text-white rounded-md"
            type="submit"
          >
            Save
          </button>
        </form>
      ) : (
        <div>
          <h3 className="inline mr-5">Task : {taskTitle}</h3>
          <button onClick={() => removeTask(taskId)}>
            <RemoveIcon></RemoveIcon>
          </button>
          <button onClick={startEditTask}>
            <EditingIcon></EditingIcon>
          </button>
          <p>description : {taskBody}</p>
          <br />
          <hr />
        </div>
      )}
    </div>
  );
}

export default Task;
