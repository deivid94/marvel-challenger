import React, {useEffect}from "react";
import ApiConfig from "./ApiConfig";

function  GetComicsApi (){

    useEffect(() => {
        ApiConfig.get("comics")
        .then(response => (response.data.data.results)).catch(err=> console.log(err))
      }, []);

    
}

export default GetComicsApi


