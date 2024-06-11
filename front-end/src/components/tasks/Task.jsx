import { useEffect, useRef, useState } from "react";
import EditingIcon from "../../icons/EditingIcon";
import RemoveIcon from "../../icons/RemoveIcon";
import { Button, Grid, Typography } from "@mui/material";

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
    <div className="bg-blue-200 my-4 p-4">
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
          <Button
            className="mt-3 px-2 py-1 bg-blue-500 text-white rounded-md"
            type="submit"
          >
            Save
          </Button>
        </form>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="p" className="block">
              {taskTitle}
            </Typography>
            <Typography variant="p">{taskBody}</Typography>
          </Grid>
          <Grid item>
            <Button onClick={() => removeTask(taskId)}>
              <RemoveIcon></RemoveIcon>
            </Button>
            <Button onClick={startEditTask}>
              <EditingIcon></EditingIcon>
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Task;
