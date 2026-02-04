export const fetchGeoData = async () => {
  const res = await fetch("/data.json");
  return await res.json();
};
