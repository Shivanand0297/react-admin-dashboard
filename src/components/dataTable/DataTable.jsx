import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumn, userRows } from "./dataTableSource";

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: ()=>{
      return(
        <div className="cellAction" >
          <button className="viewButton" >View</button>
          <button className="deleteButton" >Delete</button>
        </div>
      )
    }
  }
]


const DataTable = () => {
  return (
    <div className="datatable">
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
