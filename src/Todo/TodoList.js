import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onRemove}) {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          index={index}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default TodoList;
