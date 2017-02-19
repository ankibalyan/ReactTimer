import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import { Controls } from 'Components';

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render()', () => {
    it('should render pause when started', () => {
      const controls = mount(<Controls countdownStatus="started" />);
      expect(controls.containsMatchingElement(
        <button>Pause</button>
      )).toEqual(true);
    });

    it('should render start when paused', () => {
      const controls = mount(<Controls countdownStatus="paused" />);
      expect(controls.containsMatchingElement(
        <button>Start</button>
      )).toEqual(true);
    });
  });
});
