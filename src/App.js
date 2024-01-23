import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Register from './components/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import socket from './components/redux_components/actions/authActions';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login socket={socket} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
