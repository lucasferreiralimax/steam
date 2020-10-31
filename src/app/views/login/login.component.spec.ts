import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text input and labels', () => {
    expect(compiled.querySelector('[for=\'user\']').textContent).toContain('Nome do usuário');
    expect(compiled.querySelector('[for=\'pass\']').textContent).toContain('Senha');
    expect(compiled.querySelector('#forget').textContent).toContain('Lembrar senha');
    expect(compiled.querySelector('#session').textContent).toContain('Iniciar sessão');
    expect(compiled.querySelector('#cancel').textContent).toContain('Cancelar');
  });

  it('should render text help buttons and labels', () => {
    expect(compiled.querySelector('.help label:nth-of-type(1)').textContent).toContain('Precisa de ajuda?');
    expect(compiled.querySelector('.help label:nth-of-type(2)').textContent).toContain('Não possui uma conta Steam?');
    expect(compiled.querySelector('#not-session').textContent).toContain('Não consigo iniciar a sessão...');
    expect(compiled.querySelector('#new-user').textContent).toContain('Criar uma nova conta...');
  });
});
