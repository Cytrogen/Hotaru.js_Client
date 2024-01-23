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
    socket.emit('register', userData);
    navigate('/login');
};

/**
 * Login a user.
 * @param userData
 * @returns {(function(*): void)|*}
 */
export const loginUser = userData => dispatch => {
    socket.emit('login', userData);

    socket.on('login', (data) => {
        if (data.status === 200) {
            const { token } = data;
            localStorage.setItem('jwtToken', token);
            dispatch(setCurrentUser(token));
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
