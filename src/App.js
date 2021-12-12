
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './component/Nav'
import ChartA from './component/ChartA'
import ChartB from "./component/ChartB"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes className="md:flex">
          <Route exact path="/" element={<ChartA />} />
          <Route path="/chartb" element={<ChartB />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
