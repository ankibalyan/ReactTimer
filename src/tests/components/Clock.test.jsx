import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {Clock} from 'Components';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock output', () => {
      // Render a clock with formated seconds
      const clock = shallow(
        <Clock totalSeconds={62} />
      );

      expect(clock.find('.clock-text').text()).toEqual('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should  format seconds', () => {
      // const clock = TestUtils.renderIntoDocument(<Clock />);
      const clock = shallow(<Clock />);

      const seconds = 615;
      const expected = '10:15';

      // const actual = clock.formatSeconds(seconds);
      const actual = clock.instance().formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should  format seconds when min/sec are less than 10', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 61;
      const expected = '01:01';
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
