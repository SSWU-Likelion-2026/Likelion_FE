import React from 'react'
import Hac_Header from './Hac_Header'
import useWindowSize from '../Section/useWindowSize'
import ThumBig from '../../assets/img/hackathon/thumbnail_big.png'

const Active = () => {
    const { width } = useWindowSize();

    return (
        <div className={`Active_wrap Hac_Detail_wrap Hackathon_wrap ${width > 1000 ? 'container_w' : 'container_m'}`}>
            <Hac_Header />
            {width > 1000 ? (
                <div className="main">
                    <img src={ThumBig} alt="" />
                    <div className="text_box">
                        <h2>활동명</h2>
                        <p>활동 날짜</p>
                        <div className="info">
                            <p>활동 소개</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="main_m">
                    <div>
                        <h2>13기 아이디어톤 발표회</h2>
                        <div>
                            <img src={ThumBig} alt="" />
                            <p>활동 날짜 | 25.05.19</p>
                            <p>활동 내용 | </p>
                        </div>
                    </div>
                    <div className='last'>
                        <h2>13기 멋사 MT</h2>
                        <div>
                            <img src={ThumBig} alt="" />
                            <p>활동 날짜 | 25.05.19</p>
                            <p>활동 내용 | </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Active