import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaSComponent } from './mapa-s.component';

describe('MapaSComponent', () => {
  let component: MapaSComponent;
  let fixture: ComponentFixture<MapaSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
