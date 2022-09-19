import './App.css';
// import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./Header"
import Home from './Home';
function App() {
  return (
<div className="App">
<Header/>
<Home/>
</div>


    // <Router>
    // <div className="App">
    // <Routes>
    // <Route path="/" element={<Header/>}/>
    // <Route path="/Home" element={<Home/>}/>
    // </Routes>
    // </div>
    // </Router>
  );
}

export default App;
