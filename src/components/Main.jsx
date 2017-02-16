import React from 'react';
import { Nav } from 'Components';

const Main = props => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
};

export { Main };
