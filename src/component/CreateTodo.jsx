import { useState } from "react";

const CreateTodo = ({ todos, getTodos, lastTodoId }) => {
  const [newTodo, setNewTodo] = useState("");

  const onSubmitNewTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    const newTodos = [
      ...todos,
      { id: lastTodoId + 1, todo: newTodo, isDone: false },
    ];

    localStorage.setItem("todos", JSON.stringify(newTodos));

    getTodos();
  };

  return (
    <form
      className="bg-purple-100 w-96 mx-auto mt-12 flex"
      onSubmit={onSubmitNewTodo}
    >
      <input
        className="w-3/4 mr-4 rounded-md p-2 focus:outline-none border-2 focus:border-blue-300"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input
        className="w-1/4 bg-blue-400 hover:bg-blue-600 active:bg-blue-400 text-white font-semibold rounded-md"
        type="submit"
        value="생 성"
      />
    </form>
  );
};

export default CreateTodo;
