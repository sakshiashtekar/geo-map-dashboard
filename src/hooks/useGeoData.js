import { useEffect, useState } from "react";
import { fetchGeoData } from "../services/api";

export const useGeoData = () => {
  const [rows, setRows] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchGeoData().then((data) => setRows(data));
  }, []);

  return { rows, selectedId, setSelectedId };
};
