import React, { useRef, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import RecruitTop from './RecruitTop'
import RecruitPopup from './RecruitPopup';
import useWindowSize from '../Section/useWindowSize';

const RecruitApplication = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { width } = useWindowSize();
    const { name, studentId, major, contact, password, selectedPart } = location.state || {};
    const [questions, setQuestions] = useState([]);
    const textarea = useRef({});
    const maxLength = 500;

    const [showPopup, setShowPopup] = useState(false);

    const [form, setForm] = useState({
        content1: '',
        content2: '',
        content3: '',
        content4: '',
        content5: '',
        content6: '',
    });

    useEffect(() => {
        const fetchQuestionsAndInitForm = async () => {
            console.log("현재 파트값:", selectedPart);
            if (!selectedPart) {
                alert("잘못된 접근입니다. 파트를 선택해주세요.");
                navigate(-1);
                return;
            }

            try {
                const res = await axios.get(`https://api.sswulikelion.com/api/question`, {
                    params: { part: selectedPart },
                    headers: { 'Accept': 'application/json' },
                });

                console.log("서버 응답 데이터:", res.data);

                const fetchedQuestions = res.data.result || res.data;
                setQuestions(fetchedQuestions);

                const initForm = {};
                fetchedQuestions.forEach((q) => {
                    initForm[q.questionId] = '';
                });
                setForm(initForm);

            } catch (err) {
                console.error("질문 목록 불러오기 실패", err);
            }
        };

        fetchQuestionsAndInitForm();
    }, [selectedPart, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // name은 이제 questionId (숫자)일 수 있으므로 대괄호 접근
        const trimmedValue = value.slice(0, maxLength);

        setForm(prev => ({ ...prev, [name]: trimmedValue }));

        // 높이 자동 조절
        const ref = textarea.current[name];
        if (ref) {
            ref.style.height = 'auto';
            ref.style.height = ref.scrollHeight + 'px';
        }
    };

    const renderTextarea = (question) => {
        const key = question.questionId; // 질문 ID를 고유 키로 사용
        return (
            <div key={key} className="question_item">
                <div className="info_title">
                    {/* 질문 번호와 내용을 함께 표시 */}
                    Q. {question.content || question.questionText}
                </div>
                <div className="textarea_div">
                    <textarea
                        name={key} // name을 questionId로 설정
                        ref={el => textarea.current[key] = el}
                        placeholder="내용을 작성해주세요"
                        rows={1}
                        value={form[key] || ''} // 값이 없으면 빈 문자열
                        onChange={handleChange}
                        maxLength={maxLength}
                    />
                    <div className="text_length">{(form[key] || '').length} / {maxLength}</div>
                </div>
            </div>
        );
    };

    const handleSubmit = async () => {
        // 1. 기본 정보 누락 검사
        if (!name || !studentId || !major || !contact) {
            alert("기본 정보가 누락되었습니다. 다시 신청해주세요.");
            return;
        }

        // 2. 학번 검사
        const studentIdStr = String(studentId).trim();
        if (!/^[0-9]+$/.test(studentIdStr)) {
            alert("학번은 숫자만 입력할 수 있습니다.\n(예: 20231234)");
            return;
        }

        // 3. 연락처 형식 검사 
        const contactStr = contact ? String(contact).trim() : "";
        const contactRegex = /^010-\d{4}-\d{4}$/;
        if (!contactRegex.test(contactStr)) {
            alert("연락처 형식이 올바르지 않습니다.\n(예: 010-1234-5678)");
            return;
        }

        // 4. 비밀번호 검사
        const pwStr = password ? String(password).trim() : "";
        if (pwStr.length < 4 || pwStr.length > 6 || !/^[0-9]+$/.test(pwStr)) {
            alert("비밀번호는 4~6자리 숫자로 입력해주세요.");
            return;
        }

        const isAllAnswered = questions.every(q => {
            const answer = form[q.questionId];
            return answer && answer.trim().length > 0;
        });

        if (!isAllAnswered) {
            alert("아직 작성하지 않은 답변이 있습니다.\n모든 질문에 답변을 남겨주세요!");
            setShowPopup(false); // 팝업 닫기
            return; // 서버 전송 중단
        }

        // 5. 데이터 전송 Payload 생성
        const payload = {
            name: name,
            field: parseInt(studentIdStr, 10), 
            department: major,
            phone_number: contactStr,
            part: selectedPart,
            password: pwStr, 
            answers: questions.map((q) => ({
                questionId: q.questionId,
                answerText: form[q.questionId] || ""
            }))
        };

        try {
            const response = await axios.post('https://api.sswulikelion.com/api/admissions', payload, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log("성공 응답:", response); // 응답 전체 확인

            if (response.data.isSuccess || response.status === 200) { // 서버 응답 구조에 따라 조건 수정
                alert("지원서가 성공적으로 제출되었습니다!");
                if (width <= 1000) navigate(-3);
                else navigate(-2);
            }
        } catch (error) {
            console.error("제출 에러 상세:", error);
            if (error.response) {
                console.log("서버 에러 메시지:", error.response.data);
                // 409 Conflict: 중복 제출
                if (error.response.status === 409) {
                    alert("이미 제출된 지원서입니다.");
                } else if (error.response.status === 400) {
                    alert(`입력 형식이 올바르지 않습니다.\n(${error.response.data.message})`);
                } else {
                    alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
                }
            } else {
                alert("네트워크 오류가 발생했습니다.");
            }
        } finally {
            setShowPopup(false);
        }
    };

    return (
        <div className={`recruit_application_div ${width > 1000 ? '' : 'container_m'}`} id='m_back'>
            <RecruitTop />
            <div className="application_div">
                <div className="application_top">
                    {/* 질문 리스트 렌더링 */}
                    {questions.map((q) => renderTextarea(q))}
                </div>
                <div className="send" onClick={() => setShowPopup(true)}>
                    {width <= 1000 ? '제출' : '제출하기'}
                </div>
            </div>
            {showPopup && (
                <RecruitPopup
                    onClose={() => setShowPopup(false)}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    )
}

export default RecruitApplication;