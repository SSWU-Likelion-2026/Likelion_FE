import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Logo from '../../assets/img/section/home/logo_grad.png'

const Mobile = () => {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    const line1Height = useTransform(scrollYProgress, [0, 0.2], [0, 250])
    const line2Height = useTransform(scrollYProgress, [0.2, 0.5], [0, 340])
    const line3Height = useTransform(scrollYProgress, [0.5, 0.7], [0, 310])

    const titleOpacity = useTransform(scrollYProgress, [0.15, 0.2], [0, 1])
    const titleY = useTransform(scrollYProgress, [0.15, 0.2], [20, 0])

    const midOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1])
    const midY = useTransform(scrollYProgress,  [0.35, 0.45], [20, 0])

    const botOpacity = useTransform(scrollYProgress, [0.6, 0.70], [0, 1])
    const botY = useTransform(scrollYProgress, [0.6, 0.7], [20, 0])

    const sparkle1Opacity = useTransform(scrollYProgress, [0, 0.19], [1, 0])
    const sparkle2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0])
    const sparkle3Opacity = useTransform(scrollYProgress, [0.85, 0.9], [1, 0])

    return (
        <div ref={containerRef} className="home_mobile">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="container">
                <div className="follow_line line1">
                    <motion.div className="line" style={{ height: line1Height }} />
                    <motion.div className="spakle" style={{opacity: sparkle1Opacity }}>
                        <div className="circle">
                            <div className="inner" />
                        </div>
                    </motion.div>
                </div>

                <motion.div className="title" style={{ opacity: titleOpacity, y: titleY }}>
                    <p>GROWL TO WORLD</p>
                </motion.div>

                <div className="follow_line line2">
                    <motion.div className="line" style={{ height: line2Height }} />
                    <motion.div className="spakle" style={{opacity: sparkle2Opacity }}>
                        <div className="circle">
                            <div className="inner" />
                        </div>
                    </motion.div>
                </div>

                <motion.div className="mid" style={{ opacity: midOpacity, y: midY }}>
                    <div className="sc">
                        자신의 아이디어를 웹사이트로<br />
                        <span className="purple">실현</span>시키고 싶은 수정이
                    </div>
                    <div className="sc">
                        <span className="purple">비전공자</span> 라도 열심히<br />
                        배워보고 싶은 수정이
                    </div>
                    <div className="sc">
                        <span className="purple">기획디자인</span> | <span className="purple">프론트엔드</span> | <span className="purple">백엔드</span><br />
                        파트에 관심 있는 수정이
                    </div>
                </motion.div>

                <div className="follow_line line3">
                    <motion.div className="line" style={{ height: line3Height }} />
                    <motion.div className="spakle" style={{opacity: sparkle3Opacity }}>
                        <div className="circle">
                            <div className="inner" />
                        </div>
                    </motion.div>
                </div>

                <motion.div className="bottom_wrap" style={{ opacity: botOpacity, y: botY }}>
                    <div className="purple">WELCOME!</div>
                    <p>성신여자대학교</p>
                    <div className="grad">멋쟁이 사자처럼</div>
                </motion.div>
            </div>
        </div>
    )
}

export default Mobile
