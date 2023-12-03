// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
