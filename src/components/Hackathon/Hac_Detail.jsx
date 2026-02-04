import React from 'react'
import { useParams } from 'react-router-dom'
import Hac_Header from './Hac_Header'
import ThumBig from '../../assets/img/hackathon/thumbnail_big.png'
import useWindowSize from '../Section/useWindowSize'

import { allProjects } from '../../data/HackathonProjects'

const Hac_Detail = () => {
  const { width } = useWindowSize()
  const params = useParams()

  const project = allProjects.find((p) => p.id === params.detail)

  if (!project) {
    return (
      <div className={`Hackathon_wrap ${width > 1000 ? 'container_w' : 'container_m'}`}>
        <Hac_Header />
        <div className="main">
          <p>해당 프로젝트를 찾을 수 없습니다.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`Hac_Detail_wrap Hackathon_wrap ${width > 1000 ? 'container_w' : 'container_m'}`}>
      <Hac_Header />
      {width > 1000 ? (
        <div className="main">
          <img src={project.img || ThumBig} alt="" />
          <div className="text_box">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="info">
              <p>PM: {project.members.PM}</p>
              <p>DE: {project.members.DE}</p>
              <p>FE: {project.members.FE.join(', ')}</p>
              <p>BE: {project.members.BE.join(', ')}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="main_m">
          <h2>{project.title}</h2>
          <div className="detail">
            <img src={project.img || ThumBig} alt="" />
            <div className="text_box">
              <div className="text"><p className="left">서비스 소개</p><p>{project.description}</p></div>
              <div className="text"><p className="left">PM</p><p>{project.members.PM}</p></div>
              <div className="text"><p className="left">DE</p><p>{project.members.DE}</p></div>
              <div className="text"><p className="left">FE</p><p>{project.members.FE.join(', ')}</p></div>
              <div className="text"><p className="left">BE</p><p>{project.members.BE.join(', ')}</p></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hac_Detail
