import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders8 from '../components/headers/IndexSectionHeaders8';
import IndexSectionServices10 from '../components/services/IndexSectionServices10';
import IndexSectionCta15 from '../components/cta/IndexSectionCta15';
import IndexSectionFeatures12 from '../components/features/IndexSectionFeatures12';
import IndexSectionWork11 from '../components/work/IndexSectionWork11';
import IndexSectionTeam13 from '../components/team/IndexSectionTeam13';
import IndexSectionContact14 from '../components/contact/IndexSectionContact14';
import IndexSectionFooter16 from '../components/footer/IndexSectionFooter16';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders8 />
      <IndexSectionServices10 />
      <IndexSectionCta15 />
      <IndexSectionFeatures12 />
      <IndexSectionWork11 />
      <IndexSectionTeam13 />
      <IndexSectionContact14 />
      <IndexSectionFooter16 />
    </React.Fragment>
  );
}

