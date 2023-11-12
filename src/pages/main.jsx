import { useEffect, useState } from "react";
import CreateTodo from "../component/CreateTodo";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  const getTodos = () => {
    const localTodos = localStorage.getItem("todos");

    if (!localTodos) return;

    const parsedTodos = JSON.parse(localTodos);

    setTodos(parsedTodos);
    setLastTodoId(parsedTodos[parsedTodos.length - 1].id);
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => console.log(todos), [todos]);
  useEffect(() => console.log(lastTodoId), [lastTodoId]);

  return (
    <div className="bg-red-100 min-h-screen">
      <main className="max-w-screen-md min-h-screen bg-yellow-100 mx-auto">
        <h1 className="bg-blue-100 py-12 text-center text-4xl font-bold">
          To do list
        </h1>
        <CreateTodo
          todos={todos}
          setTodos={setTodos}
          getTodos={getTodos}
          lastTodoId={lastTodoId}
        />
        <ul className="bg-purple-100 w-96 mx-auto h-[30rem] mt-12">
          <li className="bg-green-100 h-12 flex items-center text-xl">
            <span className="w-1/12 text-right bg-red-100">1</span>
            <span className="w-8/12 pl-2 bg-blue-100">🧹 청소하기</span>
            <button className="w-3/12 bg-yellow-100 hover:font-bold">
              Detail
            </button>
          </li>
          <li className="bg-green-100 h-12 flex items-center text-xl">
            <span className="w-1/12 text-right bg-red-100">1</span>
            <span className="w-8/12 pl-2 bg-blue-100">🧹 청소하기</span>
            <button className="w-3/12 bg-yellow-100 hover:font-bold">
              Detail
            </button>
          </li>
          <li className="bg-green-100 h-12 flex items-center text-xl">
            <span className="w-1/12 text-right bg-red-100">1</span>
            <span className="w-8/12 pl-2 bg-blue-100">🧹 청소하기</span>
            <button className="w-3/12 bg-yellow-100 hover:font-bold">
              Detail
            </button>
          </li>
        </ul>
        <ul className="bg-red-100 w-96 mx-auto flex justify-center gap-2">
          <li className="hover:font-bold cursor-pointer">1</li>
          <li className="hover:font-bold cursor-pointer">2</li>
          <li className="hover:font-bold cursor-pointer">3</li>
        </ul>
      </main>
    </div>
  );
};
export default Main;
