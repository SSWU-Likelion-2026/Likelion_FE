import React from 'react'
import Thum from '../../assets/img/hackathon/thumbnail.png'
import Detail from '../../assets/img/hackathon/btn_detail.svg'
import { Link, useNavigate } from 'react-router-dom'
import Hac_Header from './Hac_Header'
import useWindowSize from '../Section/useWindowSize'

const Hackathon = () => {
    const { width } = useWindowSize();
    const navigation = useNavigate()
    const sections = [
        { title: '아이디어톤', count: 7 },
        { title: '여기톤', count: 6 },
        { title: '중앙톤', count: 6 },
    ]

    const onDetail = (a) => {
        navigation(`/hackathon/${a}`)
    }

    return (
        <div className={`Hackathon_wrap ${width > 1000 ? 'container_w' : 'container_m'}`}>
            <Hac_Header />
            <div className="main">
                {sections.map((section, i) => (
                    <div className="content_box" key={i}>
                        <h2>{section.title}</h2>
                        <div className="content_list">
                            {Array.from({ length: section.count }).map((_, j) => (
                                <div className="content" key={j}>
                                    <img src={Thum} alt="" onClick={() => { onDetail(j) }} />
                                    <div>
                                        <p className='title'>서비스명</p>
                                        {width < 1000 ? (
                                            <>
                                                <p>서비스 설명</p>
                                                <p>참여자</p>
                                            </>
                                        ) : (
                                            <Link to='/hackathon/01'><img src={Detail} alt="" /></Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hackathon
