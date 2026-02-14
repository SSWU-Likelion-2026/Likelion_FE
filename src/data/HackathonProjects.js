// 아이디어톤 이미지
import Idea01 from '../assets/img/hackathon/idea01_11.jpg'
import Idea02 from '../assets/img/hackathon/idea02.png'
import Idea03 from '../assets/img/hackathon/idea03.png'
import Idea04 from '../assets/img/hackathon/idea04.png'
import Idea05 from '../assets/img/hackathon/idea01.png'

// 여기톤 이미지 
import here01 from '../assets/img/hackathon/here01.png'
import here02 from '../assets/img/hackathon/here02.png'
import here03 from '../assets/img/hackathon/here03.png'
import here04 from '../assets/img/hackathon/here04.png'
import here05 from '../assets/img/hackathon/here05.png'
import here07 from '../assets/img/hackathon/here07.png'
import here11 from '../assets/img/hackathon/here11.png'
import here12 from '../assets/img/hackathon/here12.png'
import here13 from '../assets/img/hackathon/here13.png'
import here19 from '../assets/img/hackathon/here19.png'
import here18 from '../assets/img/hackathon/here18.png'

// 중앙톤 이미지 
import center01 from '../assets/img/hackathon/center01.png'
import center02 from '../assets/img/hackathon/center02.png'
import center03 from '../assets/img/hackathon/center03.png'
import center04 from '../assets/img/hackathon/center04.png'

//14기 예비 이미지
import Thum from '../assets/img/hackathon/thumbnail01.png'

export const ideaProjects = [
  {
    id: 'remind',
    title: 'Re:MIND',
    description: '일상 속에서 음성으로 기록하고 AI가 피드백하는 셀프 리마인드 서비스',
    img: Idea01,
    members: {
      PM: '정채윤',
      DE: '정채윤',
      FE: ['김성연', '홍지현'],
      BE: ['이현경', '김가윤'],
    },
  },
  {
    id: 'closet-stylist',
    title: 'My Closet Stylist',
    description: 'AI 기반 옷장 관리 및 코디 추천 앱',
    img: Idea04,
    members: {
      PM: '최근영',
      DE: '최근영',
      FE: ['김연은', '조주현'],
      BE: ['백수진', '오태경'],
    },
  },
  {
    id: 'law-guide',
    title: 'AI 법률 용어 가이드',
    description: '사용자에게 법률 용어를 안내하는 지킴이 서비스',
    img: Idea05,
    members: {
      PM: '김채원',
      DE: '김채원',
      FE: ['노은서', '정지은'],
      BE: ['김도윤', '김민솔'],
    },
  },
  {
    id: 'feelingood',
    title: '필링굿',
    description: 'AI가 함께하는 스마트 복약 루틴 케어 서비스',
    img: Idea02,
    members: {
      PM: '박시현',
      DE: '박시현',
      FE: ['박소유', '정유경'],
      BE: ['김윤서', '손정민'],
    },
  },
  {
    id: 'litingale',
    title: 'Litingale(라이팅게일)',
    description: '감정기복을 완화하고 정서적 위로를 제공하는 스마트 감정 케어 앱',
    img: Idea03,
    members: {
      PM: '정다빈',
      DE: '정다빈',
      FE: ['윤세진', '서태영'],
      BE: ['고원정'],
    },
  },
]

