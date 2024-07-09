// import './App.css';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';

function App() {
    return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="Dashboard" element={<Dashboard/>} />
        </Routes>
    </Router>
    </>
);
}

    export default App;