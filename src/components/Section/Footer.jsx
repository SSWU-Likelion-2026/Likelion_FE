import React from 'react'
import Link01 from '../../assets/img/section/link_likelikon.svg'
import Link02 from '../../assets/img/section/link_instagram.svg'
import Link03 from '../../assets/img/section/link_youtube.svg'

const Footer = () => {
    return (
        <div className='Footer_wrap'>
            <div>
                <h2>LIKELION UNIV <strong>SSWU</strong></h2>
                <div className="img_box">
                    <img src={Link01} alt="link likelikon" />
                    <img src={Link02} alt="link instagram" />
                    <img src={Link03} alt="link youtube" />
                </div>
                <p className="copyright">Copyright © 2025 멋쟁이사자처럼_성신여대 All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer