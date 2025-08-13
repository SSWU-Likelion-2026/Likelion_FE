import React from 'react';
import lionImg from '../../assets/img/people/lion.png';

const MemberSection = ({ members }) => {

  return (
    <>
      {members.map((member, idx) => (
        <div className="member-card" key={idx}>
          <img src={member.img} alt="lion" />
          <div className="text-box">
            <div className="line-1">
              <p className="name">{member.name}</p>
              {member.role && <p className="role">{member.role}</p>}
            </div>
            <p className="info">{member.major}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MemberSection;