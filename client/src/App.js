// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
