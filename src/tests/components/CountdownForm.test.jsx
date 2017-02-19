import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import {CountdownForm} from 'Components';

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call setCountdown if valid seconds', () => {
    const spy = expect.createSpy();
    const countdownForm = mount(<CountdownForm onSetCountdown={spy} />);

    countdownForm.instance().refs.seconds.value = '109';
    countdownForm.simulate('submit');

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call setCountdown if invalid seconds', () => {
    const spy = expect.createSpy();
    const countdownForm = mount(<CountdownForm onSetCountdown={spy} />);

    countdownForm.instance().refs.seconds.value='109abc';
    countdownForm.simulate('submit');

    expect(spy).toNotHaveBeenCalled('abc');
  });
});
