import React from 'react';
import HomePage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import Icerikler from './Icerikler';
import Rehber from './Rehber';
import Iletisim from './Iletisim';

const Container = () => {
    return (
        <main className="container">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/icerikler' element={<Icerikler />} />
                <Route path='/rehber' element={<Rehber />} />
                <Route path='/iletisim' element={<Iletisim />} />
            </Routes>
        </main>
    );
};

export default Container;
