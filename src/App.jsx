import { Route, Routes } from "react-router-dom";
import Header from "./component/header/header";
import Banner from "./component/banner/banner";
import Main from "./page/main/main";
import Users from "./page/users/users";
import Catalog from "./page/catalog/catalog";
import Product from "./page/product/product";
import Add from "./page/add/add";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:id" element={<Product />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
