import "./App.css";
import Person from "./Person";
import Counter from "./Counter";
const App = () => {
    // const isNameShowing=false;
  return (
    <div className="App">
        <h1>hello !</h1>
        <br></br>
        <Person name="Pape" last="NDIAYE" age={26}/>
        <br></br>
        <Counter/>
        {/* <br></br>
        <Person name="Moussa" last="DIOP" age={26}/>
        <br/>
        <Person name="Moustapha" last="FAll" age={18}/> */}

    </div>
  )
}
export default App;