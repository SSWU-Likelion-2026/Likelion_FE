import React from 'react'

const RecruitPopup = ({ onClose, onSubmit }) => {
  return (
    <div className='recruit_popup_div'>
        <div className="popup_div">
            <div className="popup_text">제출 후에는<br />수정 및 삭제가 불가능합니다.</div>
            <div className="btn">
                <div className="back" onClick={onClose}>취소</div>
                <div className="send" onClick={onSubmit}>제출</div>
            </div>
        </div>
    </div>
  )
}

export default RecruitPopup