import { Routes, Route, Navigate  } from "react-router-dom";

//Components
import Navbar from "./Navbar";

//Pages
import Login from "../pages/Login"
import NotFound from "../pages/NotFound";

const Main = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default Main