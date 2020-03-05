import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingSampleComponent } from './data-binding-sample.component';

describe('DataBindingSampleComponent', () => {
  let component: DataBindingSampleComponent;
  let fixture: ComponentFixture<DataBindingSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
