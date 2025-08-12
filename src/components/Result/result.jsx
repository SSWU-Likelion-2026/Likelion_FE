import React, { useState } from 'react';
import RecruitTop from '../Recruit/RecruitTop';
import useWindowSize from '../Section/useWindowSize';


const ResultForm = () => {
  const { width } = useWindowSize();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <form className={`result-form ${width > 1000 ? '' : 'container_m'}`} onSubmit={handleSubmit}>
        <RecruitTop isResultPage={true} />
        <div className="form-box">
          {['이름', '학번'].map((label, idx) => (
            <div className="form-group" key={idx}>
              <label className="form-label">{label}</label>
              <input
                type="text"
                className="form-input"
                placeholder={`${label}을 입력해주세요`}
              />
            </div>
          ))}
        </div>
        <button type="submit" className="submit-button">조회</button>
      </form>

      {showPopup && (
        <>
          <div className="popup-overlay" />
          <div className="popup">
            <h2 className="popup-title">000님 서류합격 축하합니다</h2>
            <p className="popup-desc">
              면접 대기실: 성신관 205호<br />
              면접 일자: 03/25<br />
              면접 시간: 19:25
            </p>
            <button className="popup-confirm" onClick={handleClosePopup}>확인</button>
          </div>
        </>
      )}
    </>
  );
};

export default ResultForm;