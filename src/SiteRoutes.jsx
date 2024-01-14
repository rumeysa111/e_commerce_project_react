import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { Category, Product, Products, ProductLayout } from "./products";
import Login from "./pages/Login";
import Fav from "./pages/Fav";
import PrivateRoute from "./PrivateRoute";
import Sepet from "./pages/sepet";

function SiteRoutes({ handleLogin, user }) {
  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/about" element={<About />} />
     
      <Route path="/products" element={<ProductLayout />}>
        <Route index={true} element={<Products user={user}/>} />
        <Route path="category/:categoryName" element={<Category user={user}/>} />
        <Route path="product/:productId" element={<Product user={user} />} />
      </Route>
      <Route
        path="/login"
        element={<Login handleLogin={handleLogin} />}
      ></Route>
      <Route
        path="/fav"
        element={
          <PrivateRoute user={user}>
            <Fav user ={user} />
          </PrivateRoute>
        }
      ></Route>

      <Route path="*" element={<PageNotFound />} />
      <Route path="/sepet" element={<Sepet/>} />
    </Routes>
  );
}

export default SiteRoutes;