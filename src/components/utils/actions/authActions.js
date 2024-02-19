import socketIO from "socket.io-client";
import { createAction } from "@reduxjs/toolkit";

const socket = socketIO.connect("http://localhost:4000");

/**
 * Register a new user.
 * @param userData
 * @param navigate
 * @returns {(function(*): void)|*}
 */
const registerUser = (userData, navigate) => {
    return dispatch => {
        // Emit the register event to the server with the user data.
        socket.emit("register", userData);

        // Listen for the newRegisteredUser event from the server.
        socket.on("newRegisteredUser", data => {
            // If the registration was successful, redirect the user to the login page.
            data.status === "00000" ? navigate("/login") : console.log(data.message);
        });
    }
};

/**
 * Login a user.
 * @param userData
 * @param navigate
 * @returns {(function(*): void)|*}
 */
const loginUser = (userData, navigate) => {
    return dispatch => {
        // Emit the login event to the server with the user data.
        socket.emit("login", userData);

        socket.on("loggedInUser", (data) => {
            if (data.status === "00000") {
                const { token } = data;
                localStorage.setItem("jwtToken", token);
                dispatch(setCurrentUser(token));
                navigate("/channels/@me");
            } else {
                console.log(data.message);
            }
        });
    }
};

/**
 * Set the current user.
 * @param token
 * @returns {{payload, type: string}}
 */
const setCurrentUser = createAction("SET_CURRENT_USER", token => {
    return {
        payload: token
    }
});

/**
 * Logout a user.
 * @returns {(function(*): void)|*}
 */
const logoutUser = dispatch => {
    localStorage.removeItem("jwtToken");
    dispatch(setCurrentUser({}));
};

export default socket;
export { registerUser, loginUser, setCurrentUser, logoutUser };
