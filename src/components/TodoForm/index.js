import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const TodoForm = ({ simpan }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (value) => {
    return (e) => {
      e.preventDefault();

      simpan(value);

      setValue("");
    };
  };

  return (
    <form onSubmit={handleSubmit(value)}>
      <TextField
        onChange={(e) => setValue(e.target.value)}
        value={value}
        variant="outlined"
        placeholder="Add"
        margin="normal"
      />
    </form>
  );
};

export default TodoForm;
