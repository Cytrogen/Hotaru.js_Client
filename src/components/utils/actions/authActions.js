import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");
export default socket;

/**
 * Register a new user.
 * @param userData
 * @param navigate
 * @returns {(function(*): void)|*}
 */
export const registerUser = (userData, navigate) => dispatch => {
    // Emit the register event to the server with the user data.
    socket.emit('register', userData);

    // Listen for the newRegisteredUser event from the server.
    socket.on('newRegisteredUser', (data) => {
        // If the registration was successful, redirect the user to the login page.
        if (data.status === 200)
            navigate('/login');
    });
};

/**
 * Login a user.
 * @param userData
 * @returns {(function(*): void)|*}
 */
export const loginUser = userData => dispatch => {
    // Emit the login event to the server with the user data.
    socket.emit('login', userData);

    socket.on('loggedInUser', (data) => {
        // console.log('data: ', data);
        if (data.status === 200) {
            const { token } = data;
            localStorage.setItem('jwtToken', token);
            dispatch(setCurrentUser(token));
            // console.log('token: ', token);
        }
    });
};

/**
 * Set the current user.
 * @param token
 * @returns {{payload, type: string}}
 */
export const setCurrentUser = token => {
    return {
        type: 'SET_CURRENT_USER',
        payload: token
    };
};

/**
 * Logout a user.
 * @returns {(function(*): void)|*}
 */
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch(setCurrentUser({}));
};
