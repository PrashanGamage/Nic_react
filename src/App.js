import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./user/AddUser";
import Edituser from "./user/Edituser";
import ViewUser from "./user/ViewUser";
import "./layout/home/home.scss";
//import list from "./Pages/list/list";
import "./style/dark.scss";
import Sidebar from "./layout/sidebar/Sidebar";
import Navbar from "./layout/navbar/Navbar";
import { useContext } from "react";
import { DarkModeContext } from "./layout/context/darkModeContext";
import List from "./Pages/list/list";
//import charts from "./layout/charts/charts";
import Charts from "./layout/charts/charts";
import Data from "./Pages/data";



function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
   {/* <div className="App">*/}
      <Router>
      <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        {/*<Navbar1/>*/}
        <Navbar/>
        <Routes>
          <Route>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/add" element={<AddUser/>}/>
            <Route exact path="/edituser/:id" element={<Edituser/>}/>
            <Route exact path="/viewuser/:id" element={<ViewUser/>} />
            <Route exact path="/charts" element={<Charts/>} />
            <Route exact path="/search" element={<Data/>} />
            <Route path="/Dashboard">
              <Route index element={<List/>} />
              {/* <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              /> */}
            </Route>
          </Route>
        </Routes>
        </div>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
