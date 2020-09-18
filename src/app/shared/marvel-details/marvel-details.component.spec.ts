import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelDetailsComponent } from './marvel-details.component';

describe('MarvelDetailsComponent', () => {
  let component: MarvelDetailsComponent;
  let fixture: ComponentFixture<MarvelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
