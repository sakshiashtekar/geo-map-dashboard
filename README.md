#Geo Data Dashboard:
A React-based Geo Data Dashboard that visualizes spatial and tabular project data using a data table and an interactive map. This project demonstrates handling large datasets, synchronizing UI components, and maintaining clean separation between UI and data logic.

#Tech Stack:
1. React (Vite) - For simpler setup.
2. Material UI (MUI DataGrid) – Material UI DataGrid for built-in pagination and sorting to handle large datasets.
3. Leaflet (react-leaflet) – Leaflet for lightweight and easy map integration with React.
4. JavaScript 
5. Local JSON file as mock API

#Project Structure:
src/
  components/             -> UI components
    DataTable.jsx
    MapView.jsx
  hooks/                  -> local state 
    useGeoData.js
  services/               -> API fetching 
    api.js
  App.jsx
  index.css
  main.jsx
public/
  data.json               -> sample local data


#Features:
1. Data Table:
Displays:
    Project Name,
    Latitude,
    Longitude,
    Status,
    Last Updated
Supports: Client-side pagination, Sorting, Client-side filtering (search by project name)

2. Map Integration:
    1.Uses Leaflet map
    2.Plots markers using latitude and longitude
    3.Clicking a table row highlights the corresponding marker
    4.Clicking a marker highlights the corresponding table row
    5.Map only displays markers for the currently visible table page to avoid clutter

3. State Management:
    1.Uses only React local state (useState, useEffect, useMemo)
    2.No Redux or external state libraries

#Performance Strategy:
1. MUI DataGrid virtualization handles large datasets efficiently
2. Pagination limits visible rows at a time
3. Map only renders markers for the current page
4. Client-side filtering using useMemo
5. This allows smooth performance even with 5000 records.

#Map & Table Synchronization:
1. Selecting a row updates the highlighted marker
2. Selecting a marker updates the highlighted row
3. Pagination updates both table and map simultaneously
4. Selection resets when page changes to avoid stale markers

#Mock API:
Data is fetched from a local JSON file: /public/data.json

#How to Run
npm install
npm run dev
Open in browser: http://localhost:5173

#Time Spent:
Approximate time spent: 7-8 hours
    ->Project setup & data preparation: 0.5 hrs
    ->Table & map integration: 3 hrs
    ->Pagination & synchronization logic: 3 hrs
    ->Debugging: 1hr
