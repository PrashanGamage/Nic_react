import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
   full_name: "",
    pno: "",
    nationality: "",
    address: "",
    nic: "",
    age:"",
    gender:"",
    birthday:"",
   }
  );

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/find/${id}`
    );
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-6 offset-md-3 border rounded p-4 mt-5">
          <h2 className="text-center m-4">View User Details</h2>
          <div className="card"> 
            <div className="card-header ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name :- </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Mobile number :- </b>
                  {user.pno}
                </li>
                <li className="list-group-item">
                  <b>Nationality :- </b>
                  {user.nationality}
                </li>
                <li className="list-group-item">
                  <b>Address :- </b>
                  {user.address}
                </li>
                <li className="list-group-item">
                  <b>NIC :- </b>
                  {user.nic}
                </li>
                <li className="list-group-item">
                  <b>Age :- </b>
                  {user.age}
                </li>
                <li className="list-group-item">
                  <b>Gender :- </b>
                  {user.gender}
                </li>
                <li className="list-group-item">
                  <b>Birthday :- </b>
                  {user.birthday}
                </li>
              </ul>
            </div>
          </div>
          <Link to={"/"} className="btn btn-warning px-3 mt-5">
            Back to Home
          </Link>
        </div>
       </div>
     </div>
  );
}
