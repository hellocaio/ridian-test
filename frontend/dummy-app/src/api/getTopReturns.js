import axios from "@/utils/axios";

export default async function getTopReturns() {
  try {
    const response = await axios.get("/top_10");
    if (response.status === 200) return response.data?.top_10 || null;
    throw Error("Server returned unexpected response: ", response.status);
  } catch (error) {
    console.log("Failed to fetch top 10 returns.", error);
  }
}
