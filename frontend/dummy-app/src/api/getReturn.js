import axios from "@/utils/axios";

export default async function getReturn(symbol) {
  try {
    if (!symbol) return null;
    const response = await axios.get(`/return_${symbol}`);
    if (response.status === 200) return response.data.return || null;
    throw Error("Server returned unexpected response: ", response.status);
  } catch (error) {
    console.log("Failed to get return.", error);
  }
}
