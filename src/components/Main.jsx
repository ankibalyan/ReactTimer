import React from 'react';
import { Nav } from 'Components';

const Main = props => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns large-6 medium-8 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export { Main };
