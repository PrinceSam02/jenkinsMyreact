import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

import "./App.css";
 
function AddCustomer() {
  const [records, setRecords] = useState([]);
  const [data, setData] = useState([])
  const [inputData, setInputData] = useState({
    id:'-1',
    customername: '',
    address: '',
    email: '',
    product: {
      id:'',
      productname: '',
      category:"",
      description: '',
      price: '',
    }
  });
  useEffect(() => {
    loadData();
  }, []);
 
  const loadData = async() => {
    axios.get("http://localhost:1777/Product/getproductid")
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };
 
 
  
 
  let handleChange = (e) => {
    
      console.log(e.target.value);
      //setInputData({ ...inputData, product:{id: e.target.value }});
      // const selectedRecordId = e.target.value;
      
      axios
        .get(`http://localhost:1777/Product/`+e.target.value)
        .then((response) => {
          setInputData(prevstate => ({
            ...prevstate,product :{
              ...prevstate.product,...response.data,
            }
          }))
 
        })

  }
 
  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    // setSubmitting(true);
 
 
 
    if (result === true) {
      console.log(inputData);
      axios
        .post("http://localhost:1777/Customer", inputData)
        .then((res) => {
          alert("Data added Successfully");
          window.location.href="/ViewCustomer";
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };
 
  // validation Part for add user for student management system
  // const [errors, setErrors] = useState({});
  // const [submitting, setSubmitting] = useState(false);
 
  const validateValues = (inputData) => {
    if (inputData.customername.length === 0) {
      alert("Please enter the Customer name !!! ");
      return false;
    } else if (inputData.address.length === 0) {
      alert("Please enter the location !!! ");
      return false;
    } else if (inputData.email.length === 0) {
      alert("Please enter mail Id !!!");
      return false;
    } else {
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
          <h2 id="align" role="heading">ADD CUSTOMER DATA</h2>
          <div>
            <lable htmlFor="customername" role="name">Customer Name</lable>
            <input
              type="text"
              name="customername"
              className="form-control"
              placeholder="Enter Customer Name"
              onChange={(e) =>
                setInputData({ ...inputData, customername: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="address" role="address">Address :</lable>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Enter Location"
              onChange={(e) =>
                setInputData({ ...inputData, address: e.target.value })
              }
            />
          </div>
 
 
          <div>
            <label htmlFor="email" role="email">Mail ID :</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
 

          <br />
          <div>
            <label htmlFor="id">Select Product Record:</label>
 
            <select
              class="form-select select"
              required="required"
              role="id"
              title="Select ID "
              onChange={handleChange}
            >
              <option name="id" selected="selected" role="select">
                Select One  
              </option>
              {records.map((items) => (
                <option value={items} key={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
          <br />
          <center><button className="btn btn-primary" role="submitbutton">Submit</button></center>
        </form>
      </div>
    </div>
  );
}
 
export default AddCustomer;