export const hereProjects = [
  {
    id: '사상사이',
    title: '사상사이',
    description: '정치, 젠더 등 민감하지만 사회적으로 중요한 이슈를 학습하고 토론할 수 있는 플랫폼, 사상사이',
    img: here01,
    members: { PM: '이규빈', DE: '이은서', FE: ['조주현', '이연서'], BE: ['고소영', '임제영'] },
    stacks: {
      frontend: 'Html5, css, Javascript',
      backend: 'Python, Django',
    },
  },
  {
    id: 'UnivEarth',
    title: 'UnivEarth',
    description: '캠퍼스 환경을 지키는 첫걸음, 유니버스',
    img: here02,
    members: { PM: '장수경', DE: '장수경', FE: ['김성연', '서예린', '최영'], BE: ['이경은', '이영서'] },
    stacks: {
      frontend: 'Html5, css, Javascript',
      backend: 'Python, Django',
    }
  },
  {
    id: 'STEMUP',
    title: 'STEMUP',
    description: '여성들을 위한 커리어 진입 플랫폼',
    img: here03,
    members: { PM: '김채원', DE: '김채원', FE: ['김연은', '성유진', '한연주'], BE: ['오태경', '최서아'] },
    stacks: {
      frontend: 'Html5, css, Javascript',
      backend: 'Python, Django',
    }
  },
  {
    id: 'MOODYA',
    title: 'MOODYA',
    description: '혼자 있는 시간도, 나를 여행하는 시간으로. 여성의 감정에 귀 기울이는 힐링 여정 플랫폼',
    img: here04,
    members: { PM: '하지민', DE: '하지민', FE: ['박슬기', '양서윤', '홍지현'], BE: ['김민기', '이유정'] },
    stacks: {
      frontend: 'Html5, css, Javascript',
      backend: 'Python, Django',
    }
  },
  {
    id: '젠터러시',
    title: '젠터러시',
    description: '여성과 계몽을 주제로 누구나 검증된 정보와 체계적인 커리큘럼으로 여성학과 젠더 이슈를 올바르고 쉽게 학습할 수 있도록 돕는 페미니즘 마이크로러닝 교육 플랫폼',
    img: here05,
    members: { PM: '이도윤', DE: '이도윤', FE: ['서태영', '이채빈', '김유빈'], BE: ['이주연', '고유빈'] },
    stacks: {
      frontend: 'Html5, css, Javascript',
      backend: 'Python, Django',
    }
  },
  {
    id: 'shelf',
    title: 'shelf',
    description: '여성의 감정을 존중하는 감정 기반 독서 기록 플랫폼',
    img: here07,
    members: { PM: '이정음', DE: '이정음', FE: ['유진서', '김지원'], BE: ['김민솔', '양현빈'] },
    stacks: {
      frontend: 'Html5, css, Javascript',
      backend: 'Python, Django',
    }
  },
  {
    id: 'EVE',
    title: 'EVE',
    description: '여성의 이름으로, 내 몸을 입다. 내 몸이 기준이 되는 여성 주체형 속옷 추천 플랫폼',
    img: here11,
    members: { PM: '정다빈', DE: '정다빈', FE: ['김지우', '김성주'], BE: ['김민서', '가유빈'] },
    stacks: {
      frontend: 'Html5, css, Javascript',
      backend: 'Python, Django',
    }
  },
  {
    id: 'Dearbebe',
    title: 'Dearbebe',
    description: '육아용품 교환/나눔 플랫폼',
    img: here12,
    members: { PM: '유효민', DE: '유효민', FE: ['백민영', '박소유'], BE: ['남예은', '이혜지'] },
    stacks: {
      frontend: 'Html5, css, Javascript',
      backend: 'Python, Django',
    }
  },
  {
    id: 'Dotry',
    title: 'Dotry',
    description: '작은 점(Dot)처럼 시작된 매일의 도전 기록이 나무처럼 성장(Tree)하고, 스스로의 변화(Evolution)를 만들어가는 도전 기록 & 커뮤니티 플랫폼',
    img: here13,
    members: { PM: '최근영', DE: '최근영', FE: ['박지현', '임하연'], BE: ['조예성', '설영은'] },
    stacks: {
      frontend: 'Html5, css, Javascript',
      backend: 'Python, Django',
    }
  },
  {
    id: 'HERizon',
    title: 'HERizon',
    description: '경력 단절 여성의 커리어 성장을 위한 온라인 멘토링 & 커뮤니티 플랫폼',
    img: here19,
    members: { PM: '김은지', DE: '김은지', FE: ['최윤영', '손예원'], BE: ['김윤서', '김소망'] },
    stacks: {
      frontend: 'Html5, css, Javascript',
      backend: 'Python, Django',
    }
  },
  {
    id: 'Elevate:Seoul',
    title: 'Elevate:Seoul',
    description: '서울 여성의 삶의 질을 높이는 참여형 복지 플랫폼',
    img: here18,
    members: { PM: '김채연', DE: '김채연', FE: ['정지은', '최연서'], BE: ['김연우', '정유진'] },
    stacks: {
      frontend: 'Html5, css, Javascript',
      backend: 'Python, Django',
    }
  },
]

export const centerProjects = [
  {
    id: 'FriendPass',
    title: 'FriendPass',
    description: '교환학생과 한국학생을 매칭해 진행하는 성북구 탐방 서비스',
    img: center01,
    members: { PM: '정채윤', DE: '정채윤', FE: ['조주현', '노은서'], BE: ['김도윤', '김가윤', '김민솔'] },
    stacks: {
      frontend: 'React, TypeScript',
      backend: 'Spring Boot',
    },
  },
  {
    id: 'FLOW',
    title: 'FLOW',
    description: 'AI 기반 지역화폐 소비 매장 추천을 통해 개인의 소비를 지역 상권 활성화 사회적 기여로 연결하는 참여형 지역경제 플랫폼',
    img: center02,
    members: { PM: '최근영', DE: '정다빈', FE: ['김연은', '정지은'], BE: ['손정민', '이현경'] },
    stacks: {
      frontend: 'React, TypeScript',
      backend: 'Spring Boot',
    },
  },
  {
    id: 'EATO',
    title: 'EATO',
    description: 'AI를 통해 외국인 고객과 소상공인 사장님 사이의 언어 장벽을 손쉽게 해소하는 주문 시스템을 제안합니다.',
    img: center03,
    members: { PM: '김채원', DE: '김채원', FE: ['김성연', '박소유', '정유경'], BE: ['김윤서', '오태경'] },
    stacks: {
      frontend: 'React, TypeScript',
      backend: 'Spring Boot',
    },
  },
  {
    id: '잇ZI',
    title: '잇ZI',
    description: '대학과 상권을 연결하여 매장에는 홍보와 매출 기회를, 학생에게는 편리한 혜택 탐색 경험을 제공하는 AI기반 제휴·혜택 플랫폼',
    img: center04,
    members: { PM: '박시현', DE: '박시현', FE: ['서태영', '윤세진', '홍지현'], BE: ['고원정', '백수진'] },
    stacks: {
      frontend: 'React, TypeScript',
      backend: 'Spring Boot',
    },
  }
]

// 14기 - 아이디어톤
export const ideaProjects14 = [
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
]

// 14기 - 여기톤
export const hereProjects14 = [
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
]

// 14기 - 중앙톤
export const centerProjects14 = [
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
  {
    id: '',
    title: '',
    description: '',
    img: Thum,
    members: {
      PM: '',
      DE: '',
      FE: [],
      BE: [],
    },
  },
]

// 상세 페이지에서 전체에서 찾기 위한 합본
export const allProjects = [...ideaProjects, ...hereProjects, ...centerProjects]
