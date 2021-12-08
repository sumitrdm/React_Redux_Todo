//redux thunk allows us to create nested arrow function
//getState helps us to access the app state
// const {
//     Todo:{todos},

// } = getState();     //access the state that is todos inside Todo means just like useSelector



//todo application se lie and add to state

export const AddTodoAction = (todo) => (dispatch,getState) =>  
{
    const {
        Todo:{todos},

    } = getState();

    const hasTodo = todos.find((i) => i.todo === todo);

    if(!hasTodo && todo !=='')
    {
        dispatch({
            type:"ADD_TODO",
            payload:[ {id:todo,todo},...todos ]
            //take state todos and add todo to particular state so have an id so it is unique
            // that todo is unique and add to todos.

        })
    }

};

//todo is the particular todo pass from state(application )
export const RemoveTodoAction = (todo) => (dispatch,getState) => {
    const {
        Todo:{ todos },

    } = getState();

    dispatch({
        type:"REMOVE_TODO",
        payload:todos.filter((t) => t.id !== todo.id),
    });
}