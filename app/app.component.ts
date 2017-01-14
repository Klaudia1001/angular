import { Component } from '@angular/core';
export class Student {
id: number;
name: string;
}

const STUDENTS: Student[] = [
  { id: 11, name: 'Anita' },
  { id: 12, name: 'Kasia' },
  { id: 13, name: 'Lucyna' },
  { id: 14, name: 'Ania' },
  { id: 15, name: 'Rafał' },
  { id: 16, name: 'Asia' },
  { id: 17, name: 'Roman' },
  { id: 18, name: 'Juri' },
  { id: 19, name: 'Piotrek' },
  { id: 20, name: 'Klaudia' }
];


@Component({
  selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>Students</h2>
        <ul class="heroes">
        <li *ngFor="let student of students" (click)="onSelect(student)" [class.selected]="student === selectedStudent">
    <span class="badge">{{student.id}}</span>
    {{student.name}}
        </li>
    </ul>
    <div *ngIf="selectedStudent">
    <h2>Imie: {{selectedStudent.name}} Id: {{selectedStudent.id}} </h2>
    <div>
        <label>name:</label>
        <input [(ngModel)]="selectedStudent.name" placeholder="Name">
        </div>
    
    </div>`,
    
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
   
})


export class AppComponent {
  title = 'Akademia 108 - Lista studetow';
  students= STUDENTS;
  selectedStudent : Student;    

onSelect(student: Student): void {
  this.selectedStudent = student;
}
  
}