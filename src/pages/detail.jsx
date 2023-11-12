import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const isDone = searchParams.get("is-done");

  useEffect(() => console.log(id), [id]);
  useEffect(() => console.log(title), [title]);
  useEffect(() => console.log(isDone), [isDone]);

  return (
    <main className="max-w-screen-md min-h-screen mx-auto bg-red-100 flex justify-center items-center text-2xl">
      Detail
    </main>
  );
};
export default Detail;
