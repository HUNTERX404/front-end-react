import React, { useRef, useState } from "react";
import { Link, Outlet } from "react-router";
import { movies } from "../../../data";
import Button from "../../ui/button";
function MoviePage() {
  const [data, setData] = useState(movies);
  const [loading, seLoading] = useState(false);
  const ref = useRef("");
  return (
    <>
      <div className="p-8">
        <p className="text-center text-xl">movies</p>
        <div>
          <div className="my-5 flex justify-center gap-4">
            <input
              type="text"
              placeholder="search"
              ref={ref}
              // onChange={}
              className="mt-1 w-5/12 rounded-md border-gray-200 p-2 shadow-sm sm:text-sm"
            />
            <Button
              onClick={async () => {
                await setTimeout(() => {
                  seLoading(true);
                }, 2000);
                setData((prev) =>
                  movies.filter((movie) => {
                    return movie.name.includes(ref.current.value);
                  }),
                );
                seLoading(false);
              }}
              content={"search"}
              loading={loading}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {data.map((movie, index) => (
            <div
              className="flex flex-col gap-4 rounded bg-gray-200"
              key={index}
            >
              <img className="w-full object-cover" src={movie.image} />
              <p>{movie.name}</p>
              <Link
                className="bg-red-800 px-4 py-1 text-white"
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
