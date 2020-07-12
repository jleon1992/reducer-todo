
export const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'toggle':
            return state.map(todo => {
              if(todo.id === action.payload){
                return {
                  ...todo,
                  completed: !todo.completed
                }
              }else{
                return todo
              }
            })
        case 'clear':
          return state.filter(todo => {
            return todo.completed === false
          })
         
          
      default:
        return state
    }
  }
  
export const initialstate = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },
      {
          item: 'export successfully',
          completed: false,
          id:55556666
      }
]
