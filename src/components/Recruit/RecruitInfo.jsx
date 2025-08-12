import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import Select from 'react-select';
import RecruitTop from './RecruitTop'
import { useState } from 'react';
import useWindowSize from '../Section/useWindowSize';

const RecruitInfo = () => {
    const navigate = useNavigate();
    const { width } = useWindowSize();

  const goToNextPage = () => {
  navigate('/application', {
    state: {
      name,
      studentId,
      major,
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
    const [selectedPart, setSelectedPart] = useState(null);

    const isFormComplete = name && studentId && major && contact && selectedPart?.value;

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
            outline: 'none',
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
            <RecruitTop/>
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