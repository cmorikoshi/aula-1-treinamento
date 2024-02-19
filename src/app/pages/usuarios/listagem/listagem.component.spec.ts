import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemUsuariosComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: ListagemUsuariosComponent;
  let fixture: ComponentFixture<ListagemUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemUsuariosComponent]
    });
    fixture = TestBed.createComponent(ListagemUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
