import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };

        case "ADD_NAME":
          return {...state,
            names:[...state.names,action.payload],
            name:"",
          };
      }
    },
    {
      names: [],
      name: "",
    }
  );

  return (
    <div className="flex flex-col gap-3 text-2xl justify-center items-center align-middle">
    
    <div className=" flex ">
    <label
        htmlFor="name"
        className="flex items-center align-midde text-red-500 text-4xl mr-2"
      >
        Name
    </label>
      <input
        type="text"
        name={name}
        value={state.value}
        placeholder="Enter Name"
        onChange={e=> dispatch({type:"SET_NAME",payload:e.target.value})}
        className=" border-2 p-3 "
      ></input>
    </div>

        <div>
          <button
          className="border rounded-lg p-4 text-xl hover:cursor-pointer bg-amber-200 hover:bg-amber-400 transition-all duration-200"
          onClick={()=>{
            dispatch({type:"ADD_NAME",})
          }}
          >

            Add Name
          </button>
        </div>
    </div>
  );
}

export default App;
