import React from 'react'
import Hac_Header from './Hac_Header'
import ThumBig from '../../assets/img/hackathon/thumbnail_big.png'
import useWindowSize from '../Section/useWindowSize'

const Hac_Detail = () => {
    const { width } = useWindowSize();
    const textSections = [
        [
            { label: '서비스명', value: 'Oh-rang' },
            { label: '서비스 소개', value: 'Oh-rang' }
        ],
        [
            { label: '팀명', value: 'Oh-rang' },
            { label: '팀원', value: 'Oh-rang' }
        ],
        [
            { label: '프론트 스택', value: 'Oh-rang' },
            { label: '백 스택', value: 'Oh-rang' },
            { label: '깃ㅎ', value: 'Oh-rang' }
        ]
    ];

    return (
        <div className={`Hac_Detail_wrap Hackathon_wrap ${width > 1000 ? 'container_w' : 'container_m'}`}>
            <Hac_Header />
            {width > 1000 ? (
                <div className="main">
                    <img src={ThumBig} alt="" />
                    <div className="text_box">
                        <h2>서비스명</h2>
                        <p>서비스 소개</p>
                        <div className="info">
                            <p>PM:</p>
                            <p>DE:</p>
                            <p>FE:</p>
                            <p>BE:</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="main_m">
                    <h2>Oh-rang</h2>
                    <div className="detail">
                        <img src={ThumBig} alt="" />
                        {textSections.map((section, i) => (
                            <div className="text_box" key={i}>
                                {section.map((item, j) => (
                                    <div className="text" key={j}>
                                        <p className="left">{item.label}</p>
                                        <p>{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hac_Detail