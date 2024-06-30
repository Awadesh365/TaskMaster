import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

/**
 * TodoForm component is a functional component that renders a form to add new todo items.
 * It uses the useTodo hook from the TodoContext to interact with the global todo state.
 *
 * @returns {JSX.Element} The TodoForm component
 */
function TodoForm() {
  // State to hold the todo input value
  const [todo, setTodo] = useState("");

  // Hook to get the addTodo function from the TodoContext
  const { addTodo } = useTodo();

  /**
   * Function to handle form submission
   * @param {Object} e - The form submission event
   */
  const add = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // If the todo input is empty, return without adding the todo
    if (!todo) return;

    // Add the todo to the global state and reset the todo input
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    // Render the form with the addTodo function as the form submission handler
    <form onSubmit={add} className="flex">
      {/* Render an input field for the todo */}
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo} // Set the value of the input field to the todo state
        onChange={(e) => setTodo(e.target.value)} // Update the todo state when the input value changes
      />
      {/* Render a button to submit the form */}
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
