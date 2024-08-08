import { useContext, createContext } from "react";

const TodoContext = createContext();

const useTodo = () => {
    return useContext(TodoContext)
}

const TodoProvider = TodoContext.Provider

export default { TodoContext, useTodo, TodoProvider }




