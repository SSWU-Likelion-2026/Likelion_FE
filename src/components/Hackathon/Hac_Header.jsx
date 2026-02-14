import React, { useEffect, useState } from 'react'
import useWindowSize from '../Section/useWindowSize'
import { useParams } from 'react-router-dom'


const Hac_Header = ({ setNow, onRoundChange, onKindChange, setTh }) => {

    const params = useParams()
    const [click, setClick] = useState('13TH')
    const [activeMonth, setActiveMonth] = useState('Feb')
    const [human, setHuman] = useState('LEADER')
    const [title, setTitle] = useState('Hackathon')

    const rounds = [ '14TH', '13TH']

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const kind = ['LEADER','PM/DE', 'FE', 'BE']
    const { width } = useWindowSize()

    useEffect(() => {
        if (params.kind) {
            setTitle(params.kind)
        }
    }, [params])

    useEffect(() => {
        if (params.kind === 'Active') {
            setNow?.(activeMonth) 
        }
    }, [activeMonth, params.kind, setNow])

    const handleRoundClick = (round) => {
        setClick(round);
        if (setTh){
            setTh(round);
        }
    };

    return (
        <div className="header">
            {width > 393 ? <h1>{title}</h1> : <></>}

            <div className="tab_box">
                {rounds.map((round) => (
                    <button
                        key={round}
                        onClick={() => {handleRoundClick(round)
                            setClick(round)
                            onRoundChange?.(round) 
                        }}
                        className={click === round ? 'click' : ''}
                    >
                        {round}
                    </button>
                ))}
            </div>

            <div className={`month ${params.kind === 'Active' ? '' : 'none'}`}>
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

            <div className={`month retros ${params.kind === 'Retrospection' ? '' : 'none'}`}>
                {kind.map((k) => (
                    <button
                        key={k}
                        onClick={() => {
                            setHuman(k)
                            onKindChange?.(k) 
                        }}
                        className={human === k ? 'click' : ''}
                    >
                        {k}
                    </button>
                ))}
            </div>

            {width < 393 ? <h1>{title}</h1> : <></>}
        </div>
    )
}

export default Hac_Header