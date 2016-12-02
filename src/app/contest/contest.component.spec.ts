import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContestComponent} from './contest.component';

let comp:    ContestComponent;
let fixture: ComponentFixture<ContestComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe('ContestComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(ContestComponent);

    comp = fixture.componentInstance; // Component test instance

    // query for the title .contest-header__name by CSS element selector
    de = fixture.debugElement.query(By.css('.contest-header__name'));
    el = de.nativeElement;

  });

  it('should display original title', () => {
  fixture.detectChanges();
  expect(el.textContent).toContain(comp.contest.name);
	});

});