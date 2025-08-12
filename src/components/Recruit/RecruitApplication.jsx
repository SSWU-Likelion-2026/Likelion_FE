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
    const { name, studentId, major, contact, selectedPart } = location.state || {};
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
            try {
                const res = await axios.get(`https://sswulion.shop/api/question`, {
                    params: {
                        part: selectedPart,
                    },
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                const fetchedQuestions = res.data;
                setQuestions(fetchedQuestions);

                const initForm = {};
                fetchedQuestions.forEach((_, index) => {
                    initForm[`content${index + 1}`] = '';
                });
                setForm(initForm);
            } catch (err) {
                console.error("질문 목록 불러오기 실패", err);
            }
        };

        fetchQuestionsAndInitForm();
    }, [selectedPart]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const trimmedValue = value.slice(0, maxLength);
        setForm(prev => ({ ...prev, [name]: trimmedValue }));

        const ref = textarea.current[name];
        if (ref) {
            ref.style.height = 'auto';
            ref.style.height = ref.scrollHeight + 'px';
        }
    };

    const renderTextarea = (name, title, limit = maxLength) => (
        <div>
            <div className="info_title">{title}</div>
            <div className="textarea_div">
                <textarea
                    name={name}
                    ref={el => textarea.current[name] = el}
                    placeholder="내용을 작성해주세요"
                    rows={1}
                    value={form[name]}
                    onChange={handleChange}
                    maxLength={limit}
                />
                <div className="text_length">{form[name].length} / {limit}</div>
            </div>
        </div>
    );
    const handleSubmit = async () => {
        const payload = {
            name: name,
            field:  Number(studentId),
            department: major,
            phone_number: contact,
            part: selectedPart,
            answers: questions.map((q, index) => ({
                questionId: q.questionId,
                answerText: form[`content${index + 1}`]
            }))
        };

        try {
            const response = await axios.post('https://sswulion.shop/api/admissions', payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                alert("제출 완료!");
                if (width <= 1000) {
                    navigate(-3);
                } else {
                    navigate(-2);
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                alert("이미 제출했습니다.");
            } else {
                console.error("지원서 제출 오류", error);
                alert("제출 중 오류가 발생했습니다.");
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
                    {questions.map((q, index) =>
                        renderTextarea(`content${index + 1}`, `${index + 1}. ${q.questionText}`, 500)
                    )}
                </div>
                <div className="send" onClick={() => setShowPopup(true)}>{width <= 1000 ? '제출' : '제출하기'}</div>
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

export default RecruitApplication