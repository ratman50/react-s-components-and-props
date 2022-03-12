const API_KEY=`5426180c`;
const API_URL=`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}` ;


const searchMovies= async (title,fc)=>{
    const response= await fetch(`${API_URL}&s=${title}`); 
    const data= await response.json();
    console.log(data);
    fc(data.Search);
}

export default searchMovies;