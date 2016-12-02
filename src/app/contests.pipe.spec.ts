import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContestsNameFilter } from './contests.pipe';

describe('ContestsNameFilter', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  let pipe = new ContestsNameFilter();
  const contests = [{name: 'Search'}, {name: 'Hello'}]
  it('find contests', () => {
    expect(pipe.transform(contests, 'Se')).toEqual([{name: 'Search'}]);
  });
});