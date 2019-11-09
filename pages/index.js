/*
 * @flow
 * Copyright (C) 2019 Wikimedia Eesti
 *
 * This file is licensed under the GPL version 3,
 * or (at your option) any later version:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 */

import React from 'react';

import Layout from '../components/layout/Layout';
import CreatorLink from '../components/utility/CreatorLink'

const Homepage = () => (
  <Layout> 
    <h2>HELLO!</h2>

    <p>It's me</p>

    <CreatorLink id="Q511215" label="Raimond Valgre" />
  </Layout>
);

export default Homepage;
