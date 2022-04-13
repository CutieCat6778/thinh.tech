import axios from "axios";
import { Status } from "../interfaces/api";

export async function GetStatus(): Promise<Status | null> {
    const { data } = await axios.get("https://txzje-backend.herokuapp.com/");
    if(data){
        return data;
    }else return null
}