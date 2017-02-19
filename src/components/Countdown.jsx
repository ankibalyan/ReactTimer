import React from 'react';
import { Clock } from 'Components';

const Countdown = () => {
  return (
    <div>
      <h2 className="text-center page-title">
        Countdown
      </h2>
      <Clock totalSeconds={0} />
    </div>
  );
}

export { Countdown };
