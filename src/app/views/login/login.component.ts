import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  loginForm

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      remember: [ false ]
    })
  }

  onSubmitLogin(formData) {
    this.loginForm.controls['name'].disable()
    this.loginForm.controls['password'].disable()
    // this.windowHandler()
    this.avisoLegal()
    this.router.navigateByUrl('/dashboard');
    console.info('Valores do login:', formData.name)
  }

  cancelHandler () {
    this.loginForm.controls['name'].reset()
    this.loginForm.controls['password'].reset()
    this.loginForm.controls['name'].enable()
    this.loginForm.controls['password'].enable()
  }

  avisoLegal () {
    alert("Isso é um componente feito para estudos apenas.")
  }

  ngOnInit(): void {
    console.info('Isso é um componente feito para estudos, não utilize para fins sórdidos.')
    console.info('Este es un componente hecho para estudios, no lo use para propósitos sórdidos.')
    console.info('This is a component made for studies, do not use for sordid purposes.')
    console.info('Questo è un componente fatto per studi, non utilizzare per scopi sordidi.')
    console.info('Это компонент, созданный для учебы, не используйте его в грязных целях.')
    console.info('這是用於研究的組件，請勿用於骯髒的目的。')
  }

}
