import React from 'react'
import AppLink from '../link/link'

const HeaderLogo = () => (
  <div className="logo">
    <AppLink url="/">
      <img src="/images/xterat.png" alt="Xterat" style="width: 81px; top: -12px; right:75px;"/>
    </AppLink>
  </div>
);

export default HeaderLogo;
