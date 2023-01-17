import React from 'react';
import Layout from './Layout/Layout';

function Loader() {
  return (
    <Layout>
      <div className="loader">
        <div className="lds-ripple">
          <div />
          <div />
        </div>
        <h1>Loading...</h1>
      </div>
    </Layout>
  );
}

export default Loader;
