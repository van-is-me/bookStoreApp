import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./product/Product";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
