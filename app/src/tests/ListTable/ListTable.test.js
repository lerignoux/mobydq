import React from 'react';
import { shallowWrap, mountWrap } from './../../setupTests';

import ListTable from '../../Components/ListTable/ListTable';
import DataSourceRepository from '../../repository/DataSourceRepository';

describe('List Table unit test', () => {
  let wrapper;
  const buttons = [{ 'function': 'edit', 'parameter': '/test-route' }];
  const data = [
    { 'id': 1, 'name': 'mock name', 'trueField': true, 'falseField': false, '__typename': 'Mock Type' },
    { 'id': 2, 'name': 'mock name 2', 'trueField': false, 'falseField': false, '__typename': 'Mock Type' }
  ];
  const props = {
    'repository': DataSourceRepository,
    'dataObjectName': 'allDataSources',
    'tableHeader': 'Data Sources',
    'sortColumn': null,
    'page': 1,
    'rowTotal': 2,
    'rowsPerPage': 10,
    'setPage': jest.fn(),
    'setRowsPerPage': jest.fn()
  };
  beforeEach(() => {
    wrapper = shallowWrap(<ListTable buttons={buttons} data={data} {...props}/>);
  });

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


describe('ListTable functional test', () => {
  it('renders table correctly, including boolean fields (True/False icons', () => {
    const buttons = [{ 'function': 'edit', 'parameter': '/test-route' }];
    const data = [
      { 'id': 1, 'name': 'mock name', 'trueField': true, 'falseField': false, '__typename': 'Mock Type' },
      { 'id': 2, 'name': 'mock name 2', 'trueField': false, 'falseField': false, '__typename': 'Mock Type' }
    ];
    const props = {
      'repository': DataSourceRepository,
      'dataObjectName': 'allDataSources',
      'tableHeader': 'Data Sources',
      'sortColumn': null,
      'page': 1,
      'rowTotal': 2,
      'rowsPerPage': 10,
      'setPage': jest.fn(),
      'setRowsPerPage': jest.fn()
    };
    const wrapper = mountWrap(<ListTable buttons={buttons} data={data} {...props}/>);
    expect(wrapper.find('ListTableRowButtons').exists()).toBe(true);
    expect(wrapper.find('ListTableRowButtons')).toHaveLength(2);
    expect(wrapper.find('EditIcon').exists()).toBe(true);
    expect(wrapper.find('tr')).toHaveLength(4);
    expect(wrapper.find('td')).toHaveLength(11);
    expect(wrapper.find('th')).toHaveLength(5);
    expect(wrapper.find('th').at(0)
      .text()).toEqual('Id');
    expect(wrapper.find('th').at(1)
      .text()).toEqual('Name');
    expect(wrapper.find('th').at(2)
      .text()).toEqual('True Field');
    expect(wrapper.find('th').at(3)
      .text()).toEqual('False Field');
    expect(wrapper.find('th').at(4)
      .text()).toEqual('Actions');
    expect(wrapper.find('th').at(0)
      .text()).toEqual('Id');
    expect(wrapper.find('th').at(1)
      .text()).toEqual('Name');
    expect(wrapper.find('td').at(0)
      .text()).toEqual('1');
    expect(wrapper.find('td').at(1)
      .text()).toEqual('mock name');
    expect(wrapper.find('td').at(5)
      .text()).toEqual('2');
    expect(wrapper.find('td').at(6)
      .text()).toEqual('mock name 2');
    expect(wrapper.find('DoneIcon')).toHaveLength(1);
    expect(wrapper.find('ClearIcon')).toHaveLength(3);
  });
  it('renders empty table body correctly', () => {
    const buttons = [];
    const data = [];
    const wrapper = mountWrap(<ListTable buttons={buttons} data={data}/>);
    expect(wrapper.text()).toEqual(null);
  });
});
