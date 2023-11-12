const Main = () => {
  return (
    <div className="bg-red-100 min-h-screen">
      <main className="max-w-screen-md min-h-screen bg-yellow-100 mx-auto">
        <h1 className="bg-blue-100 py-12 text-center text-4xl font-bold">
          To do list
        </h1>
        <form
          className="bg-purple-100 w-96 mx-auto mt-12 flex"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="w-3/4 mr-4 rounded-md p-2 focus:outline-none border-2 focus:border-blue-300"
            type="text"
          />
          <input
            className="w-1/4 bg-blue-400 hover:bg-blue-600 active:bg-blue-400 text-white font-semibold rounded-md"
            type="submit"
            value="생 성"
          />
        </form>
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
