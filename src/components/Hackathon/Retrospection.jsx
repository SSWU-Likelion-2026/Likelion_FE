import React from 'react'
import ThumBig from '../../assets/img/hackathon/thumbnail_big.png'
import Hac_Header from './Hac_Header'
import useWindowSize from '../Section/useWindowSize'

const Retrospection = () => {
    const { width } = useWindowSize();

    return (
        <div className={`Retorspection_wrap Active_wrap Hac_Detail_wrap Hackathon_wrap ${width > 1000 ? 'container_w' : 'container_m'}`}>
            <Hac_Header />
            {width > 1000 ? (
                <div className="main">
                    <img src={ThumBig} alt="" />
                    <div className="text_box">
                        <h2>이름</h2>
                        <p>직책</p>
                        <div className="info">
                            <p>회고 내용</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="main_m">
                    <h2>13기 기획/디자인 회고</h2>
                    <div>
                        <img src={ThumBig} alt="" />
                        <div>
                            <h2>13기 회고</h2>
                            <p>회고 내용</p>
                        </div>
                        <div>
                            <h2>13기 피드백</h2>
                            <p>회고 내용</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Retrospection