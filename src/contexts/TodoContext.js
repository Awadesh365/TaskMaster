import { createContext, useContext } from "react"

/**
 * The TodoContext is a React context that provides the global state and functions related to the todos.
 * It is used by the useTodo hook to access the context.
 */
export const TodoContext = createContext({
    /**
     * The todos state is an array of objects representing the todo items.
     * Each todo object has an id, todo message, and a completion status.
     */
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    /**
     * The addTodo function is used to add a new todo item to the todos state.
     * It takes a todo object as a parameter and adds it to the beginning of the todos state.
     * @param {Object} todo - The todo object to be added
     */
    addTodo: (todo) => { },
    /**
     * The updateTodo function is used to update an existing todo item in the todos state.
     * It takes an id and a todo object as parameters and finds the todo item with the matching id and updates it.
     * @param {number} id - The id of the todo item to be updated
     * @param {Object} todo - The updated todo object
     */
    updateTodo: (id, todo) => { },
    /**
     * The deleteTodo function is used to delete a todo item from the todos state.
     * It takes an id as a parameter and removes the todo item with the matching id from the todos state.
     * @param {number} id - The id of the todo item to be deleted
     */
    deleteTodo: (id) => { },
    /**
     * The toggleComplete function is used to toggle the completion status of a todo item.
     * It takes an id as a parameter and finds the todo item with the matching id and toggles its completion status.
     * @param {number} id - The id of the todo item to be toggled
     */
    toggleComplete: (id) => { }
})


/**
 * useTodo hook is a custom hook that returns the context provided by the TodoContext.
 * It is used to access the global state and functions related to the todos.
 * 
 * @returns {Object} The context object containing todos, addTodo, updateTodo, deleteTodo, and toggleComplete functions
 */
export const useTodo = () => {
    // Returns the context provided by the TodoContext
    // The context object contains the todos, addTodo, updateTodo, deleteTodo, and toggleComplete functions
    // These functions are used to manage the global state of the todos
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider