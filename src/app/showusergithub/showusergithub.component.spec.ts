import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowusergithubComponent } from './showusergithub.component';

describe('ShowusergithubComponent', () => {
  let component: ShowusergithubComponent;
  let fixture: ComponentFixture<ShowusergithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowusergithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowusergithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
