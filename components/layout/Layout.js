/*
 * @flow 
 * Copyright (C) 2019 Wikimedia Eesti
 *
 * This file is licensed under the GPL version 3,
 * or (at your option) any later version:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 */

import '../../styles/common.less'

import React from 'react';

import Footer from './Footer';
import Head from './Head';
import Header from './Header';

const Layout = ({children}: {children: React$Node}) => (
  <html lang="en">
    <Head />

    <body>
      <Header />

      <div id="page">
        {children}
        <div style={{clear: 'both'}} />
      </div>

      <Footer />
    </body>
  </html>
);

export default Layout;
