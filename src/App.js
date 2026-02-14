import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Hackathon from './components/Hackathon/Hackathon'
import Recruit from './components/Recruit/Recruit'
import People from '../src/pages/people/people'
import Result from './components/Result/result'
import Nav from './components/Section/Nav'
import Footer from './components/Section/Footer'
import useWindowSize from './components/Section/useWindowSize'
import Hac_Detail from './components/Hackathon/Hac_Detail'
import Retrospection from './components/Retrospection/Retrospection'
import Active from './components/Hackathon/Active'
import RecruitInfo from './components/Recruit/RecruitInfo'
import RecruitApplication from './components/Recruit/RecruitApplication'
import RecruitCard from './components/Recruit/RecruitCard'

const App = () => {
    const { width } = useWindowSize();
    const [thisW, setDistW] = useState(width);

    useEffect(() => {
        setDistW(width)
    }, [width])

    return (
        <BrowserRouter>
            <Nav thisW={thisW} />
            <Routes>
                <Route path='/' element={<Home thisW={thisW} />} />
                <Route path='/hackathon' element={<Hackathon />} />
                <Route path='/hackathon/:detail' element={<Hac_Detail />} />
                <Route path='/active/:kind' element={<Active />} />
                <Route path='/retrospection/:kind' element={<Retrospection />} />
                <Route path='/recruit' element={<Recruit />} />
                <Route path='/people' element={<People />} />
                <Route path='/result' element={<Result />} />
                <Route path='/apply' element={<RecruitInfo />} />
                <Route path='/cardnews' element={<RecruitCard />} />
                <Route path='/application' element={<RecruitApplication />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App