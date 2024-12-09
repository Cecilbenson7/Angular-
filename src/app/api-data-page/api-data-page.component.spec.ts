import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDataPageComponent } from './api-data-page.component';

describe('ApiDataPageComponent', () => {
  let component: ApiDataPageComponent;
  let fixture: ComponentFixture<ApiDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDataPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
