export const actionAddTodo = (title) => {
  return {
    type: 'ADD_TODO',
    payload: title
  }
}

export const actionToggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

export const actionRemoveTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: id
  }
}