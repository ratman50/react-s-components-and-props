// import SearchIcon from "./search.svg";
import { useState } from "react";

const Search=(props)=>{

   let  [searchTerm, setSearchTerm]=useState("");
//    let  [searchVal, setSearchVal]=useState("");
   
    return(

    <>
        <h1>MovieLand</h1>
        <div className="search">

            <input placeholder="search for movies"
            type={"search"}
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img
            src={""}
            alt="search"
            onClick={()=>{props.handleChange(searchTerm)}}
            />
        </div>
    </>
            )

}

export default Search;