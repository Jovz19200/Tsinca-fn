const HomePage = require('../pages/landing')
const SmoothScroll = require('../utils/smoothScroll')
const { Route, Routes } = require('react-router-dom');
// const { useEffect } = require('react');


const AppRoutes = () =>{
    return(
        <SmoothScroll>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </SmoothScroll>

    )
}

module.exports = AppRoutes;