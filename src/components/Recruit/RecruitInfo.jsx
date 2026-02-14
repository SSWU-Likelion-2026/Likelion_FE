import React from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import RecruitTop from './RecruitTop'
import { useState } from 'react';
import useWindowSize from '../Section/useWindowSize';

const RecruitInfo = () => {
    const navigate = useNavigate();
    const { width } = useWindowSize();

    const goToNextPage = () => {
        const studentIdStr = String(studentId).trim();
        const isStudentIdValid = /^[0-9]+$/.test(studentIdStr);

        if (!isStudentIdValid) {
            alert("학번은 숫자만 입력할 수 있습니다.\n(예: 20231234)");
            return; 
        }

        // 2. 연락처 검사
        const contactStr = String(contact).trim();
        const contactRegex = /^010-\d{4}-\d{4}$/;

        if (!contactRegex.test(contactStr)) {
            alert("연락처 형식이 올바르지 않습니다.\n하이픈(-)을 포함한 010-0000-0000 형식으로 입력해주세요.");
            return; 
        }

        // 3. 비밀번호 검사 (4~6자리 숫자)
        const pwStr = String(password).trim();
        const isPwLengthValid = pwStr.length >= 4 && pwStr.length <= 6;
        const isPwNumberValid = /^[0-9]+$/.test(pwStr);
        if (!isPwLengthValid || !isPwNumberValid) {
            alert("비밀번호는 4~6자리 숫자로 입력해주세요.");
            return; 
        }

        // 4. 검사 통과 시 페이지 이동
        navigate('/application', {
            state: {
                name,
                studentId: studentIdStr, 
                major,
                password: pwStr,         
                contact,
                selectedPart: selectedPart?.value,
            }
        });
    };


    const part = [
        { value: '기획디자인', label: "기획/디자인" },
        { value: '프론트엔드', label: "프론트엔드" },
        { value: '백엔드', label: "백엔드" }
    ];
    const placeholder = '지원파트를 선택해주세요';
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [major, setMajor] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [selectedPart, setSelectedPart] = useState(null);

    const isFormComplete = name && studentId && major && contact && password && selectedPart?.value;

    const customStyles = {
        control: (provided) => ({
            ...provided,
            width: '418px',
            borderRadius: '30px',
            margin: '0',
            paddingLeft: '20px',
            outline: 'none',
            border: '2px solid #ADB4E2',
            background: '#FFF',
            boxShadow: 'none',
            '&:hover': {
                border: '2px solid #ADB4E2',
            },
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '8px',
            border: '2px solid #ADB4E2',
            background: '#FFF',
            color: '#171719',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '145%',
            letterSpacing: '-0.28px',
        }),
    };

    return (
        <div className={`recruit_info_div ${width > 1000 ? '' : 'container_m'}`} id='m_back'>
            <RecruitTop />
            <div className="info_div">
                <div className='info_top'>
                    <div>
                        <div className="info_title">이름</div>
                        <input type="text" value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input_text" placeholder='이름을 입력해주세요' />
                    </div>
                    <div>
                        <div className="info_title">학번</div>
                        <input type="text" value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="input_text" placeholder='학번을 입력해주세요' />
                    </div>
                    <div>
                        <div className="info_title">학과</div>
                        <input type="text" value={major}
                            onChange={(e) => setMajor(e.target.value)}
                            className="input_text" placeholder='학과를 입력해주세요' />
                    </div>
                    <div>
                        <div className="info_title">연락처</div>
                        <input type="text" value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="input_text" placeholder='010-0000-0000' />
                    </div>
                    <div>
                        <div className="info_title">비밀번호 (4~6자리 숫자)</div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input_text"
                            placeholder='비밀번호를 입력해주세요'
                            maxLength={6} // 최대 6자리 제한
                        />
                    </div>
                    <div>
                        <div className="info_title">지원파트</div>
                        <Select
                            styles={customStyles}
                            onChange={(option) => setSelectedPart(option)}
                            value={selectedPart}
                            options={part}
                            placeholder={placeholder} />
                    </div>
                </div>
                {isFormComplete && <div className="next_btn" onClick={goToNextPage}>다음</div>}
            </div>
        </div>
    )
}

export default RecruitInfo