import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, index, onToggle, onRemove }) {
  const classes = [];

  if (todo.completed) {
    classes.push("text-decoration-line-through");
  }
  
  return (
    <li className="list-group-item d-flex">
      <span className="flex-grow-1">
        <input className="form-check-input" type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <span className="index px-2">{index + 1}</span>
        <span className={classes.join(" ")}>{todo.title}</span>
      </span>
      <button className="btn-close flex-shrink-1 ms-2" onClick={() => onRemove(todo.id)}></button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default TodoItem;
