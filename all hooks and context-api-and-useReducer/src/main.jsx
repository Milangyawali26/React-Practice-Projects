import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// import App2 from "./App2/App2";
// import App3 from "./useReducer-useContext-together/App3";
import App4 from "./fetchingDataUseReducer.dart/App4";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Context>
//         <App1 />
//       </Context>
//     </BrowserRouter>
//   </StrictMode>
// );


// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App2 />
//   </StrictMode>
// );


// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App3 />
//   </StrictMode>
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App4 />
  </StrictMode>
);

