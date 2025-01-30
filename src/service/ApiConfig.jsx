import axios from "axios";
import md5 from "md5";



const baseUrl = import.meta.env.VITE_BASE_URL
const publicKey = import.meta.env.VITE_API_PUBLIC_KEY 
const privateKey = import.meta.env.VITE_API_PRIVATE_KEY   


const timeStamp = Number (new Date())
const hash = md5(timeStamp+privateKey+publicKey);

const ApiConfig = axios.create({
    baseURL:baseUrl,
    params:{
       ts: timeStamp,
        apikey:publicKey,
        hash,
    }

})

export default ApiConfig