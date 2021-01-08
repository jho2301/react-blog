import React from 'react';
import { Link } from 'react-router-dom';
import { AuthFormBlock, StyledInput, Footer } from './AuthForm.style';
import Button from '../common/Button';

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        <Button cyan fullWidth style={{ marginTop: '1rem' }}>
          로그인
        </Button>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
