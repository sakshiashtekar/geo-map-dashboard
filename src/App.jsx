import { useState, useMemo, useEffect } from "react";
import DataTable from "./components/DataTable";
import MapView from "./components/MapView";
import { useGeoData } from "./hooks/useGeoData";

export default function App() {
  const { rows, selectedId, setSelectedId } = useGeoData();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(100);

  const filteredRows = useMemo(() => {
    return rows.filter((r) =>
      r.projectName.toLowerCase().includes(search.toLowerCase())
    );
  }, [rows, search]);

  const paginatedRows = useMemo(() => {
    const start = page * pageSize;
    const end = start + pageSize;
    return filteredRows.slice(start, end);
  }, [filteredRows, page, pageSize]);

  // clear selection when page changes
  useEffect(() => {
    setSelectedId(null);
  }, [page]);

  return (
    <div style={{ height: "100vh" }}>
      <input
        placeholder="Search project..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "98.4%",
          padding: "10px",
          borderRadius: "12px",
          border: "1px solid #ccc",
          outline: "none",
          marginBottom: "8px",
        }}
      />

      <div style={{ display: "flex", height: "92%" }}>
        <div style={{ width: "55%" }}>
          <DataTable
            rows={filteredRows}
            selectedId={selectedId}
            onSelect={setSelectedId}
            page={page}
            setPage={setPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        </div>

        <div style={{ width: "45%" }}>
          <MapView
            key={page}              
            rows={paginatedRows}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>
      </div>
    </div>
  );
}
