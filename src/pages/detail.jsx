import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { FiCheck, FiTrash2 } from "react-icons/fi";

const Detail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const title = searchParams.get("title");
  const isDone = searchParams.get("is-done");

  const onClickIsDone = () => {
    const localTodos = localStorage.getItem("todos");

    if (!localTodos) return;

    const parsedTodos = JSON.parse(localTodos);

    const updatedTodos = parsedTodos.map((v) => {
      if (v.id == id) {
        return { id: v.id, title: v.title, isDone: !v.isDone };
      } else {
        return v;
      }
    });

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    navigate("/");
  };

  const onClickDel = () => {
    const localTodos = localStorage.getItem("todos");

    if (!localTodos) return;

    const parsedTodos = JSON.parse(localTodos);

    const deletedTodos = parsedTodos.filter((v) => {
      if (v.id !== +id) {
        return v;
      }
    });

    localStorage.setItem("todos", JSON.stringify(deletedTodos));

    navigate("/");
  };

  return (
    <main className="max-w-screen-md min-h-screen mx-auto bg-red-100 flex justify-center items-center text-2xl">
      <div className="flex items-center">
        <span>{id}</span>
        <span className="ml-4">{title}</span>
        <button
          onClick={onClickIsDone}
          className="ml-4 bg-green-400 hover:bg-green-600 active:bg-green-400 rounded-md px-2 h-10 flex justify-center items-center"
        >
          <FiCheck /> {isDone ? " 완료" : " 진행중"}
        </button>
        <button
          onClick={onClickDel}
          className="ml-4 bg-red-400 hover:bg-red-600 active:bg-red-400 rounded-md px-2 h-10 flex justify-center items-center"
        >
          <FiTrash2 /> 삭제
        </button>
      </div>
    </main>
  );
};
export default Detail;
