// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Rejester from './components/Rejester';
import {Routes,Route} from 'react-router-dom';
// import EmpSearch from './components/EmpSearch';
import Footer from './components/Footer';
import Header from './components/Header';
import ManageUsers from './components/ManageUsers';
import DisplayEmp from './components/DisplayEmp';



function App() {
  return (
    <div className="App">
    <div>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/rejester" element={<Rejester />} />
        <Route path="/ManageUsers" element={<ManageUsers/>} />
        <Route path="/display" element={<DisplayEmp />} />
      </Routes>
      <Footer/>
    </div>
      
    </div>
  );
}

export default App;
