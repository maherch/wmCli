import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSuggestionComponent } from './liste-suggestion.component';

describe('ListeSuggestionComponent', () => {
  let component: ListeSuggestionComponent;
  let fixture: ComponentFixture<ListeSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
