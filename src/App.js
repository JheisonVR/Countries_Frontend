import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ActivitiesCreation from './components/activities/ActivitiesCreation';
import Layout from './components/layout/Layout';
import Navbar from './components/NavBar/Navbar';
import CountryDetail from './components/countryDetail/CountryDetail';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='activities' element={<ActivitiesCreation/>} />
        <Route path='/countries/:id' element={<CountryDetail/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App;
