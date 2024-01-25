import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Guard from './components/utils/Guard';
import socket from './components/utils/actions/authActions';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login socket={socket} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
