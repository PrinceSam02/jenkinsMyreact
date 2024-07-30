import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditCustomer() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:1777/Customer/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:1777/Customer", data).then((res) => {
      alert("Customer Updated Successfully");
      navigate("/");
    });
  };

  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h2 id="align" role="heading">Update Customer's Data</h2>
            <div>
              <lable htmlFor="id">ID :</lable>
              <input
                type="text"
                disabled
                name="id"
                className="form-control"
                value={data.id}
                />
            </div>

            <div>
              <lable htmlFor="customername" role="name">Customer Name :</lable>
              <input
                type="text"
                name="customername"
                className="form-control"
                value={data.customername}
                onChange={(e) => setData({ ...data, customername: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="address" role="address">Address :</lable>
              <input
                type="text"
                name="address"
                className="form-control"
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="email" role="email">email:</lable>
              <input
                type="text"
                name="email"
                className="form-control"
                value={data.email}
                onChange={(e) => setData({ ...data,email: e.target.value })}
              />
            </div>

            <button id="value" className="btn btn-info " value="Update" role="submitbutton">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCustomer;
