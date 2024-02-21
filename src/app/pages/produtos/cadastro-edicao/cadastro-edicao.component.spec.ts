import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEdicaoProdutosComponent } from './cadastro-edicao.component';

describe('CadastroEdicaoComponent', () => {
  let component: CadastroEdicaoProdutosComponent;
  let fixture: ComponentFixture<CadastroEdicaoProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroEdicaoProdutosComponent]
    });
    fixture = TestBed.createComponent(CadastroEdicaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
