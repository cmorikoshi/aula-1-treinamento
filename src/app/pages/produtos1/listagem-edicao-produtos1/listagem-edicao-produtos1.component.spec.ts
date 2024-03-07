import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEdicaoProdutos1Component } from './listagem-edicao-produtos1.component';

describe('ListagemEdicaoProdutos1Component', () => {
  let component: ListagemEdicaoProdutos1Component;
  let fixture: ComponentFixture<ListagemEdicaoProdutos1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemEdicaoProdutos1Component]
    });
    fixture = TestBed.createComponent(ListagemEdicaoProdutos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
