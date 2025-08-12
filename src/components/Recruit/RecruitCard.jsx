import React from 'react'
import { useNavigate } from 'react-router-dom';
import RecruitTop from './RecruitTop'
import card from '../../assets/img/recruit/card.png'
import useWindowSize from '../Section/useWindowSize';

const RecruitCard = () => {
    const { width } = useWindowSize();
    const navigate = useNavigate();

    const goToApplyPage = () => {
        navigate('/apply');
    };
    return (
        <div className={`recruit_card_div ${width > 1000 ? '' : 'container_m'}`} id='m_back'>
            <RecruitTop />
            <div className="padding_wrap">
                <div className="card_news_info_div">
                    <img src={card} alt="" />
                    <div className="card_info_text">
                        🦁멋쟁이사자처럼 성신여대 13기🦁<br /><br />
                        GROWL TO WORLD🔥<br /><br />
                        💡 멋쟁이사자처럼이란?<br />
                        멋쟁이사자처럼은 현재는 국내외 121개 대학, 4천여 명이 활동하는 국내 최대 규모의 IT 창업
                        동아리입니다.<br /><br />
                        💡 지원 방법<br />하단 ‘지원하기’ 버튼 클릭<br /><br />
                        💡 모집 파트 및 대상<br />- 기획/디자인 & 프론트엔드 & 백엔드<br /><br />
                        지원 기간<br />00.00.00 ~ 00.00.00 <br /><br /><br />
                        많은 지원 부탁드리겠습니다~!<br />감사합니다
                    </div>
                </div>
                <div className="next_apply_btn" onClick={goToApplyPage}>지원하기</div>
            </div>

        </div>
    )
}

export default RecruitCard