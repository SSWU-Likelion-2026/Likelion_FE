import React, { useState } from 'react'
import Hac_Header from './Hac_Header'
import useWindowSize from '../Section/useWindowSize'
import ThumBig from '../../assets/img/hackathon/thumbnail_big.png'
import Act01 from '../../assets/img/hackathon/activites01.png'
import Act02 from '../../assets/img/hackathon/activites02.png'
import Act03 from '../../assets/img/hackathon/activites03.png'
import Act04 from '../../assets/img/hackathon/activites04.png'
import Act05 from '../../assets/img/hackathon/activites05.png'

const activityData = [
    {
        month: '1월',
        title: '운영진 스터디 - 회식',
        date: '2025년 1월',
        description: '성신멋사 13기 아기사자들을 맞이하기 위한 준비',
        img: Act01,
    },
    {
        month: '2월',
        title: '2025 TRENDITHON(운영진 해커톤)',
        date: '2025년 2월 26일 수요일',
        description: `
        2025 TRENDITHON은 서경대학교가 주최하는 멋쟁이사자처럼 13기 대학 연합 운영진 해커톤으로 기획자, 개발자, 디자이너 총 6명이 팀을 이루어 약 한 달간 2025년의 트렌드를 이끌 서비스를 기획, 디자인, 개발하고, 창업으로 이어지는 것을 목표로 합니다. 트렌디톤의 슬로건은 𝐋𝐞𝐭'𝐬 𝐥𝐞𝐚𝐝 𝐩𝐞𝐨𝐩𝐥𝐞, 𝐥𝐞𝐭'𝐬 𝐥𝐞𝐚𝐝 𝐭𝐫𝐞𝐧𝐝! 로 한 해동안 부원들을 이끌어야 할 운영진으로서 실력을 다지고, 2025년의 트렌드까지 이끌어보자는 다짐이 담겨있습니다. 2025 트렌디톤은 매해 그 해의 트렌드를 정리한 도서 「2025 트렌드 코리아」의 트렌드 키워드인 옴니보어, 기후 감수성, 그라데이션K를 차용하여 서비스를 기획하고, 디자인하고, 개발합니다.`,
        img: Act02,
    },
    {
        month: '3월',
        title: '멋쟁이사자처럼 성신여대 13기 OT',
        date: '2025년 03월 13일 목요일',
        description: '치열한 경쟁을 뚫고 합격한 13기 아기사자들을 환영하는 OT 진행',
        img: Act03,
    },
    {
        month: '4월',
        title: '운트워킹',
        date: '2025년 4월 5일 토요일',
        description: `
        멋쟁이사자처럼 대학 운영진 네트워킹을 위한, 2025 운트워킹 멋쟁이사자처럼 대학 교내 운영진이라면 한 번쯤 고민해봤을 리쿠르팅 방식, 커리큘럼 운영, 학습 자료 관리, 그리고 운영진 프로젝트 각 학교의 운영진들이 모여 서로의 경험을 공유하고 인사이트를 나누는 자리에 참여했습니다
        `,
        img: Act04,
    },
    {
        month: '5월',
        title: '아이디어톤 2차예선',
        date: '2025년 5월 25일 일요일',
        description: '서경대학교, 국민대학교  1차예선 통과 팀들과 치열한 아이디어톤 2차예선 진행',
        img: Act05,
    }
]

const monthMap = {
    'Jen': '1월',
    'Feb': '2월',
    'Mar': '3월',
    'Apr': '4월',
    'May': '5월',
    'Jun': '6월',
    'Jul': '7월',
    'Aug': '8월',
    'Sep': '9월',
    'Oct': '10월',
    'Nov': '11월',
    'Dec': '12월',
}

const Active = () => {
    const [now, setNow] = useState('Jen') // 기본값 'Feb' = 1월
    const { width } = useWindowSize()

    const mappedMonth = monthMap[now] || ''
    const selectedData = activityData.find(item => item.month === mappedMonth)

    return (
        <div className={`Active_wrap Hac_Detail_wrap Hackathon_wrap ${width > 1000 ? 'container_w' : 'container_m'}`}>
            <Hac_Header setNow={setNow} />
            {width > 1000 ? (
                <div className="main">
                    <img src={selectedData?.img || ThumBig} alt={selectedData?.title || '기본 이미지'} />
                    <div className="text_box">
                        <h2>{selectedData?.title || '활동명'}</h2>
                        <p>{selectedData?.date || '활동 날짜'}</p>
                        <div className="info">
                            <p>{selectedData?.description || '활동 소개'}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="main_m">
                    <div>
                        <h2>{selectedData?.title || '활동명'}</h2>
                        <div>
                            <img src={selectedData?.img || ThumBig} alt={selectedData?.title || '기본 이미지'} />
                            <p>활동 날짜 | {selectedData?.date || '2025년 월 일'}</p>
                            <p>활동 내용 | {selectedData?.description || '활동 소개가 없습니다.'}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Active
