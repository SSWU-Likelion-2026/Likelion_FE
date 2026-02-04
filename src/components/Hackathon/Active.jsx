import React, { useState } from 'react'
import Hac_Header from './Hac_Header'
import useWindowSize from '../Section/useWindowSize'
import ThumBig from '../../assets/img/hackathon/thumbnail_big.png'
import Act01 from '../../assets/img/hackathon/activites01.png'
import Act02 from '../../assets/img/hackathon/activites02.png'
import Act03 from '../../assets/img/hackathon/activites03.png'
import Act04 from '../../assets/img/hackathon/activites04.png'
import Act05 from '../../assets/img/hackathon/activites05.png'
import Act06 from '../../assets/img/hackathon/activites06.jpg'
import Act07 from '../../assets/img/hackathon/activites07.jpeg'
import Act08 from '../../assets/img/hackathon/activites08.jpeg'
import Act11 from '../../assets/img/hackathon/activites11.jpg'
import Act12 from '../../assets/img/hackathon/activites12.jpg'

const activityData = [
    {
        th: '13TH',
        month: '1월',
        title: '운영진 스터디 - 회식',
        date: '2025년 1월',
        description: '성신멋사 13기 아기사자들을 맞이하기 위한 준비',
        img: Act01,
    },
    {
        th: '13TH',
        month: '2월',
        title: '2025 TRENDITHON(운영진 해커톤)',
        date: '2025년 2월 26일 수요일',
        description: `
        2025 TRENDITHON은 서경대학교가 주최하는 멋쟁이사자처럼 13기 대학 연합 운영진 해커톤으로 기획자, 개발자, 디자이너 총 6명이 팀을 이루어 약 한 달간 2025년의 트렌드를 이끌 서비스를 기획, 디자인, 개발하고, 창업으로 이어지는 것을 목표로 합니다. 트렌디톤의 슬로건은 𝐋𝐞𝐭'𝐬 𝐥𝐞𝐚𝐝 𝐩𝐞𝐨𝐩𝐥𝐞, 𝐥𝐞𝐭'𝐬 𝐥𝐞𝐚𝐝 𝐭𝐫𝐞𝐧𝐝! 로 한 해동안 부원들을 이끌어야 할 운영진으로서 실력을 다지고, 2025년의 트렌드까지 이끌어보자는 다짐이 담겨있습니다. 2025 트렌디톤은 매해 그 해의 트렌드를 정리한 도서 「2025 트렌드 코리아」의 트렌드 키워드인 옴니보어, 기후 감수성, 그라데이션K를 차용하여 서비스를 기획하고, 디자인하고, 개발합니다.`,
        img: Act02,
    },
    {
        th: '13TH',
        month: '3월',
        title: '멋쟁이사자처럼 성신여대 13기 OT',
        date: '2025년 03월 13일 목요일',
        description: '치열한 경쟁을 뚫고 합격한 13기 아기사자들을 환영하는 OT 진행',
        img: Act03,
    },
    {
        th: '13TH',
        month: '4월',
        title: '운트워킹',
        date: '2025년 4월 5일 토요일',
        description: `
        멋쟁이사자처럼 대학 운영진 네트워킹을 위한, 2025 운트워킹 멋쟁이사자처럼 대학 교내 운영진이라면 한 번쯤 고민해봤을 리쿠르팅 방식, 커리큘럼 운영, 학습 자료 관리, 그리고 운영진 프로젝트 각 학교의 운영진들이 모여 서로의 경험을 공유하고 인사이트를 나누는 자리에 참여했습니다
        `,
        img: Act04,
    },
    {
        th: '13TH',
        month: '5월',
        title: '아이디어톤 2차예선',
        date: '2025년 5월 25일 일요일',
        description: '서경대학교, 국민대학교  1차예선 통과 팀들과 치열한 아이디어톤 2차예선 진행',
        img: Act05,
    },
    {
        th: '13TH',
        month: '6월',
        title: '13기 성신 멋사 MT',
        date: '2025년 5월 31일 일요일~ 2025년 6월 1일 월요일',
        description: '성신 멋사의 네트워킹을 위한 MT가 난향원에서 진행되었습니다.',
        img: Act06,
    },
    // {
    //     month: '7월',
    //     title: '한서성덕광 연합 세션',
    //     date: '2025년 7월 17일 목요일',
    //     description: '성신여자대학교, 한성대학교, 서경대학교, 광운대학교, 덕성여자대학교 총 5개의 대학교의 아기사자 및 운영진이 모여 연합 세션을 진행하였습니다. 중앙해커톤을 대비하여 서비스 배포를 경험해보고자 프론트엔드는 S3를 이용한 정적 배포를, 백엔드는 aws, Docker, GitAction을 활용한 배포 세션을 각각 파트별로 진행하였습니다.',
    //     // img: Act07,
    // },
    {
        th: '13TH',
        month: '7월',
        title: '여기톤',
        date: '2025년 7월 11일 금요일~ 2025년 7월 12일 토요일',
        description: '무박 2일간 이화여자대학교, 숙명여자대학교, 성신여자대학교, 동덕여자대학교, 덕성여자대학교, 서울여자대학교 총 서울권 6개 여자대학교가 참여한 <2025 여기톤 : HER+THON>이 성공적으로 진행되었습니다.',
        img: Act07,
    },{
        th: '13TH',
        month: '8월',
        title: '중앙 해커톤',
        date: '2025년 8월 25일 월요일~ 2025년 8월 26일 화요일',
        description: '2025년, 13기를 맞이한 멋사 대학은 전국 54개 대학에서 모인 약 1,700명의 아기사자들과 함께 더 큰 도전을 맞아 전국 아기자사들이 한자리에 모이는 무박 2일 해커톤이 개최되었습니다. 주제는 AI로 다시 뛰는 우리 동네로 지역 경제와 삶을 AI로 연결해 우리 지역의 다양한 문제들을 해결할 수 있는 프로덕트드를 직접 기획하고 제안했습니다.',
        img: Act08,
    },
    {
        th: '13TH',
        month: '11월',
        title: '4호선톤',
        date: '2025년 11월 토요일',
        description: '동국대학교, 숙명여자대학교, 성신여자대학교, 서울과학기술대학교, 서경대학교, 국민대학교, 덕성여자대학교, 한성대학교 총 8개의 대학교가 함께 13기의 마지막 연합 해커톤을 진행하였습니다.',
        img: Act11,
    },
    {
        th: '13TH',
        month: '12월',
        title: '성신 멋사 13기 수료식 및 데모데이 / 14기  취임식',
        date: '2025년 12월 월요일',
        description: '데모데이는 성신 멋사 13기 활동을 마무리짓는 활동으로, 약 한달간 성신 멋사 아기사자들 끼리 모여 자유로운 기획과 개발을 진행하였습니다. 또한 데모데이와 함께 13기 수료식을 진행하여 한해를 돌아보며 마무리하는 시간을 가졌고 이후 성신 멋사 14기를 이끌어갈 운영진들의 취임식이 이어졌습니다.',
        img: Act12,
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
    const [th, setTh] = useState('13TH')
    const [now, setNow] = useState('Jen') // 기본값 'Feb' = 1월
    const { width } = useWindowSize()

    const mappedMonth = monthMap[now] || ''
    const selectedData = activityData.find(item => item.month === mappedMonth && item.th === th)

    return (
        <div className={`Active_wrap Hac_Detail_wrap Hackathon_wrap ${width > 1000 ? 'container_w' : 'container_m'}`}>
            <Hac_Header setNow={setNow} setTh={setTh} />
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
