/*
 * @flow
 * Copyright (C) 2019 Wikimedia Eesti
 *
 * This file is licensed under the GPL version 3,
 * or (at your option) any later version:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 */

import React from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
const wdk = require('wikibase-sdk')({
  instance: 'https://www.wikidata.org',
  sparqlEndpoint: 'https://query.wikidata.org/sparql',
});

import Layout from '../../components/layout/Layout';
import WorkLink from '../../components/utility/WorkLink'

const CreatorPage = (props) => {
  const router = useRouter();
  const creator = props.creator;
  const creatorName = props.creator.labels.en.value;
  return (
    <Layout> 
      <h2>{creatorName}</h2>
      <p>{`It's ${creatorName}!`}</p>

      <h3>{'Works List'}</h3>
      <ul>
        {props.works.map(workResult => {
          const work = workResult.work;
          console.log(work);
          return (
            <li key={work.value}>
              <WorkLink
                date={workResult.year}
                isPD={workResult.isPD}
                work={work}
              />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

CreatorPage.getInitialProps = async function(context) {

  const creatorQid = context.query.id;
  const creatorUrl = wdk.getEntities(creatorQid, ['en']);
  const creatorRes = await fetch(creatorUrl);
  const creatorData = await creatorRes.json();
  const creator = creatorData.entities[creatorQid];

  const sparql = `
    SELECT DISTINCT ?work ?workLabel ?year (MIN(?authorIsPD) AS ?isPD) WHERE {
      ?work wdt:P86 wd:${creatorQid} .
      OPTIONAL {
        ?work wdt:P571 ?date .
        BIND(YEAR(?date) as ?year).
      } .
      ?work (wdt:P86|wdt:P676) ?author .     
      OPTIONAL{?author wdt:P570 ?deathdate}.
      BIND((BOUND(?deathdate) && !isBLANK(?deathdate) && YEAR(?deathdate) < (YEAR(NOW ()) - 70)) as ?authorIsPD).
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }
    GROUP BY ?work ?workLabel ?year
    ORDER BY ?year ?workLabel
  `;
  const worksUrl = wdk.sparqlQuery(sparql);
  const worksRes = await fetch(worksUrl);
  const worksData = await worksRes.json();
  const works = wdk.simplify.sparqlResults(worksData);
  console.log(works);
  return {creator, works};
};

export default CreatorPage;
