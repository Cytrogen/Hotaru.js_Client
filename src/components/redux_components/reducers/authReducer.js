const initialState = {
    isAuthenticated: false,
    user: {},
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };

        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};

export default authReducer;
