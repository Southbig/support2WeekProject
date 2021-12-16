import React from "react";

const LogInPage = () => {
  return (
    <div>
      <input className="email" type="text" placeholder="이메일" />
      <input className="password" type="password" placeholder="비밀번호" />
      <button className="membership">회원가입</button>
    </div>
  );
};

export default LogInPage;
