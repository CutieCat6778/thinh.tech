import axios from "axios"

export async function GetUserStatus() {
  const { data } = await axios.get("https://backend-nestjs.vercel.app/txzje");
  return data;
}