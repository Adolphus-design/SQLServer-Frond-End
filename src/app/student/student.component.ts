import { Component, OnInit } from '@angular/core';
import { Student } from '../students';
import {StudServiceService } from '../stud-service.service'


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  data: any[] = []

  constructor(
    private studService: StudServiceService, 
  ) { }

  ngOnInit(){
    this.getStudents()
  }

  getStudents(){
    return this.studService.getUsers().subscribe( students => {this.data = students;
    console.log(this.data)})
  }

}
