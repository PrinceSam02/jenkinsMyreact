import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from './Home';
import AddCustomer from "./AddCustomer";
import ViewCustomer from "./ViewCustomer";
import EditCustomer from "./EditCustomer";
// import AddProduct from "./AddProduct";
// import ViewProduct from "./ViewProduct";
import EditProduct from "./EditProduct";
import "./App.css"
import LoginComponent from "./LoginComponent 2 1";
import RegisterComponent from "./RegisterComponent 2 1";
import ViewProduct from "./ViewProduct";
import AddProduct from "./AddProduct";

function Approuter() {
  return (
    
    <div class="nav111">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0" />
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Customer Details
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/viewcustomer">View Customer</a></li>
                    <li><a class="dropdown-item" href="/addcustomer">Add Customer</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Product Details
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/viewproduct">View Product</a></li>
                    <li><a class="dropdown-item" href="/addproduct">Add Product</a></li>
                    <li><a class="dropdown-item" href="/editProduct/:id">Update Product</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/LoginComponent 2 1">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/viewcustomer" element={<ViewCustomer />} />
          <Route path="/editcustomer/:id" element={<EditCustomer />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/viewproduct" element={<ViewProduct />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Approuter
