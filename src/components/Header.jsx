import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer className="page-holder bg-cover">
    <div className="container py-5">
      <header className="text-center text-white py-5">
        <h1 className="display-4 font-weight-bold mb-4">Air Quality Monitor</h1>
      </header>
    </div>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  background: #1a2980; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #26d0ce, #1a2980); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #26d0ce,
    #1a2980
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default Header;
