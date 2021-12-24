import axios from "axios"

export async function GetUserStatus() {
  const { data } = await axios.get("http://localhost:3000/status");
  return data;
}