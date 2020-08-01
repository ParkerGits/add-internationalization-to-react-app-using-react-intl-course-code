import React from "react";
import { mountWithIntl, shallowWithIntl } from "../../intl-enzyme.js";
import toJson from "enzyme-to-json";

import BookDetail from "../BookDetail";

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

Date.now = jest.fn(() => 1491111687199)

let wrapper = null;
describe('BookDetail', () => {
  it('renders expected markup', () => {
    wrapper = mountWithIntl(<BookDetail match={{params: {bookId: 1}}}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('intl messages', () => {
    beforeEach(() => {
      wrapper = (shallowWithIntl(<BookDetail match={{params: {bookId: 1}}}/>)).shallow().shallow()
    });

    it('renders a single "purchase" message', () => {
      expect(wrapper.find({id: 'detail.purchase'})).toHaveLength(1);
    });

    it('passes number of merchants to "new window" message', () => {
      expect(wrapper.find({id: 'detail.window'}).prop('values')).toMatchObject({
        numMerchants: 3
      });
    });
  });
});