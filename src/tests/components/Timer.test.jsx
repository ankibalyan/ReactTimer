import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { Timer } from 'Components';

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist(true);
  });

  describe('startTimer', ()=> {
    it('should start timer on started status', done => {
        const timer = mount(<Timer />);
        timer.instance().updateStatus('started');
        expect(timer.state('count')).toBe(0);
        setTimeout(() => {
          expect(timer.state('timerStatus')).toBe('started');
          expect(timer.state('count')).toBe(1);
          done();
        }, 1001)
    });

    it('should pause timer on paused status', done => {
      const timer = mount(<Timer />);

      timer.instance().setState({count: 10});
      timer.instance().updateStatus('started');
      timer.instance().updateStatus('paused');
      setTimeout(() => {
        expect(timer.state('timerStatus')).toBe('paused');
        expect(timer.state('count')).toBe(10);
        done();
      }, 1001);
    });

    it('should clear time on stopped status', done => {
      const timer = mount(<Timer />);
      timer.instance().setState({count: 10});
      timer.instance().updateStatus('started');
      timer.instance().updateStatus('stopped');

      setTimeout(() => {
        expect(timer.state('timerStatus')).toBe('stopped');
        expect(timer.state('count')).toBe(0);
        done();
      },1001);
    });

  });
})
