import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Middle = () => {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const sparkleY = useTransform(scrollYProgress, [0, 0.5], [0, 400])
    const wrapOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
    const wrapY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0])


    return (
        <div ref={containerRef} className='home_middle'>
            <div className="follow_line">
                <motion.div className="line" style={{ height: sparkleY }} />
                <motion.div className="spakle" >
                    <div className="circle">
                        <div className="inner" />
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="middle_wrap"
                style={{
                    opacity: wrapOpacity,
                    y: wrapY,
                }}
            >
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


        </div>
    )
}

export default Middle
