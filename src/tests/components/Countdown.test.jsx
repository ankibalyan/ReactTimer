import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import {Countdown} from 'Components';

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('setCountdown', () => {
    it('should set state to started and countdown', (done) => {
      const countdown = mount(<Countdown />);
      countdown.instance().setCountdown(10);

      expect(countdown.state('countdownStatus')).toBe('started');
      expect(countdown.state('count')).toBe(10);

      setTimeout(() => {
        expect(countdown.state('count')).toBe(9);
        done();
      },1001);
    });

    it('should never set countless than zero)', done => {
      const countdown = mount(<Countdown />);
      countdown.instance().setCountdown(1);

      setTimeout(() => {
        expect(countdown.state('count')).toBe(0);
        done();
      },3000);
    })
  });
});
