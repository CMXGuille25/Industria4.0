import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionBasicaComponent } from './animacion-basica.component';

describe('AnimacionBasicaComponent', () => {
  let component: AnimacionBasicaComponent;
  let fixture: ComponentFixture<AnimacionBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimacionBasicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimacionBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
