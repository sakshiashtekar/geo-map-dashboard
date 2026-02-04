import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({
  rows,
  selectedId,
  onSelect,
  page,
  setPage,
  pageSize,
  setPageSize,
}) {
  const columns = [
    { field: "projectName", headerName: "Project Name", flex: 2, minWidth: 180 },
    { field: "latitude", headerName: "Latitude", width: 120 },
    { field: "longitude", headerName: "Longitude", width: 120 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "lastUpdated", headerName: "Last Updated", width: 150 },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pagination
      paginationModel={{ page, pageSize }}
      onPaginationModelChange={(model) => {
        setPage(model.page);
        setPageSize(model.pageSize);
      }}
      rowsPerPageOptions={[25, 50, 100]}
      onRowClick={(params) => onSelect(params.id)}
      getRowClassName={(params) =>
        params.id === selectedId ? "selected-row" : ""
      }
      disableRowSelectionOnClick
    />
  );
}
