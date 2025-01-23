import React, {useState, useEffect} from "react"
import axios from "axios";

const publicKey = "teste" ;
const privateKey = "teste1";
const timeStamp = (new Date())


function apiService (publicKey, privateKey, timeStamp){

useState(()=> {
    axios.get(`url${timeStamp}. ${publicKey},${privateKey}`)
}, [])

}

export { apiService }