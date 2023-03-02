import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { Person } from '../person';
import { state, style, trigger, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
       // transform: 'translateX(50px)',
        opacity: 1
      })),
      transition(':enter', [
        animate(500, style({
          transform:'translateY(20%)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class IndexComponent implements OnInit{

  estado = "void";
  persons:Person[] = [];

  // constructor() { }
  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getAll().subscribe((data: Person[])=>{
      this.persons = data;
      console.log(this.persons);
    })
  }

  deletePerson(id:number){
      this.personService.delete(id).subscribe(res =>{
      this.persons = this.persons.filter(item => item.id !== id);
      console.log('Persona borrada satisfactoriamente...');
    })
  }

}
