import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dash' element={<Dashboard/>}/>
        </Routes>
      </Router>



    </div>
  );
}

export default App;
