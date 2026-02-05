import React from 'react'
import { useNavigate } from 'react-router-dom';
import RecruitTop from './RecruitTop'
import apply_img from '../../assets/img/recruit/apply_img.png'
import next from '../../assets/img/recruit/next.svg'
import done_apply_img from '../../assets/img/recruit/apply_done_img.png'
import useWindowSize from '../Section/useWindowSize';

const Recruit = () => {
    const navigate = useNavigate();
    const { width } = useWindowSize();

    const goToApplyPage = () => {
        if (width <= 1000) {
            navigate('/cardnews');
        } else {
            navigate('/apply');
        }
    };
    return (
        <div className={`recruit_home_div ${width > 1000 ? '' : 'container_m'}`} id='m_back'>
            <RecruitTop />
            <div className="part_div">
                <div className="div" id='ing' onClick={goToApplyPage}>
                    <img src={apply_img} className='apply_img' />
                    <div className="info_div">
                        <p className="info_title">13기 아기사자 - 모집 중</p>
                        <img src={next} className="next" />
                    </div>
                </div>
                <div className="div" id='done'>
                    <img src={apply_img} className='apply_img' />
                    <div className="info_div">
                        <p className="info_title">13기 아기사자 - 모집 마감</p>
                        <img src={next} className="next" />
                    </div>
                </div>
                <div className="div" id='done'>
                    <img src={done_apply_img} className='apply_img' />
                    <div className="info_div">
                        <p className="info_title">13기 운영진 - 모집 마감</p>
                        <img src={next} className="next" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recruit