import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(100%)',
        opacity: 1
      })),
      transition(':enter', [
        animate(500, style({
          transform:'translateY(0%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class LoginComponent{
  estado = "void";

  login(form:NgForm)
  {
    const email = form.value.email
    const password = form.value.password
  }
}
