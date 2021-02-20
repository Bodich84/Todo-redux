import React from "react";
import PropTypes from 'prop-types'
import TodoList from "./Todo/TodoList";
import AddTodo from "./Todo/AddTodo";
import { connect } from "react-redux";
import { actionAddTodo, actionToggleTodo, actionRemoveTodo } from './redux/action'

function App({ todos, onCreate, onToggle, onRemove }) {

  return (
    <div className="container my-3" style={{ maxWidth: "600px" }}>
      <h1>Мої завдання</h1>

      <AddTodo onCreate={onCreate} />

      {todos.length ? (
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      ) : (
          <span>Немає завдань</span>
        )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreate: (title) => {
      dispatch(actionAddTodo(title))
    },
    onToggle: (id) => {
      dispatch(actionToggleTodo(id))
    },
    onRemove: (id) => {
      dispatch(actionRemoveTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCreate: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}