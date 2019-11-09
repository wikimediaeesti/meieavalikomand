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

type WorkT = {
  +label: string,
  +value: string,
}

const WorkLink = ({
  date,
  isPD,
  work,
}: {date?: string, isPD: boolean, work: WorkT}) => (
  <span className={isPD ? "pd-work" : "copyrighted-work"} >
    <Link href="/work/[id]" as={`/work/${work.value}`}>
      <a>{work.label + (date ? ` (${date})` : '')}</a>
    </Link>
  </span>
);

export default WorkLink;
