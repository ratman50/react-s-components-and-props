import Movie from "./Movie.jsx"
import { useEffect, useState } from "react";
import searchMovies from "./controller/handleFetch.js";



export const Container = (props) => {
    const {values}=props;
    let [movies,setMovie]=useState();
    // let [searchVal, setSearchVal]=useState("");
    useEffect(()=>{
        searchMovies(values,setMovie);
    },[values]);
    const res= movies?.length > 0 ?  (
        <div className="container">  
        {
            movies.map((movie)=><Movie title={movie.Title} year={movie.Year} poster={movie.Poster} type={movie.Type} />)

        }
        </div>
        ): (
        <div className="empty">
            <h2>No movies found</h2>
        </div>
    )

  return res;
}
