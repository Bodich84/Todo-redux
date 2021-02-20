
let initialState = [
  { id: 1, completed: false, title: "Купити хліб" },
  { id: 2, completed: true, title: "Купити молоко" },
  { id: 3, completed: false, title: "Купити яйця" },
]

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          completed: false,
          title: action.payload
        }
      ]
    case 'TOGGLE_TODO':
      state = [ ...state]
      state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
        return null
      })
      return state
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

export default Reducer