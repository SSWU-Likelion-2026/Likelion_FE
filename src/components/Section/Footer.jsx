import React from 'react'
import Link01 from '../../assets/img/section/link_likelikon.svg'
import Link02 from '../../assets/img/section/link_instagram.svg'
import Link03 from '../../assets/img/section/link_youtube.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='Footer_wrap'>
            <div>
                <h2>LIKELION UNIV <strong>SSWU</strong></h2>
                <div className="img_box">
                    <Link to='https://www.instagram.com/likelion.official'><img src={Link01} alt="link likelikon" /></Link>
                    <Link to='https://www.instagram.com/likelion_sswu'><img src={Link02} alt="link instagram" /></Link>
                    <Link to='https://www.youtube.com/channel/UCYaDkwVaOhuoe_LuFr3lWkA'><img src={Link03} alt="link youtube" /></Link>
                </div>
                <p className="copyright">Copyright © 2025 멋쟁이사자처럼_성신여대 All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer