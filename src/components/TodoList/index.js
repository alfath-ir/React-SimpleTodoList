import React from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = ({ todos, hapusTodo }) => {
  return (
    <List>
      {todos.map((v, i) => {
        return (
          <ListItem>
            <Checkbox tabIndex={-1} disableRipple />
            <ListItemText primary={v} />
            <ListItemSecondaryAction onClick={() => hapusTodo(i)}>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
