import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Creatdeta from "./CreateData";
import Login from "./Login";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/createData" element={<Creatdeta/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;
