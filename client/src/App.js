import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element= {<Home />}></Route>
        <Route path="/detail/:id" element={<CountryDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
