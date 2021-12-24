import axios from "axios"

export async function GetUserStatus() {
  const { data } = await axios.get("https://noobs-server-bot-help.herokuapp.com/status");
  return data;
}