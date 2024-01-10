const initialState = {
    todos: []
  };
  
  const todoReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_TODO':
        return {
          ...state,todos: [...state.todos, action.payload]
        }
        case 'UPDATE_TODO':
        const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
        return action.payload;
        }
        return todo;
        });
        return {
        ...state,
        todos: updatedTodos
        }
        default:
        return state;
        }
        }
        
        export default todoReducer;

        
