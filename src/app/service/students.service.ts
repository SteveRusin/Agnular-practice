import { Injectable } from '@angular/core';
import { Student } from '../student/student';

@Injectable()
export class StudentsService {
  public students:Array<Student> = 
  [
    {
      name: 'Dead',
      surname: 'Pool',
      age: 28,
      url: '../../assets/deadpool.jpg'
    },
    {
      name: 'Gambit',
      surname: 'X-man',
      age: 21,
      url: '../../assets/gambit.jpg'
    },
    {
      name: 'Tony',
      surname: 'Stark',
      age: 15,
      url: '../../assets/tony.jpg'
    },

  ]
  constructor() { }

  getStudents():Array<Student> {
    return this.students;
  }

}
