import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";
import logo from './logo.png';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
       <img src={logo} width={20} height={20}/>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">NIC VV1</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/search" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </li>
          </Link>
          </li>

          <p className="title">LISTS</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/add" style={{ textDecoration: "none" }}>
            <li>
              <GroupAddIcon className="icon" />
              <span>Add User</span>
            </li>
          </Link>

         
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
