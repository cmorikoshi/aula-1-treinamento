import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEdicaoUsuariosComponent } from './cadastro-edicao.component';

describe('CadastroEdicaoComponent', () => {
  let component: CadastroEdicaoUsuariosComponent;
  let fixture: ComponentFixture<CadastroEdicaoUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroEdicaoUsuariosComponent]
    });
    fixture = TestBed.createComponent(CadastroEdicaoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
