import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamComponent } from './steam.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SteamComponent', () => {
  let component: SteamComponent;
  let fixture: ComponentFixture<SteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteamComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create steam component', () => {
    expect(component).toBeTruthy();
  });

  it('should render text title tab', () => {
    const fixture = TestBed.createComponent(SteamComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.tab p').textContent).toContain('Iniciar sessão no Steam');
  });

  it('should render text input and labels', () => {
    const fixture = TestBed.createComponent(SteamComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[for=\'user\']').textContent).toContain('Nome do usuário');
    expect(compiled.querySelector('[for=\'pass\']').textContent).toContain('Senha');
    expect(compiled.querySelector('#forget').textContent).toContain('Lembrar senha');
    expect(compiled.querySelector('#session').textContent).toContain('Iniciar sessão');
    expect(compiled.querySelector('#cancel').textContent).toContain('Cancelar');
  });

  it('should render text help buttons and labels', () => {
    const fixture = TestBed.createComponent(SteamComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.help label:nth-of-type(1)').textContent).toContain('Precisa de ajuda?');
    expect(compiled.querySelector('.help label:nth-of-type(2)').textContent).toContain('Não possui uma conta Steam?');
    expect(compiled.querySelector('#not-session').textContent).toContain('Não consigo iniciar a sessão...');
    expect(compiled.querySelector('#new-user').textContent).toContain('Criar uma nova conta...');
  });
});
