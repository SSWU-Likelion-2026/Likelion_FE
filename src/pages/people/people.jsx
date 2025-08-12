import React, { useState } from 'react';
import MemberSection from '../../components/People/Membersection';
import useWindowSize from '../../components/Section/useWindowSize';

const generations = ['13TH', '12TH', '11TH', '10TH', '9TH'];

const memberData = {
  '13TH': {
    '대표단': [
      { name: '조수빈', role: '대표', major: '컴퓨터공학과 23학번' },
      { name: '정새영', role: '부대표', major: '미디어커뮤니케이션학과 22학번' }
    ],
    '기획/디자인': [
      { name: '정다은', role: '파트장', major: '서비스디자인공학과 22학번' },
      { name: '이정원', role: '', major: '컴퓨터공학과 23학번' }
    ],
    '프론트엔드': [
      { name: '정새영', role: '파트장', major: '미디어커뮤니케이션학과 22학번' },
      { name: '강신영', role: '', major: 'AI융합학부 22학번' },
      { name: '이현진', role: '', major: 'AI융합학부 22학번' },
      { name: '최수진', role: '', major: '컴퓨터공학과 23학번' }
    ],
    '백엔드': [
      { name: '서지우', role: '파트장', major: 'AI융합학부 22학번' },
      { name: '강민정', role: '', major: '컴퓨터공학과 22학번' },
      { name: '김나영', role: '', major: 'AI융합학부 22학번' },
      { name: '조수빈', role: '', major: '컴퓨터공학과 23학번' }
    ]
  }
};

const PeoplePage = () => {
  const [activeGen, setActiveGen] = useState('13TH');
  const { width } = useWindowSize();

  return (
    <div className={`people-page ${width > 1000 ? '' : 'container_m'}`}>
      <h2 className="title">People</h2>

      <div className="generation-tabs">
        {generations.map(gen => (
          <button
            key={gen}
            className={`gen-tab ${activeGen === gen ? 'active' : ''}`}
            onClick={() => setActiveGen(gen)}
          >
            {gen}
          </button>
        ))}
      </div>

      <div className="card-wrapper">
        {memberData[activeGen] && Object.entries(memberData[activeGen]).map(([section, members]) => (
          <div key={section} className="role-section">
            <div className="role-title-wrapper">
              <div className="role-bar" />
              <h3 className="role-title">{section}</h3>
            </div>
            <div className="card-row-wrapper">
              <div className="card-row">
                <MemberSection members={members} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeoplePage;