import { ADD_TODO, TOGGLE_TODO } from "../actions/todoAction";

const initialState={
    todos:[
        {'text': "workout at 6am", completed: true},
        {'text': "meeting at 9am", completed: false}
    ]
}

export function todoReducer(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo, i)=>{
                    if(i===action.index){
                        todo.completed=!todo.completed
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}