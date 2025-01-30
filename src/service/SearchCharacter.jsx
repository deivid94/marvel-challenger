import React, { useState } from "react";
import ApiConfig from "./ApiConfig";


function SearchCharacter (){

const [SearchCharacter, setSearchCharacter] = useState([])
ApiConfig.get("characters")

}

export default searchCharacter