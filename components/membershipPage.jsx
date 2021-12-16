import React from "react";

const MembershipPage = () => {
  return (
    <div>
      <input className="email" type="text" placeholder="이메일" />
      <input className="nickName" type="text" placeholder="닉네임" />
      <input className="password" type="password" placeholder="비밀번호" />
      <input
        className="passwordConfirm"
        type="password"
        placeholder="비밀번호확인"
      />
      <button className="membership">회원 가입</button>
    </div>
  );
};

export default MembershipPage;
