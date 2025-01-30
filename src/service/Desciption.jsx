import React, { useState, useEffect } from "react";
import ApiConfig from "./ApiConfig";

function EditDescription (){
const [character, setCharacter] = useState([]);

useEffect(()=> {
    ApiConfig.get("characters")
    .then((response) => {
        const updateDescription = response.data.data.results
        .map(char)
    })
})

}

export default EditDescription