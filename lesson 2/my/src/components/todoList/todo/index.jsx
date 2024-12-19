import React from "react";

function Todo({ title, state, changeHandler }) {
  return (
    <>
      {state === "pending" && (
        <div className="bg-orange-100 flex w-full justify-between items-center border border-orange-500 p-4 rounded">
          <p>{title}</p>
          <div className="flex gap-4">
            <button
              onClick={() => changeHandler("done")}
              className="bg-green-700 text-white rounded px-2 py-1"
            >
              done
            </button>
            <button
              onClick={() => changeHandler("close")}
              className="bg-red-700 text-white rounded px-2 py-1"
            >
              close
            </button>
          </div>
        </div>
      )}
      {state === "done" && (
        <div className="bg-green-100 flex w-full justify-between items-center border border-green-500 p-4 rounded">
          <p>{title}</p>
        </div>
      )}
      {state === "close" && (
        <div className="bg-red-100 flex w-full justify-between items-center border border-red-500 p-4 rounded">
          <p>{title}</p>
        </div>
      )}
    </>
  );
}

export default Todo;
