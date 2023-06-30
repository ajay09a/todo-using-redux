// Actions constant
export const ADD_NOTE = "Add Todo";
export const DELETE_NOTE = "Toggle Todo";

// Action creators
export const addNote = (text) =>({text, type: ADD_NOTE})
export const delteNote = (index)=>({index, type: DELETE_NOTE})