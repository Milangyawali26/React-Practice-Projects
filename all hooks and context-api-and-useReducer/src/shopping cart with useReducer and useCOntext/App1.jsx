import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import CartPage from "./Pages/CartPage";

function App1() {
  return (
    <>
      <Header   />
      <div>
        <Routes>
          <Route path="/" exact element={<Home  />}></Route>
          <Route path="/cart" exact element={<CartPage />}></Route>
          <Route path="*" element={<PageNotFound />} />  {/* 404 Page */}
        </Routes>
      </div>
    </>
  );
}

export default App1;
