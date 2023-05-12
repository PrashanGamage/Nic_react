import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);


    //const {id} = useParams();

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/all");
        setUsers(result.data);
    };


    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/api/delete/${id}`)
        loadUsers()
    }

    return (
        <div className="container">
            <div className="py-5 ">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Nationality</th>
                            <th scope="col">Address</th>
                            <th scope="col">NIC</th>
                            {/* <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Birthday</th> */}
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.pno}</td>
                                <td>{user.nationality}</td>
                                <td>{user.address}</td>
                                <td>{user.nic}</td>
                                {/* <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.birthday}</td> */}
                                <td>
                                    <Link to={`/viewUser/${user.id}`} className="btn ">View</Link>
                                    <Link to={`/editUser/${user.id}`} className="btn  mx-2">Edit</Link>
                                    <button className="btn mx-2"
                                    onClick={()=>deleteUser(user.id)}
                                    >Delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
