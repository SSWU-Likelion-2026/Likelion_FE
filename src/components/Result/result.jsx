import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios'; // API 연동용
import RecruitTop from '../Recruit/RecruitTop';
import useWindowSize from '../Section/useWindowSize';
const kstDate = (isoWithoutTz) => new Date(`${isoWithoutTz}+09:00`)

// 결과 조회 가능 시간
const RESULT_WINDOWS = [
  { start: kstDate('2026-03-03T18:00:00'), end: kstDate('2026-03-04T18:00:00') }, // 1차
  { start: kstDate('2026-03-09T18:00:00'), end: kstDate('2026-03-10T18:00:00') }, // 최종
]

const isResultOpen = (now = new Date()) =>
  RESULT_WINDOWS.some(w => now >= w.start && now < w.end)


const ResultForm = () => {
  const { width } = useWindowSize();

  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const open = useMemo(() => isResultOpen(now), [now]);

  // 1. 입력값 상태 관리
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState(''); // 비밀번호 추가

  // 2. 결과 데이터 상태 관리
  const [showPopup, setShowPopup] = useState(false);
  const [resultData, setResultData] = useState(null); // 서버에서 받은 데이터
  const [resultType, setResultType] = useState(null); // 'first'(1차) or 'second'(2차)
  const [isPass, setIsPass] = useState(false);        // 합격 여부

  // 3. 날짜/시간 포맷팅 함수
  const formatDateTime = (isoString) => {
    if (!isoString) return { date: "추후 안내", time: "추후 안내" };
    const dateObj = new Date(isoString);
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    return { date: `${month}/${day}`, time: `${hours}:${minutes}` };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !studentId || !password) {
      alert("이름, 학번, 비밀번호를 모두 입력해주세요.");
      return;
    }

    const payload = {
      name: name,
      field: parseInt(studentId, 10), // 학번 숫자 변환
      password: password,
    };

    try {
      // 1단계: 최종(2차) 결과 먼저 조회
      const resSecond = await axios.post('https://api.sswulikelion.com/api/admissions/second', payload);

      if (resSecond.data.isSuccess) {
        setResultData(resSecond.data.result);
        setResultType('second');
        setIsPass(resSecond.data.result.status === "합격");
        setShowPopup(true);
        return; // 2차 결과가 있으면 여기서 종료
      }
    } catch (ignored) {
      // 2차 데이터가 없으면 무시하고 1차 조회로 넘어감
    }

    try {
      // 2단계: 1차 결과 조회
      const resFirst = await axios.post('https://api.sswulikelion.com/api/admissions/first', payload);

      if (resFirst.data.isSuccess) {
        setResultData(resFirst.data.result);
        setResultType('first');
        setIsPass(resFirst.data.result.first_status === "합격");
        setShowPopup(true);
      } else {
        alert(resFirst.data.message || "결과를 불러올 수 없습니다.");
      }
    } catch (error) {
      // 둘 다 실패한 경우
      if (error.response) {
        alert(error.response.data.message || "일치하는 지원 정보가 없습니다.");
      } else {
        alert("서버 오류가 발생했습니다.");
      }
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // 렌더링용 날짜 데이터 준비
  const timeString = resultData ? (resultType === 'first' ? resultData.interview_time : resultData.date) : null;
  const { date, time } = formatDateTime(timeString);

  return (
    <>
      {open ?
        (
          <>
            <form className={`result-form ${width > 1000 ? '' : 'container_m'}`} onSubmit={handleSubmit}>
              <RecruitTop isResultPage={true} />
              <div className="form-box">
                {/* 이름 입력 */}
                <div className="form-group">
                  <label className="form-label">이름</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="이름을 입력해주세요"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* 학번 입력 */}
                <div className="form-group">
                  <label className="form-label">학번</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="학번을 입력해주세요"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                  />
                </div>

                {/* 비밀번호 입력 */}
                <div className="form-group">
                  <label className="form-label">비밀번호</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="비밀번호(4~6자리)를 입력해주세요"
                    maxLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="submit-button">조회</button>
            </form>

            {showPopup && resultData && (
              <>
                <div className="popup-overlay" onClick={handleClosePopup} />
                <div className="popup">
                  <h2 className="popup-title">
                    {name}님 {isPass ? (resultType === 'first' ? "서류합격 축하합니다" : "최종 합격 축하합니다") : "아쉽지만 불합격입니다"}
                  </h2>

                  {isPass ? (
                    <p className="popup-desc">
                      {resultType === 'first' ? (
                        /* 1차 합격 시 (면접 안내) */
                        <>
                          면접 대기실: {resultData.waiting_room || "추후 안내"}<br />
                          면접 장소: {resultData.location || "추후 안내"}<br />
                          면접 일자: {date}<br />
                          면접 시간: {time}
                        </>
                      ) : (
                        /* 최종 합격 시 (OT 안내) */
                        <>
                          아기사자가 되신 것을 환영합니다!<br /><br />
                          [OT 안내]<br />
                          OT 장소: {resultData.location || "추후 안내"}<br />
                          OT 일자: {date}<br />
                          OT 시간: {time}
                        </>
                      )}
                    </p>
                  ) : (
                    /* 불합격 시 */
                    <p className="popup-desc">
                      지원해주셔서 감사합니다.<br />
                      더 좋은 기회로 뵙기를 바랍니다.
                    </p>
                  )}

                  <button className="popup-confirm" onClick={handleClosePopup}>확인</button>
                </div>
              </>
            )}
          </>
        ) : (
          <div className={`result-closed ${width > 1000 ? '' : 'container_m'}`}>
            <RecruitTop isResultPage={true} />
            <h2 className="closed-message">
              결과 조회 기간이 아닙니다.<br />

            </h2>
          </div>

        )}
    </>
    );
  }


export default ResultForm;