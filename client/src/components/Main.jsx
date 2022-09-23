import { Routes, Route } from "react-router-dom";

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
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default Main