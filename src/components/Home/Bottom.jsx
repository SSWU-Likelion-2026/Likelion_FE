import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Bottom = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const sparkleY = useTransform(scrollYProgress, [0.05, 0.5], [0, 770])
  const wrapOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const wrapY = useTransform(scrollYProgress, [0.5, 0.7], [50, 0])

  return (
    <div ref={containerRef} className="home_bottom">
      <div className="follow_line">
        <motion.div className="line" style={{ height: sparkleY }} />
        <motion.div className="spakle">
          <div className="circle">
            <div className="inner" />
          </div>
        </motion.div>
      </div>

      <motion.div className="bottom_wrap" style={{ opacity: wrapOpacity, y: wrapY }}>
        <div className="purple">WELCOME!</div>
        <p>성신여자대학교</p>
        <div className="grad">멋쟁이 사자처럼</div>
      </motion.div>
    </div>
  )
}

export default Bottom
