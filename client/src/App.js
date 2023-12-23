// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Rejester from './components/Rejester';
import {Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ManageUsers from './components/ManageUsers';
import DisplayEmp from './components/displayEmp';
import MangeEmp from './components/MangeEmp';
import EmpEvaluation from './components/EmpEvaluation';
import ProtectedRoute from './components/ProtectedRoute'; // Adjust the path as necessary


function App() {
  return (
    <div className="App">
    <div>
    <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/rejester" element={<ProtectedRoute><Rejester /></ProtectedRoute>} />
        <Route path="/ManageUsers" element={<ProtectedRoute><ManageUsers/></ProtectedRoute>} />
        <Route path="/display" element={<ProtectedRoute><DisplayEmp /></ProtectedRoute>} />
        <Route path='/manageEmp/:empId' element={<ProtectedRoute><MangeEmp/></ProtectedRoute>}/>
        <Route path='/empEvaluation/:empId' element={<ProtectedRoute><EmpEvaluation/></ProtectedRoute>}/>
      </Routes>
      <Footer/>
    </div>
      
    </div>
  );
}

export default App;
