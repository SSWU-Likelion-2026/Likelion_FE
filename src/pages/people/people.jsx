import React, { useState } from 'react';
import MemberSection from '../../components/People/Membersection';
import useWindowSize from '../../components/Section/useWindowSize';

// 13기 운영진
import Back01_13TH from '../../assets/img/people/13TH/back_01.jpeg'
import Back02_13TH from '../../assets/img/people/13TH/back_02.jpg'
import Back03_13TH from '../../assets/img/people/13TH/back_03.jpg'
import Front01_13TH from '../../assets/img/people/13TH/front_01.jpeg'
import Front02_13TH from '../../assets/img/people/13TH/front_02.png'
import Front03_13TH from '../../assets/img/people/13TH/front_03.jpg'
import Front04_13TH from '../../assets/img/people/13TH/front_04.jpeg'
import Img01_13TH from '../../assets/img/people/13TH/img01.png'
import Pm01_13TH from '../../assets/img/people/13TH/pm_01.jpg'
import Pm02_13TH from '../../assets/img/people/13TH/pm_02.jpeg'

// 14기 운영진
import Front01_14TH from '../../assets/img/people/14TH/front01.png'
import Front02_14TH from '../../assets/img/people/14TH/front02.jpeg'
import Front03_14TH from '../../assets/img/people/14TH/front03.jpeg'
import Front04_14TH from '../../assets/img/people/14TH/front04.jpeg'
import Back01_14TH from '../../assets/img/people/14TH/back01.jpg'
import Back02_14TH from '../../assets/img/people/14TH/back02.png'
import Back03_14TH from '../../assets/img/people/14TH/back03.jpg'
import Back04_14TH from '../../assets/img/people/14TH/back04.png'
import Pm01_14TH from '../../assets/img/people/14TH/pm01.jpeg'
import Pm02_14TH from '../../assets/img/people/14TH/pm02.jpg'

const generations = ['14TH', '13TH'];

const memberData = {
  '14TH': {
    '대표단': [
      { img: Front01_14TH, name: '최수진', role: '대표', major: '컴퓨터공학과 23학번' },
      { img: Back01_14TH, name: '백수진', role: '부대표', major: '컴퓨터공학과 24학번' }
    ],
    '기획/디자인': [
      { img: Pm01_14TH, name: '이정원', role: '파트장', major: '컴퓨터공학과 23학번' },
      { img: Pm02_14TH, name: '정다빈', role: '', major: '서비스디자인공학과 24학번' }
    ],
    '프론트엔드': [
      { img: Front01_14TH, name: '최수진', role: '대표', major: '컴퓨터공학과 23학번' },
      { img: Front02_14TH, name: '김성연', role: '파트장', major: '서비스디자인공학과 23학번' },
      { img: Front03_14TH, name: '박소유', role: '', major: '융합보안공학과 24학번' },
      { img: Front04_14TH, name: '정지은', role: '', major: 'AI융합학부 22학번' },
    ],
    '백엔드': [
      { img: Back01_14TH, name: '백수진', role: '부대표', major: '컴퓨터공학과 24학번' },
      { img: Back02_14TH, name: '김도윤', role: '파트장', major: 'AI융합학부 24학번' },
      { img: Back03_14TH, name: '이현경', role: '', major: '컴퓨터공학과 24학번' },
      { img: Back04_14TH, name: '손정민', role: '', major: '컴퓨터공학과 24학번' },
    ]
  },

  '13TH': {
    '대표단': [
      { img: Img01_13TH, name: '조수빈', role: '대표', major: '컴퓨터공학과 23학번' },
      { img: Front03_13TH, name: '정새영', role: '부대표', major: '미디어커뮤니케이션학과 22학번' }
    ],
    '기획/디자인': [
      { img: Pm01_13TH, name: '정다은', role: '파트장', major: '서비스디자인공학과 22학번' },
      { img: Pm02_13TH, name: '이정원', role: '', major: '컴퓨터공학과 23학번' }
    ],
    '프론트엔드': [
      { img: Front03_13TH, name: '정새영', role: '파트장', major: '미디어커뮤니케이션학과 22학번' },
      { img: Front01_13TH, name: '강신영', role: '', major: 'AI융합학부 22학번' },
      { img: Front04_13TH, name: '이현진', role: '', major: 'AI융합학부 22학번' },
      { img: Front02_13TH, name: '최수진', role: '', major: '컴퓨터공학과 23학번' }
    ],
    '백엔드': [
      { img: Back01_13TH, name: '서지우', role: '파트장', major: 'AI융합학부 22학번' },
      { img: Back02_13TH, name: '강민정', role: '', major: '컴퓨터공학과 22학번' },
      { img: Back03_13TH, name: '김나영', role: '', major: 'AI융합학부 22학번' },
      { img: Img01_13TH, name: '조수빈', role: '', major: '컴퓨터공학과 23학번' }
    ]
  }
};

const PeoplePage = () => {
  const [activeGen, setActiveGen] = useState('14TH');
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