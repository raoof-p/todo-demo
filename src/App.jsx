
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar"
import { Todos } from "./pages/Todos/Todos";
import { Posts } from "./pages/Posts/Posts";


export default function App() {
  return (
   
<>
      
    <NavBar />

      <Routes>
          
        <Route path="/" element={<Todos/>}></Route>
          <Route path="/Posts" element={<Posts/>}></Route>

      </Routes>
</>
    
  );
}

