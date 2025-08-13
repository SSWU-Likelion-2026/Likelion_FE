import React from 'react'
import Thum from '../../assets/img/hackathon/thumbnail.png'
import Idea01 from '../../assets/img/hackathon/idea01.png'
import Idea02 from '../../assets/img/hackathon/idea02.png'
import Idea03 from '../../assets/img/hackathon/idea03.png'
import Idea04 from '../../assets/img/hackathon/idea04.png'
import Detail from '../../assets/img/hackathon/btn_detail.svg'
import { Link, useNavigate } from 'react-router-dom'
import Hac_Header from './Hac_Header'
import useWindowSize from '../Section/useWindowSize'

const ideaProjects = [
    {
        id: 'remind',
        title: 'Re:MIND',
        description: '일상 속에서 음성으로 기록하고 AI가 피드백하는 셀프 리마인드 서비스',
        img: '',
        members: {
            PM: '정채윤',
            DE: '정채윤',
            FE: ['김성연', '홍지현'],
            BE: ['이현경', '김가윤']
        }
    },
    {
        id: 'closet-stylist',
        title: 'My Closet Stylist',
        description: 'AI 기반 옷장 관리 및 코디 추천 앱',
        img: Idea04,
        members: {
            PM: '최근영',
            DE: '최근영',
            FE: ['김연은', '조주현'],
            BE: ['백수진', '오태경']
        }
    },
    {
        id: 'law-guide',
        title: 'AI 법률 용어 가이드',
        description: '사용자에게 법률 용어를 안내하는 지킴이 서비스',
        img: Idea01,
        members: {
            PM: '김채원',
            DE: '김채원',
            FE: ['노은서', '정지은'],
            BE: ['김도윤', '김민솔']
        }
    },
    {
        id: 'feelingood',
        title: '필링굿',
        description: 'AI가 함께하는 스마트 복약 루틴 케어 서비스',
        img: Idea02,
        members: {
            PM: '박시현',
            DE: '박시현',
            FE: ['박소유', '정유경'],
            BE: ['김윤서', '손정민']
        }
    },
    {
        id: 'litingale',
        title: 'Litingale(라이팅게일)',
        description: '감정기복을 완화하고 정서적 위로를 제공하는 스마트 감정 케어 앱',
        img: Idea03,
        members: {
            PM: '정다빈',
            DE: '정다빈',
            FE: ['윤세진', '서태영'],
            BE: ['고원정']
        }
    }
]

const Hackathon = () => {
    const { width } = useWindowSize()
    const navigation = useNavigate()

    const sections = [
        { title: '아이디어톤', count: ideaProjects.length },
        { title: '여기톤', count: 6 },
        { title: '중앙톤', count: 6 },
    ]

    const onDetail = (a) => {
        navigation(`/hackathon/${a}`)
    }

    return (
        <div className={`Hackathon_wrap ${width > 1000 ? 'container_w' : 'container_m'}`}>
            <Hac_Header />
            <div className="main">
                {sections.map((section, i) => (
                    <div className="content_box" key={i}>
                        <h2>{section.title}</h2>
                        <div className="content_list">
                            {section.title === '아이디어톤'
                                ? ideaProjects.map((project, j) => (
                                    <div className="content" key={j}>
                                        <img src={project.img ? project.img : Thum} alt="" onClick={() => onDetail(j)} />
                                        <div>
                                            <p className='title'>{project.title}</p>
                                            {width < 1000 ? (
                                                <>
                                                    <p>{project.description}</p>
                                                    <p>
                                                        PM: {project.members.PM}<br />
                                                        DE: {project.members.DE}<br />
                                                        FE: {project.members.FE.join(', ')}<br />
                                                        BE: {project.members.BE.join(', ')}
                                                    </p>
                                                </>
                                            ) : (
                                                <Link to={`/hackathon/${project.id}`}>
                                                    <img src={Detail} alt="상세보기" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                ))
                                : Array.from({ length: section.count }).map((_, j) => (
                                    <div className="content" key={j}>
                                        <img src={Thum} alt="" onClick={() => onDetail(j)} />
                                        <div>
                                            <p className='title'>서비스명</p>
                                            {width < 1000 ? (
                                                <>
                                                    <p>서비스 설명</p>
                                                    <p>참여자</p>
                                                </>
                                            ) : (
                                                <Link to={`/hackathon/${j}`}>
                                                    <img src={Detail} alt="상세보기" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hackathon
