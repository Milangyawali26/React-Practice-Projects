import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import Navbar from "./components/navbar";
import NotFound from "./components/notfound";
import UserProfile from "./components/userProfile";
import SearchUser from "./components/searchUser";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/users" element={<Users />} />
        <Route  path="users/user/:username" element={<UserProfile/>} />
        <Route  element={<SearchUser/>} path='/search' />
      </Route> 
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
