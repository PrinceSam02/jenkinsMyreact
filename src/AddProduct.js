import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [inputData, setInputData] = useState({
    // id:"-1",
    productname: "",
    category:"",
    description:"",
    price: "",
  });
  
  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    
    

    if (result === true) {
      axios
        .post("http://localhost:1777/Product", inputData)
        .then((res) => {
          console.log(inputData);
          alert("Data added Successfully");
          naviget("/viewproduct");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };

  

  const validateValues = (inputData) => {
    if (inputData.productname.length === 0) {
      alert("Please enter  Value!!! ");
      return false;
    } else if (inputData.category.length === 0) {
      alert("Please enter  Value!!!");
      return false;
    } else if (inputData.description.length === 0) {
        alert("Please enter  Value!!!");
        return false;
    } else if (inputData.price.length === 0) {
      alert("Please enter  Value !!!");
      return false;
    }
    
    else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h2 id="align" role="heading">Add Product's Data</h2>
          <div>
            <lable htmlFor="productname" role="name">Product Name :</lable>
            <input
              type="text"
              name="productname"
              className="form-control"
              placeholder="Enter  VALUE"
              onChange={(e) =>
                setInputData({ ...inputData, productname: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="category" role="cate">Category :</lable>
            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="Enter "
              onChange={(e) =>
                setInputData({ ...inputData, category: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="description" role="desc">Description :</lable>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Enter description"
              onChange={(e) =>
                setInputData({ ...inputData, description: e.target.value })
              }
            />
          </div>
         

          <div>
            <lable htmlFor="price" role="pri">Price :</lable>
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="Enter price"
              onChange={(e) =>
                setInputData({ ...inputData, price: e.target.value })
              }
            />
          </div>

          <br />

          <button id="value" className="btn btn-info " role="submitbutton">Submit</button>
        </form>


        
      </div>
    </div>
  );
}

export default AddProduct;
