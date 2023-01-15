export const addTodo = (todo) => {
    return {
      type: 'ADD_TODO',
      payload: todo
    }
  }
  
  export const updateTodo = (todo) => {
    return {
      type: 'UPDATE_TODO',
      payload: todo
    }
  }