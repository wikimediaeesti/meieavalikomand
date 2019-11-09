/*
 * @flow strict
 * Copyright (C) 2019 Wikimedia Eesti
 *
 * This file is licensed under the GPL version 3,
 * or (at your option) any later version:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 */

import React from 'react';

const Footer = () => (
  <div id="footer">
    <p className="left">
      <a href="https://wikidata.org/">{'Wikidata'}</a>
      {' | '}
      <a href="https://imslp.org/">{'IMSLP'}</a>
    </p>

    <p className="right">
      <a href="https://wikimedia.ee/">{'Wikimedia Eesti'}</a>
    </p>
  </div>
);

export default Footer;
