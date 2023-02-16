import "./App.css";
import Today from "./components/today/Today";

//example:

//location: Vienna
//temp: 7°C

function App() {
	return (
		<div className="App">
			<Today 
        location={'Vienna'}
        temp={28}
        icon={'https://media.giphy.com/media/o7R0zQ62m8Nk4/giphy.gif'}
        iconBelowZero={'https://media.giphy.com/media/l0NwI6LbXx4sWQCmk/giphy.gif'}
        iconHot={'https://media.giphy.com/media/5xtDarIN81U0KvlnzKo/giphy.gif'}
      />
		</div>
	);
}

export default App;
