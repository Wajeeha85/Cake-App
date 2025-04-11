import axios from "axios";

const API_URL = "https://the-birthday-cake-db.p.rapidapi.com/";
const APII_URL = "https://the-birthday-cake-db.p.rapidapi.com/5";
const API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;

console.log("API Key:", API_KEY);
console.log("API URL:", API_URL);
console.log("APII URL:", APII_URL);

export async function fetchCakes() {
  if (!API_KEY) {
    console.error("API Key is missing!");
    return [];
  } 

  try {
    const response = await axios.get(API_URL, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "the-birthday-cake-db.p.rapidapi.com",
      },
    });

    console.log("API Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Error fetching cakes:", err.response?.data || err.message);
    return [];
  }
}

export async function getCakeReceipes() {
  if (!API_KEY) {
    console.error("API Key is missing!");
    return [];
  }

  try {
    const response = await axios.get(APII_URL, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "the-birthday-cake-db.p.rapidapi.com",
      },
    });

    console.log("API Response:", response.data);

    // Ensure it's always an array
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (err) {
    console.error("Error fetching recipes:", err.response?.data || err.message);
    return [];
  }
}
