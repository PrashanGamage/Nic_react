import "./list.scss"
// import Sidebar from "../../layout/sidebar/Sidebar"
// import Navbar from "../../layout/navbar/Navbar"
import Datatable from "../../Pages/Datatable";

const List = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        {/* <Navbar/> */}
        <Datatable/>
      </div>
    </div>
  )
}

export default List