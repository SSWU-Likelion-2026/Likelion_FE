import React from 'react'
import Thum from '../../assets/img/hackathon/thumbnail.png'
import Detail from '../../assets/img/hackathon/btn_detail.svg'
import { Link, useNavigate } from 'react-router-dom'
import Hac_Header from './Hac_Header'
import useWindowSize from '../Section/useWindowSize'

import { ideaProjects, hereProjects, centerProjects } from '../../data/HackathonProjects'

const Hackathon = () => {
  const { width } = useWindowSize()
  const navigation = useNavigate()

  const sections = [
    { title: '아이디어톤', data: ideaProjects },
    { title: '여기톤', data: hereProjects },
    { title: '중앙톤', data: centerProjects },
  ]


  const onDetail = (id) => {
    navigation(`/hackathon/${id}`)
  }

  return (
    <div className={`Hackathon_wrap ${width > 1000 ? 'container_w' : 'container_m'}`}>
      <Hac_Header />
      <div className="main">
        {sections.map((section, i) => (
          <div className="content_box" key={i}>
            <h2>{section.title}</h2>
            <div className="content_list">
              {section.data.map((project, j) => (
                <div className="content" key={j}>
                  <img
                    src={project.img ? project.img : Thum}
                    alt=""
                    onClick={() => onDetail(project.id)}
                  />
                  <div>
                    <p className="title">{project.title}</p>

                    {width < 1000 ? (
                      <>
                        <p>{project.description}</p>
                        <p className="pro_detial">
                          <span>PM: {project.members.PM}</span>
                          <span>DE: {project.members.DE}</span>
                          <span>FE: {project.members.FE.join(', ')}</span>
                          <span>BE: {project.members.BE.join(', ')}</span>
                        </p>

                      </>
                    ) : (
                      <Link to={`/hackathon/${project.id}`}>
                        <img src={Detail} alt="상세보기" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hackathon
