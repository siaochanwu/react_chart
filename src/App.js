
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './component/Nav'
import ChartA from './component/ChartA'
import ChartB from "./component/ChartB"

function App() {

  const data = [{ label: 'Apples', value: 10 }, { label: 'Oranges', value: 20 }, { label: 'papaya', value: 40 }, { label: 'Lemon', value: 35}];
  const outerRadius = 0
  const innerRadius = 200

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes className="md:flex">
          <Route exact path="/" element={<ChartA />} />
          <Route path="/chartb" element={<ChartB data={data} outerRadius={outerRadius} innerRadius={innerRadius} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
