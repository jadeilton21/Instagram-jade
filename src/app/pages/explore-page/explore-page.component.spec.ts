import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePageComponents } from './explore-page.component';

describe('ExplorePageComponent', () => {
  let component: ExplorePageComponents;
  let fixture: ComponentFixture<ExplorePageComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorePageComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorePageComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
