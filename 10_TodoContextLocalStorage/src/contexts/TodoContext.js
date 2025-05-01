import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Task 1",
            isComplete: false
        }
    ],
    createTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toogleComplete: (id) => {}
});

export function useTodo() {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;