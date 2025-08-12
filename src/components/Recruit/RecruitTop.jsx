import React from 'react'
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../Section/useWindowSize';

const RecruitTop = ({ isResultPage = false }) => {
    const navigate = useNavigate();
    const { width } = useWindowSize();

    const goToApplyPage = () => {
        navigate('/recruit');
    };
    const goToResultPage = () => {
        navigate('/result');
    };

    return (
        <>{width < 1000 ? (
            <div className='recruit_top_div_m'>
                <div className="type_div_m">
                    <div className={isResultPage ? 'no_choice_btn_m' : 'choice_btn_m'} onClick={goToApplyPage}>모집 공고</div>
                    <div className={isResultPage ? 'choice_btn_m' : 'no_choice_btn_m'} >결과 조회</div>
                </div>
                <div className="recruit_title_center_m">
                    <div className="recruit_title_m">RECRUIT</div>
                </div>
            </div >

        ) : (
            <div className='recruit_top_div'>
                <div className="recruit_title">RECRUIT</div >
                <div className="type_div">
                    <div className={isResultPage ? 'no_choice_btn' : 'choice_btn'} onClick={goToApplyPage}>지원하기</div>
                    <div className={isResultPage ? 'choice_btn' : 'no_choice_btn'} >결과 조회</div>
                </div>
            </div >
        )}

        </>

    )
}

export default RecruitTop