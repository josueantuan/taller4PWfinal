import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDComponent } from './mapa-d.component';

describe('MapaDComponent', () => {
  let component: MapaDComponent;
  let fixture: ComponentFixture<MapaDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
