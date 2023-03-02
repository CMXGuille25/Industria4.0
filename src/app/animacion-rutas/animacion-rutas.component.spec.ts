import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionRutasComponent } from './animacion-rutas.component';

describe('AnimacionRutasComponent', () => {
  let component: AnimacionRutasComponent;
  let fixture: ComponentFixture<AnimacionRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimacionRutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimacionRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
