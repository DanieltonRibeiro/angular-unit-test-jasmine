import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PhotoFrameComponent', () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoFrameComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`#${PhotoFrameComponent.prototype.like.name} should trigger
  (@Output liked) once when called multiple times within debounce time`, fakeAsync(() => {
    let times = 0;
    component.liked.subscribe(() => {
      times++;
    });
    component.like();
    tick(500);
    expect(times).toBe(1);
  }));

  it(`#${PhotoFrameComponent.prototype.like.name} should trigger
  (@Output liked) two times when called outside debounce time`, fakeAsync(() => {
    let times = 0;
    component.liked.subscribe(() => {
      times++;
    });
    component.like();
    tick(500);
    component.like();
    tick(500);
    expect(times).toBe(2);
  }));
});
