import React, { useEffect } from "react"
import axios from "axios";
import md5 from "md5";


const baseUrl = import.meta.env.VITE_BASE_URL


const publicKey = import.meta.env.VITE_API_PUBLIC_KEY 
const privateKey = import.meta.env.VITE_API_PRIVATE_KEY   


const timeStamp = Number (new Date())
const hash = md5(timeStamp+privateKey+publicKey);


function  ApiService (){

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${baseUrl}ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);
            const data = response.data.data;  
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchData();
      }, []);
    
}

export default ApiService