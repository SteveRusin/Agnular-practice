import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
@Input() name:string;
@Input() surname: string;
@Input() age: number;
@Input() url: string;
hidden = true;
inputName: string;
inputSurname: string;
  constructor() { }

  ngOnInit() {
  }

  edit(){
    this.hidden = !this.hidden;
  }

  save(){
    this.name = this.name;
    this.surname = this.surname;
    this.hidden = !this.hidden;
  }

}
