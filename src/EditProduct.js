import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "./Home.css";

function EditProduct() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:1777/Product/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:1777/Product", data).then((res) => {
      alert("Products Updated Successfully");
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
            <h2 id="align" role="heading">Update Product's Data</h2>
            <div>
              <lable htmlFor="id">ID :</lable>
              <input
                type="text"
                disabled
                name="id"
                className="form-control"
                value={data.id}
                // onChange={(e) => setData({ ...data, id: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="productname" role="name">Product name :</lable>
              <input
                type="text"
                name="productname"
                className="form-control"
                value={data.productname}
                onChange={(e) => setData({ ...data, productname: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="category" role="cate">Category :</lable>
              <input
                type="text"
                name="category"
                className="form-control"
                value={data.category}
                onChange={(e) => setData({ ...data,category: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="description" role="desc">Description :</lable>
              <input
                type="text"
                name="description"
                className="form-control"
                value={data.description}
                onChange={(e) => setData({ ...data,description: e.target.value })}
              />
            </div>
            

           
            <div>
              <lable htmlFor="price" role="pri">Price :</lable>
              <input
                type="text"
                name="price"
                className="form-control"
                value={data.price}
                onChange={(e) => setData({ ...data,price: e.target.value })}
              />
            </div>

            <button id="value" className="btn btn-info " role="submitbutton">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
