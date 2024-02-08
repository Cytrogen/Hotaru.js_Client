import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

/**
 * Register a new user.
 * @param userData
 * @param navigate
 * @returns {(function(*): void)|*}
 */
const registerUser = (userData, navigate) => {
    // Emit the register event to the server with the user data.
    socket.emit("register", userData);

    // Listen for the newRegisteredUser event from the server.
    socket.on("newRegisteredUser", (data) => {
        // If the registration was successful, redirect the user to the login page.
        if (data.status === 200)
            navigate("/login");
    });
};

/**
 * Login a user.
 * @param userData
 * @param dispatch
 * @returns {(function(*): void)|*}
 */
const loginUser = (userData, dispatch) => {
    // Emit the login event to the server with the user data.
    socket.emit("login", userData);

    socket.on("loggedInUser", (data) => {
        // console.log("data: ", data);
        if (data.status === 200) {
            const { token } = data;
            localStorage.setItem("jwtToken", token);
            dispatch(setCurrentUser(token));
            // console.log("token: ", token);
        }
    });
};

/**
 * Set the current user.
 * @param token
 * @returns {{payload, type: string}}
 */
const setCurrentUser = token => {
    return {
        type: "SET_CURRENT_USER",
        payload: token
    };
};

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
