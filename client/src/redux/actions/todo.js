export function fetchTodo() {
  return {
    type :'TODO_RECEIVED',
    payload : {
      todos : [
        { text : 'test'},
        { text : 'test 2' , completed :true },
      ]
    }
  }
}