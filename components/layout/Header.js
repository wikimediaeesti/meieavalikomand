/*
 * @flow
 * Copyright (C) 2019 Wikimedia Eesti
 *
 * This file is licensed under the GPL version 3,
 * or (at your option) any later version:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 */

import React from 'react';
import Link from 'next/link';

const HeaderLink = ({href, title}: {href: string, title: string}) => (
  <li> 
    <Link href={href}>
      <a>{title}</a>
    </Link>
  </li>
);

const Header = () => (
  <div className="header">
    <ul>
      <HeaderLink href="/" title="Home" />
      <HeaderLink href="/about" title="About" />
    </ul>
  </div>
);

export default Header;
