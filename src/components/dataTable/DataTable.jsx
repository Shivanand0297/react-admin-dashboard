import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumn, userRows } from "./dataTableSource";
import { Link } from "react-router-dom";

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: ()=>{
      return(
        <div className="cellAction" >
        <Link to="/users/test" className='link' >
          <button className="viewButton" >View</button>
        </Link>
          <button className="deleteButton" >Delete</button>
        </div>
      )
    }
  }
]


const DataTable = () => {
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <span>Current Users</span>
        <Link to="/users/new" className='link' >
          <button>Add New</button>
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumn.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
