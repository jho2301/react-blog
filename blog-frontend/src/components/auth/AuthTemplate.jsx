import React from 'react';
import { Link } from 'react-router-dom';
import { AuthTemplateBlock, WhiteBox } from './AuthTemplate.style';

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">REACTERS</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
