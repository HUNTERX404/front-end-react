import React, { useRef, useState } from "react";
import { Link, Outlet } from "react-router";
import { movies } from "../../../data";
function MoviePage() {
  const [data, setData] = useState(movies);
  const ref = useRef("");
  return (
    <>
      <div className="p-8">
        <p className="text-center text-xl">movies</p>
        <div>
          <div className="flex justify-center gap-4 my-5">
            <input
              type="text"
              placeholder="search"
              ref={ref}
              // onChange={}
              className="mt-1 w-5/12 p-2 rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
            <button
              onClick={() => {
                setData((prev) =>
                  movies.filter((movie) => {
                    return movie.name.includes(ref.current.value);
                  })
                );
              }}
              className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            >
              search
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {data.map((movie, index) => (
            <div
              className="bg-gray-200 rounded flex flex-col gap-4 "
              key={index}
            >
              <img className="w-full object-cover" src={movie.image} />
              <p>{movie.name}</p>
              <Link
                className="bg-red-800 text-white px-4 py-1"
                to={`/movies/${movie.id}`}
              >
                show details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MoviePage;
