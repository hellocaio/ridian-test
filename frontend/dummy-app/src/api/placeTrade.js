import axios from "@/utils/axios";

export default async function placeTrade(symbol) {
  if (!symbol) return null;
  return await axios.post(`/place_trade/${symbol}`);
}
