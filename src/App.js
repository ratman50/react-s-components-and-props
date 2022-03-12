import	Search from "./Search.jsx";
import { useState } from "react";
import { Container } from "./Container.jsx";
// import searchMovies from "./controller/handleFetch";


const App = () => {
    // let movie;
    let [searchVal, setSearchVal]=useState("");
    function searchValues(value) {
      // searchMovies(value,setSearchVal)
      setSearchVal(value);
    }
   
  return (
    <div className="app">
      <Search handleChange={searchValues}></Search>
      <Container values={searchVal}/>
    </div>
    )
}
export default App;