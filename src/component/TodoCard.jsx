const TodoCard = ({ todo }) => {
  return (
    <li className="bg-green-100 h-12 flex items-center text-xl">
      <span className="w-1/12 text-right bg-red-100">{todo.id}</span>
      <span className="w-8/12 pl-2 bg-blue-100">{todo.title}</span>
      <button className="w-3/12 bg-yellow-100 hover:font-bold">Detail</button>
    </li>
  );
};

export default TodoCard;
