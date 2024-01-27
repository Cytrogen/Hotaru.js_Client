import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateMessageHomepage from "./components/child_components/private_message_homepage/Private_Message_Homepage";
import PrivateMessageChatpage from "./components/child_components/private_message_chatpage/Private_Message_Chatpage";
import socket from "./components/utils/actions/authActions";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Navigate to="/channels/@me" replace /> } />
                <Route path="/channels/@me" element={ <Home /> }>
                    <Route path="" element={ <PrivateMessageHomepage style={{ flex: '1 1 auto' }} /> } />
                    <Route path="dummy" element={ <PrivateMessageChatpage style={{ flex: '1 1 auto' }} /> }/>
                </Route>

                <Route path="/login" element={ <Login socket={ socket } /> } />
                <Route path="/register" element={ <Register /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
