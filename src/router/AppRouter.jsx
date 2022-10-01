import { Navigate, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="favorites" element={<Favorites />} />

            <Route path="*" element={<Navigate to='/' />} />

        </Routes>
    );
};
