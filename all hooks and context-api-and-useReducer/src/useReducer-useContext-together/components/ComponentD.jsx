import React, { useContext } from "react";
import { CountContext } from "../App3";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div className="flex text-3xl flex-col gap-4 justify-center items-center align-middle">
      component D   { countContext.count}
      <button
        className=" border-2 rounded-sm p-5 hover:cursor-pointer bg-amber-200 "
        onClick={() => {
          countContext.dispatch("increment");
        }}
      >
        increment
      </button>
      <button
        className=" border-2 rounded-sm p-5 hover:cursor-pointer bg-amber-200 "
        onClick={() => {
          countContext.dispatch("decrement");
        }}
      >
        decrement
      </button>
      <button
        className=" border-2 rounded-sm p-5 hover:cursor-pointer bg-amber-200 "
        onClick={() => {
          countContext.dispatch("reset");
        }}
      >
        reset
      </button>

    </div>
  );
}

export default ComponentD;
