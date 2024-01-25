import { Navigate } from 'react-router-dom';

const Guard = ({ children }) => {
    const auth = localStorage.getItem('auth');

    if (auth) return children;
    return <Navigate to='/login' />;
}

export default Guard;
