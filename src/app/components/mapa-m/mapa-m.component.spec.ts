import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaMComponent } from './mapa-m.component';

describe('MapaMComponent', () => {
  let component: MapaMComponent;
  let fixture: ComponentFixture<MapaMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
