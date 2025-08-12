import React from 'react'
import Logo from '../../assets/img/section/home/logo_3d.svg'
import Star from '../../assets/img/section/home/star.svg'
import { Link } from 'react-router-dom'

const Top = () => {
    return (
        <div className='home_top'>
            <div className="left">
                <div className="star">
                    <img src={Star} alt="star" />
                </div>
                <div className="title">GROWL <br />
                    TO WORLD<br />
                    LIKELION SSWU</div>
                {/* <div className="btn">지원하기</div> */}
                <Link to='/recruit' className="btn">지원하기</Link>
            </div>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
        </div>
    )
}

export default Top
