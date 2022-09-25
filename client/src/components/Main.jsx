import { Routes, Route, Navigate  } from "react-router-dom";

//Components
import Navbar from "./Navbar";

//Pages
import Login from "../pages/Login";
import Facturacion from "../pages/Facturacion";
import NotFound from "../pages/NotFound";

const Main = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/facturacion" element={<Facturacion />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default Main