import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [user, SetUser] = useState({
        name: "",
        pno: "",
        nationality: "",
        address: "",
        nic: "",
       
    
    });


    const [error, setError] = useState({
        name: "",
        pno: "",
        nationality: "",
        address: "",
        nic: "",
    });


    const { name, pno, nationality, address, nic } = user;

    const onInputChange = (e) => {
        SetUser({ ...user, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        loadUser();
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (validateFields()) {
        await axios.put(`http://localhost:8080/api/update/${id}`, user);
        navigate("/");
        }
    };




    const validateFields = () => {
        let isValid = true;
        let full_nameError = "";
        let mobileError = "";
        let nationalityError = "";
        let addressError= "";
        let nicError = "";

        // Mobile number validation
        const mobileRegex = /^(?:7|0|(?:\+94))[0-9]{9,10}$/;
        if (!mobileRegex.test(pno)) {
            isValid = false;
            mobileError = "Please Enter a Valid Mobile Number";
        }

        // NIC validation
        const nicRegex = /^([0-9]{9}[v|V]|[0-9]{12})$/;
        if (!nicRegex.test(nic)) {
            isValid = false;
            nicError = "Please Enter a Valid NIC Number";
        }

        // Name validation
        const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (!nameRegex.test(name)) {
            isValid = false;
            full_nameError = "Please Enter a Valid Name";
        }


        //Nationality validation
        if (nationality.length===0) {
            isValid = false;
            nationalityError = "Please Enter Nationality";
        }

        //Address validation
        if (address.length===0) {
            isValid = false;
            addressError = "Please Enter Address";
        }

        setError({ mobile: mobileError, nic: nicError, full_name: full_nameError ,nationality:nationalityError,address:addressError});
        return isValid;
    };







    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/find/${id}`)
        SetUser(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className=" col-md-6 offset-md-3 border rounded p-4 mt-5 ">
                    <h2 className="text-center m-4">Update User Details</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div class="mb-4 mt-5 text-start">
                            <label for="exampleFormControlInput1" class="form-label">
                                Enter Your Name :
                            </label>
                            <input
                                type={"text"}
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter Here Name"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                             {error.full_name && (
                                <div>{error.full_name}</div>
                            )}
                        </div>

                        <div class="mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label">
                                Enter Your Mobile Number :
                            </label>
                            <input
                                type={"text"}
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter Here Mobile Number"
                                name="pno"
                                value={pno}
                                onChange={(e) => onInputChange(e)}
                            />
                             {error.mobile && (
                                <div >{error.mobile}</div>
                            )}
                        </div>

                        <div class="mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label">
                                Enter Your Nationality :
                            </label>
                            <input
                                type={"text"}
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter Here Nationality"
                                name="nationality"
                                value={nationality}
                                onChange={(e) => onInputChange(e)}
                            />
                             {error.nationality && (
                                <div >{error.nationality}</div>
                            )}
                        </div>

                        <div class="mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label">
                                Enter Your Address :
                            </label>
                            <input
                                type={"text"}
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter Here Address"
                                name="address"
                                value={address}
                                onChange={(e) => onInputChange(e)}
                            />
                             {error.address && (
                                <div >{error.address}</div>
                            )}
                        </div>

                        <div class="mb-4 text-start">
                            <label for="exampleFormControlInput1" class="form-label">
                                Enter Your NIC :
                            </label>
                            <input
                                type={"text"}
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter Here NIC"
                                name="nic"
                                value={nic}
                                onChange={(e) => onInputChange(e)}
                            />
                             {error.nic && (
                                <div >{error.nic}</div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success px-4  mx-2"
                        >
                            Update
                        </button>
                        <Link to={"/"} className="btn btn-danger">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
