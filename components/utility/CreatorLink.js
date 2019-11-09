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

const CreatorLink = ({id, label}: {id: string, label: string}) => (
  <Link href="/creator/[id]" as={`/creator/${id}`}>
    <a>{label}</a>
  </Link>
);

export default CreatorLink;
