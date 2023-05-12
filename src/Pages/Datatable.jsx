import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
//import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

//api set
const Datatable = () => {
  const [data, setData] = useState(userRows);

  useEffect(() => {
    loadUsers();
},[]);

const loadUsers = async () => {
  const result = await axios.get("http://localhost:8080/api/all");
  setData(result.data);

};
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
export const userColumns = [

  { field: "id", headerName: "ID", width: 60 },
  {
    field: "full_name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
        <img className="cellImg" src={"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="avatar" />
        {params.row.name}
      </div>
      );
    },
  },
  {
    field: "pno",
    headerName: "Mobile",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.pno}
        </div>
      );
    },
  
  },
  {
    field: "nationality",
    headerName: "Nationality",
    width: 130,
  },
  {
    field: "address",
    headerName: "Address",
    width: 130,
  },

  {
    field: "nic",
    headerName: "Nic",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    
      "id": "",
      "nic": "",
      "pno": "",
      "name": "",
      "nationality": "",
      // "birthday": null,
      // "gender": null,
      // "age": 0,
      "address": "",
  }];
export default Datatable;
