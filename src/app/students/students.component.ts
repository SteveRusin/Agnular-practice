import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../service/students.service';
import { Student } from '../student/student';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public studentsArray:Array<Student>;
  constructor(
    public studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.studentsArray = this.studentsService.getStudents();
  }

}
