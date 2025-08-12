import React, { useEffect, useState } from 'react'
import useWindowSize from '../Section/useWindowSize'
import { useParams } from 'react-router-dom'

const Hac_Header = () => {
    const params = useParams()
    const [click, setClick] = useState('13TH')
    const [activeMonth, setActiveMonth] = useState('Feb')
    const [human, setHuman] = useState('PM/DE')
    const [title, setTitle] = useState('Hackathon')
    const rounds = ['13TH', '12TH', '11TH', '10TH', '9TH']
    const months = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const kind = ['PM/DE', 'FE', 'BE']
    const { width } = useWindowSize();

    useEffect(()=>{
        if(params.kind){
            setTitle(params.kind)
        }
    },[params])

    return (
        <div className="header">
            {width > 393 ? (<h1>{title}</h1>) : (<></>)}
            <div className="tab_box">
                {rounds.map((round) => (
                    <button
                        key={round}
                        onClick={() => setClick(round)}
                        className={click === round ? 'click' : ''}
                    >
                        {round}
                    </button>
                ))}
            </div>
            <div className={`month ${params.kind === 'active' ? '' : 'none'}`}>
                {months.map((month) => (
                    <button
                        key={month}
                        onClick={() => setActiveMonth(month)}
                        className={activeMonth === month ? 'click' : ''}
                    >
                        {month}
                    </button>
                ))}
            </div>
            <div className={`month retros ${params.kind === 'retrospection' ? '' : 'none'}`}>
                {kind.map((kind) => (
                    <button
                        key={kind}
                        onClick={() => setHuman(kind)}
                        className={human === kind ? 'click' : ''}
                    >
                        {kind}
                    </button>
                ))}
            </div>
            {width < 393 ? (<h1>{title}</h1>) : (<></>)}
        </div>
    )
}

export default Hac_Header
