import axios from "axios"

export async function GetUserStatus() {
  const { data } = await axios.get("https://txzje-backend.herokuapp.com/txzje");
  return data;
}