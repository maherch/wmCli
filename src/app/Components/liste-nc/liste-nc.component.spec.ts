import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNcComponent } from './liste-nc.component';

describe('ListeNcComponent', () => {
  let component: ListeNcComponent;
  let fixture: ComponentFixture<ListeNcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeNcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeNcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
