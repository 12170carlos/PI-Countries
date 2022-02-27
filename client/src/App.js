import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/SmartComponents/Home/Home';
import CountryDetail from './components/SmartComponents/CountryDetail/CountryDetail';
import AddActivity from './components/SmartComponents/AddActivity/AddActivity';
import "./index.css"


//import AddNewActivity  from './components/SmartComponents/Form/AddNewActivity';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element= {<Home />}></Route>
        <Route path="/countries" element= {<Home />}></Route>
        <Route path="/detail/:id" element={<CountryDetail />}></Route>
        <Route path="/createActivity" element={<AddActivity />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
