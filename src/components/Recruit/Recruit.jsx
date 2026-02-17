import React, { useMemo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RecruitTop from './RecruitTop'
import apply_img from '../../assets/img/recruit/apply_2026.png'
import next from '../../assets/img/recruit/next.svg'
import done_apply_img from '../../assets/img/recruit/apply_done_img.png'
import useWindowSize from '../Section/useWindowSize';

const Recruit = () => {
    const navigate = useNavigate();
    const { width } = useWindowSize();
    const [now, setNow] = useState(new Date())
    const goToApplyPage = () => {
        if (width <= 1000) {
            navigate('/cardnews');
        } else {
            navigate('/apply');
        }
    };

    useEffect(() => {
        const id = setInterval(() => {
            setNow(new Date())
        }, 60 * 1000)

        return () => clearInterval(id)
    }, [])

    // 모집 일정 설정
    const { start, end } = useMemo(() => {
        const start = new Date('2026-02-18T00:00:00+09:00');
        const end = new Date('2026-02-27T00:00:00+09:00');

        return { start, end };
    }, []);

    const isOpen = now >= start && now < end;
    const isBefore = now < start;
    return (
        <div className={`recruit_home_div ${width > 1000 ? '' : 'container_m'}`} id='m_back'>
            <RecruitTop />
            <div className="part_div">
                {isOpen ? (
                    // 모집 중
                    <div className="div" id='ing' onClick={goToApplyPage}>
                        <img src={apply_img} className='apply_img' alt="" />
                        <div className="info_div">
                            <p className="info_title">14기 아기사자 - 모집 중</p>
                            <img src={next} className="next" alt="" />
                        </div>
                    </div>
                ) : isBefore ? (
                    // 모집 예정
                    <div className="div" id='done'>
                        <img src={apply_img} className='apply_img' alt="" />
                        <div className="info_div">
                            <p className="info_title">14기 아기사자 - 모집 예정</p>
                            <img src={next} className="next" alt="" />
                        </div>
                    </div>
                ) : (
                    //모집 마감
                    <div className="div" id='done'>
                        <img src={done_apply_img} className='apply_img' alt="" />
                        <div className="info_div">
                            <p className="info_title">14기 아기사자 - 모집 마감</p>
                            <img src={next} className="next" alt="" />
                        </div>
                    </div>
                )}
                

                <div className="div" id='done'>
                    <img src={done_apply_img} className='apply_img' />
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